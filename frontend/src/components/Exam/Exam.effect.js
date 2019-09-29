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
  handleChangeExamDuration,
  HANDLE_CHANGE_ANSWER_OPT,
  dispatchChangeExamDuration,
  dispatchStartExam,
  SET_USER_START_TIME,
  dispatchChangeAnswerOpt,
  HANDLE_FINAL_STAGE_CLICK,
} from './Exam.action'
// view
import { durationView, questionIndexView, answersView } from './Exam.reducer'
import { postRequest } from '../../helper/functions/request.helper'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { wisView, userIdView, userNameView } from '../App/App.reducer'
import { push } from '../../setup/redux'
import { dispatchSetIsParticipated } from '../App/App.action'
import { creatorIdView } from '../Home/Home.reducer'

const effectStartExamEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_START_EXAM),
    pluck('payload'),
    tap(dispatchStartExam),
    map(handleChangeExamDuration),
  )

const effectDecreaseDurationEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_EXAM_DURATION),
    pluck('payload'),
    tap(dispatchChangeExamDuration),
    delay(1000),
    map(() => {
      if (295 < durationView() && durationView() < 300) {
        dispatchChangeSnackbarStage('زمان باقی مانده: ۵ دقیقه')
      }
      if (durationView() < 1) {
        push('/home')
        dispatchSetIsParticipated(true)
        return { type: 'NOTHING' }
      } else return handleChangeExamDuration()
    }),
  )

const effectChangeAnswerOptEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_ANSWER_OPT),
    pluck('payload', 'opt'),
    // map(changeAnswerOpt),
    // tap(a => console.log('2 ', a)),
    // pluck('payload', 'opt'),
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
        .send({ exam: wisView(), stdId: userIdView() })
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
    tap(() => dispatchSetIsParticipated(true)),
    tap(() => window.W && window.W.sendNotificationToUsers("آزمون", `${userNameView()} در آزمون شرکت کرد`, "", [creatorIdView()])),
    ignoreElements(),
  )

export default combineEpics(
  effectStartExamEpic,
  effectDecreaseDurationEpic,
  effectChangeAnswerOptEpic,
  effectSetUserStartTime,
  effectEndExamButtonClick,
)
