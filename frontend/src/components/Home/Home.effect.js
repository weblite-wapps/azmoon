import { ofType, combineEpics } from 'redux-observable'
import { tap, delay, map, pluck } from 'rxjs/operators'
import {
  HANDLE_START_EXAM,
  HANDLE_CHANGE_DURATION, handlechangeDuration,
  HANDLE_CHANGE_ANSWER_OPT,
  changeAnswerOpt,
  dispatchChangeDuration,
  dispatchStartExam,
} from './Exam.action'
// view
import { durationView } from './Exam.reducer'

const effectOpenExam = action$ =>
  action$.pipe(
    ofType(HANDLE_START_EXAM),
    pluck('payload'),
    tap(dispatchStartExam),
    map(handlechangeDuration),
  )

const effectCloseExam = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_DURATION),
    pluck('payload'),
    tap(dispatchChangeDuration),
    delay(1000),
    map(() => {
      if (durationView() < 1) {
        // TODO: handle it guys pls ;)
        console.log('do something after time ends!!!!')
        return { type: 'NOTHING' }
      } else return handlechangeDuration()
    }),
  )

// const effectChangeAnswerOptEpic = action$ =>
//   action$.pipe(
//     ofType(HANDLE_CHANGE_ANSWER_OPT),
//     pluck('payload', 'opt'),
//     map(changeAnswerOpt),
//     // TODO: handle it guys pls :)
//     tap(() => console.log('send result to server!!!!!')),
//   )


export default combineEpics(
    effectOpenExam,
    effectCloseExam,
    effectChangeAnswerOptEpic,
)