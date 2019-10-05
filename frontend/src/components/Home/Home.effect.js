// modules
import { ofType, combineEpics } from 'redux-observable'
import { tap, mergeMap, ignoreElements, delay, pluck, map } from 'rxjs/operators'
// actions
import {
  EFFECT_CHANGE_REMAINING_TIME,
  EFFECT_EDIT_EXAM,
  EFFECT_OPEN_EXAM,
  EFFECT_CLOSE_EXAM,
  EFFECT_START_EXAM,
  EFFECT_SHOW_RESULTS,
  EFFECT_SHOW_ANSWER_SHEET,
  effectChangeRemainingTime,
  dispatchDecrementRemainingTime,
} from './Home.action'
import {
  dispatchSetIsExamFinished,
  dispatchSetIsExamStarted,
} from '../App/App.action'
import { dispatchHandleStartExam } from '../Exam/Exam.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
// views
import { wisView } from '../App/App.reducer'
import { remainingTimeView } from './Home.reducer'
// helpers
import { push } from '../../setup/redux'
import { postRequest } from '../../helper/functions/request.helper'


const effectDecreaseRemainingTimeEpic = action$ =>
  action$.pipe(
    ofType(EFFECT_CHANGE_REMAINING_TIME),
    pluck('payload'),
    tap(dispatchDecrementRemainingTime),
    delay(1000),
    map(() => {
      if (remainingTimeView() < 1) {
        dispatchSetIsExamFinished(true)
        return { type: 'NOTHING' }
      } else return effectChangeRemainingTime()
    }),
  )

const effectEditExam = action$ =>
  action$.pipe(
    ofType(EFFECT_EDIT_EXAM),
    // mergeMap(() =>
    //   postRequest(`/exam/${wisView()}/start`)
    //     .on(
    //       'error',
    //       err =>
    //         err.status !== 304 &&
    //         dispatchChangeSnackbarStage('Server disconnected!'),
    //     )
    //   ),
    tap(() => console.log('edit exam effect')),
    ignoreElements(),
  )

const effectOpenExam = action$ =>
  action$.pipe(
    ofType(EFFECT_OPEN_EXAM),
    mergeMap(() =>
      postRequest(`/exam/${wisView()}/start`).on(
        'error',
        err =>
          err.status !== 304 &&
          dispatchChangeSnackbarStage('Server disconnected!'),
      ),
    ),
    tap(() => dispatchSetIsExamStarted(true)),
    tap(() => window.W && window.W.analytics('OPEN_EXAM')),
    ignoreElements(),
  )

const effectCloseExam = action$ =>
  action$.pipe(
    ofType(EFFECT_CLOSE_EXAM),
    mergeMap(() =>
      postRequest(`/exam/${wisView()}/end`).on(
        'error',
        err =>
          err.status !== 304 &&
          dispatchChangeSnackbarStage('Server disconnected!'),
      ),
    ),
    tap(() => dispatchSetIsExamFinished(true)),
    tap(() => window.W && window.W.analytics('CLOSE_EXAM')),
    ignoreElements(),
  )

const effectStartExam = action$ =>
  action$.pipe(
    ofType(EFFECT_START_EXAM),
    tap(() => push('/exam')),
    tap(dispatchHandleStartExam),
    tap(() => window.W && window.W.analytics('START_EXAM')),
    ignoreElements(),
  )

const effectShowResults = action$ =>
  action$.pipe(
    ofType(EFFECT_SHOW_RESULTS),
    // mergeMap(() =>
    //   postRequest(`/exam/${wisView()}/start`)
    //     .on(
    //       'error',
    //       err =>
    //         err.status !== 304 &&
    //         dispatchChangeSnackbarStage('Server disconnected!'),
    //     )
    //   ),
    tap(() => push('/result')),
    tap(() => window.W && window.W.analytics('SHOW_RESULTS')),
    ignoreElements(),
  )

const effectShowAnswerSheet = action$ =>
  action$.pipe(
    ofType(EFFECT_SHOW_ANSWER_SHEET),
    // mergeMap(() =>
    //   postRequest(`/exam/${wisView()}/start`)
    //     .on(
    //       'error',
    //       err =>
    //         err.status !== 304 &&
    //         dispatchChangeSnackbarStage('Server disconnected!'),
    //     )
    //   ),
    tap(() => push('/exam')),
    tap(() => window.W && window.W.analytics('SHOW_ANSWER_SHEET')),
    ignoreElements(),
  )

export default combineEpics(
  effectDecreaseRemainingTimeEpic,
  effectEditExam,
  effectOpenExam,
  effectCloseExam,
  effectStartExam,
  effectShowResults,
  effectShowAnswerSheet,
)
