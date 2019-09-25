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
  HANDLE_CHANGE_DURATION,
  handlechangeDuration,
  HANDLE_CHANGE_ANSWER_OPT,
  changeAnswerOpt,
  dispatchChangeDuration,
  dispatchStartExam,
  SET_USER_START_TIME,
  dispatchChangeAnswerOpt,
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
    map(handlechangeDuration),
  )

const effectDecreaseDurationEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_DURATION),
    pluck('payload'),
    tap(dispatchChangeDuration),
    delay(1000),
    map(() => {
      if (295 < durationView() && durationView() < 300) {
        dispatchChangeSnackbarStage('5 minutes stood')
      }
      if (durationView() < 1) {
        push('/home')
        dispatchSetIsParticipated(true)
        return { type: 'NOTHING' }
      } else return handlechangeDuration()
    }),
  )

const effectChangeAnswerOptEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_ANSWER_OPT),
    pluck('payload', 'opt'),
    tap(() => console.log(111)),
    tap(console.log),
    map(changeAnswerOpt),
    pluck('payload', 'opt'),
    tap(dispatchChangeAnswerOpt),
    map(opt => ({
      opt,
      index: questionIndexView(),
      stdId: userIdView(),
      exam: wisView(),
    })),
    tap(console.log),
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
    tap(console.log),
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

export default combineEpics(
  effectStartExamEpic,
  effectDecreaseDurationEpic,
  effectChangeAnswerOptEpic,
  effectSetUserStartTime,
)
