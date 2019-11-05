import * as R from 'ramda'
import { ofType, combineEpics } from 'redux-observable'
import {
  tap,
  delay,
  map,
  pluck,
  mergeMap,
  ignoreElements,
} from 'rxjs/operators'
import {
  HANDLE_START_EXAM,
  HANDLE_CHANGE_EXAM_DURATION,
  HANDLE_CHANGE_ANSWER_OPT,
  SET_USER_START_TIME,
  HANDLE_FINAL_STAGE_CLICK,
  handleChangeExamDuration,
  dispatchChangeExamDuration,
  dispatchStartExam,
  dispatchChangeAnswerOpt,
  dispatchSetUserStartTime,
  dispatchHandleFinalStageClick,
  HANDLE_CHANGE_QUESTION_INDEX,
  dispatchHandleChangeAnswerOpt,
  dispatchChangeQuestionIndex,
} from './Exam.action'
// view
import { durationView, questionIndexView, answersView } from './Exam.reducer'
import { postRequest } from '../../helper/functions/request.helper'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import {
  wisView,
  userIdView,
  userNameView,
  schoolView,
} from '../App/App.reducer'
import { push } from '../../setup/redux'
import { dispatchSetIsParticipated } from '../App/App.action'

const effectStartExamEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_START_EXAM),
    pluck('payload'),
    tap(dispatchSetUserStartTime),
    tap(() => dispatchStartExam([])),
    map(handleChangeExamDuration),
  )

const effectDecreaseDurationEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_EXAM_DURATION),
    pluck('payload'),
    tap(dispatchChangeExamDuration),
    delay(1000),
    map(() => {
      if (55 < durationView() && durationView() < 65) {
        dispatchChangeSnackbarStage('زمان باقی مانده: ۱ دقیقه')
      }
      if (durationView() < 1) {
        dispatchHandleFinalStageClick()
        return { type: 'NOTHING' }
      } else return handleChangeExamDuration()
    }),
  )

const effectChangeAnswerOptEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_ANSWER_OPT),
    pluck('payload', 'opt'),
    map(opt => ({
      opt:
        R.prop('opt', R.nth(questionIndexView(), answersView())) === opt
          ? null
          : opt,
      index: questionIndexView(),
      stdId: userIdView(),
      exam: wisView(),
    })),
    tap(({ opt, index }) => dispatchChangeAnswerOpt(opt, index)),
    // tap(console.log),
    mergeMap(data =>
      postRequest('/result/saveOption')
        .send({
          ...data,
          dur: R.path(['dur'], R.nth(questionIndexView(), answersView())),
        })
        .on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
    ),
    ignoreElements(),
  )

const effectSetUserStartTime = action$ =>
  action$.pipe(
    ofType(SET_USER_START_TIME),
    mergeMap(() =>
      postRequest('/result/start')
        .send({ exam: wisView(), stdId: userIdView(), school: schoolView() })
        .on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
    ),
    ignoreElements(),
  )

const effectEndExamButtonClick = action$ =>
  action$.pipe(
    ofType(HANDLE_FINAL_STAGE_CLICK),
    tap(
      () =>
        typeof R.prop('opt', R.nth(questionIndexView(), answersView())) !==
          'number' && dispatchHandleChangeAnswerOpt(null),
    ),
    delay(0),
    mergeMap(() =>
      postRequest('/result/end')
        .send({ exam: wisView(), stdId: userIdView() })
        .on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
    ),
    tap(() => push('/home')),
    tap(() =>
      dispatchChangeSnackbarStage('خسته نباشید! منتظر اعلام نتایج بمانید'),
    ),

    tap(() => dispatchSetIsParticipated(true)),
    // tap(
    //   () =>
    //     window.W &&
    //     window.W.sendNotificationToAdmins(
    //       'آزمون',
    //       `${userNameView()} در آزمون شرکت کرد`,
    //     ),
    // ),
    tap(() => window.W && window.W.analytics('FINISH_EXAM')),
    ignoreElements(),
  )

const effectHandleChangeQuestionIndex = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_QUESTION_INDEX),
    tap(
      () =>
        typeof R.prop('opt', R.nth(questionIndexView(), answersView())) !==
          'number' && dispatchHandleChangeAnswerOpt(null),
    ),
    delay(0),
    tap(() => dispatchChangeQuestionIndex(1)),
    ignoreElements(),
  )

export default combineEpics(
  effectStartExamEpic,
  effectDecreaseDurationEpic,
  effectChangeAnswerOptEpic,
  effectSetUserStartTime,
  effectEndExamButtonClick,
  effectHandleChangeQuestionIndex,
)
