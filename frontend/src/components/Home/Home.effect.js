import { ofType, combineEpics } from 'redux-observable'
import { tap, delay, map, pluck, ignoreElements } from 'rxjs/operators'
import {
  EFFECT_OPEN_EXAM,
  EFFECT_CLOSE_EXAM,
  EFFECT_START_EXAM,
} from './Home.action'
// view
// import { durationView } from './Exam.reducer'
// helpers
import { push } from '../../setup/redux'


// const effectOpenExam = action$ =>
//   action$.pipe(
//     ofType(EFFECT_OPEN_EXAM),
//     pluck('payload'),
//     tap(dispatchStartExam),
//     map(handlechangeDuration),
//   )

// const effectCloseExam = action$ =>
//   action$.pipe(
//     ofType(EFFECT_CLOSE_EXAM),
//     pluck('payload'),
//     tap(dispatchChangeDuration),
//     delay(1000),
//     map(() => {
//       if (durationView() < 1) {
//         // TODO: handle it guys pls ;)
//         console.log('do something after time ends!!!!')
//         return { type: 'NOTHING' }
//       } else return handlechangeDuration()
//     }),
//   )

const effectStartExam = action$ =>
  action$.pipe(
    ofType(EFFECT_START_EXAM),
    pluck('payload'),
    tap(console.log),
    tap(() => push('/exam')),
    ignoreElements(),
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
    // effectOpenExam,
    // effectCloseExam,
    effectStartExam,
)