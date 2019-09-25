import { ofType, combineEpics } from 'redux-observable'
import { tap, delay, map, pluck } from 'rxjs/operators'
import {
  HANDLE_START_EXAM,
  HANDLE_CHANGE_EXAM_DURATION, handleChangeExamDuration,
  HANDLE_CHANGE_ANSWER_OPT,
  changeAnswerOpt,
  dispatchChangeExamDuration,
  dispatchStartExam,
} from './Exam.action'
// view
import { durationView } from './Exam.reducer' 

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
      if (durationView() < 1) {
        // TODO: handle it guys pls ;)
        console.log('do something after time ends!!!!')
        return { type: 'NOTHING' }
      } else return handleChangeExamDuration()
    }),
  )

const effectChangeAnswerOptEpic = action$ =>
  action$.pipe(
    ofType(HANDLE_CHANGE_ANSWER_OPT),
    pluck('payload', 'opt'),
    map(changeAnswerOpt),
    // TODO: handle it guys pls :)
    tap(() => console.log('send result to server!!!!!')),
  )


export default combineEpics(
  effectStartExamEpic,
  effectDecreaseDurationEpic,
  effectChangeAnswerOptEpic,
)