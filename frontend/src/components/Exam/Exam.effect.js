import { ofType, combineEpics } from 'redux-observable'
import { tap, delay, map, pluck, mergeMap } from 'rxjs/operators'
import {
  HANDLE_START_EXAM,
  HANDLE_CHANGE_DURATION,
  handlechangeDuration,
  HANDLE_CHANGE_ANSWER_OPT,
  changeAnswerOpt,
  dispatchChangeDuration,
  dispatchStartExam,
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
    // tap(console.log),
    map(changeAnswerOpt),
    pluck('payload', 'opt'),
    map(opt => ({ opt, index: questionIndexView() })),
    tap(console.log),
    mergeMap(data =>
      postRequest('/kind')
        .query({ ...data, wisId: wisView(), creatorId: userIdView() })
        .on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
    ),

    tap(console.log),
  )

export default combineEpics(
  effectStartExamEpic,
  effectDecreaseDurationEpic,
  effectChangeAnswerOptEpic,
)
