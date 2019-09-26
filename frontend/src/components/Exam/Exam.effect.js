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
  HANDLE_CHANGE_EXAM_DURATION, handleChangeExamDuration,
  HANDLE_CHANGE_ANSWER_OPT,
  changeAnswerOpt,
  dispatchChangeExamDuration,
  dispatchStartExam,
  SET_USER_START_TIME,
  dispatchChangeAnswerOpt,
  HANDLE_END_EXAM_BUTTON_CLICK,
  HANDLE_FINAL_STAGE_CLICK,
} from './Exam.action'
// view
import { durationView, questionIndexView } from './Exam.reducer'
import { postRequest } from '../../helper/functions/request.helper'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { wisView, userIdView } from '../App/App.reducer'
import { push } from '../../setup/redux'
import { dispatchSetIsParticipated } from '../App/App.action'

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
        dispatchChangeSnackbarStage('5 minutes stood')
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
    map(changeAnswerOpt),
    pluck('payload', 'opt'),
    tap(dispatchChangeAnswerOpt),
    map(opt => ({
      opt,
      index: questionIndexView(),
      stdId: userIdView(),
      exam: wisView(),
    })),
    mergeMap(data =>
      postRequest('/result/saveOption')
        .send({ ...data, examId: wisView(), stdId: userIdView() })
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
    tap(console.log),
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
    tap(console.log),
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
    tap(console.log),
    ignoreElements(),
  )

export default combineEpics(
  effectStartExamEpic,
  effectDecreaseDurationEpic,
  effectChangeAnswerOptEpic,
  effectSetUserStartTime,
  effectEndExamButtonClick,
)
