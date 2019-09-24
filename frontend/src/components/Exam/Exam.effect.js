import { ofType, combineEpics } from 'redux-observable'
import { tap, delay, map, pluck } from 'rxjs/operators'
import {
  HANDLE_START_EXAM,
  HANDLE_DECREASE_DURATION, handleDecreaseDuration,
  dispatchDecreaseDuration,
  dispatchStartExam,
} from './Exam.action'

const effectStartExamEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_START_EXAM),
    pluck('payload'),
    tap(dispatchStartExam),
    map(handleDecreaseDuration),
  )

const effectDecreaseDurationEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_DECREASE_DURATION),
    pluck('payload'),
    tap(dispatchDecreaseDuration),
    delay(1000),
    map(handleDecreaseDuration),
  )

export default combineEpics(
  effectStartExamEpic,
  effectDecreaseDurationEpic,
)