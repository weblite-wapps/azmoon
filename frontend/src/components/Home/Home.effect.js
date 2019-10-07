// modules
import { ofType, combineEpics } from 'redux-observable'
import { tap, mergeMap, ignoreElements } from 'rxjs/operators'
// actions
import {
  EFFECT_EDIT_EXAM,
  EFFECT_OPEN_EXAM,
  EFFECT_CLOSE_EXAM,
  EFFECT_START_EXAM,
  EFFECT_SHOW_RESULTS,
  EFFECT_SHOW_ANSWER_SHEET,
  effectChangeRemainingTime,
  dispatchDecrementRemainingTime,
  EFFECT_HANDLE_SUBMIT_SCHOOL,
  dispatchSetIsSchoolModalOpen,
} from './Home.action'
import {
  dispatchSetIsExamFinished,
  dispatchSetIsExamStarted,
  dispatchSetSchool,
} from '../App/App.action'
import { dispatchHandleUserStartTime } from '../Exam/Exam.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
// views
import { wisView } from '../App/App.reducer'
import { wisView, userIdView } from '../App/App.reducer'
import { remainingTimeView } from './Home.reducer'
// helpers
import { push } from '../../setup/redux'
import { postRequest } from '../../helper/functions/request.helper'


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
    ignoreElements(),
  )

const effectStartExam = action$ =>
  action$.pipe(
    ofType(EFFECT_START_EXAM),
    tap(() => push('/exam')),
    tap(dispatchHandleUserStartTime),
    ignoreElements(),
  )

const effectShowResults = action$ =>
  action$.pipe(
    ofType(EFFECT_SHOW_RESULTS),
    tap(() => push('/result')),
    ignoreElements(),
  )

const effectShowAnswerSheet = action$ =>
  action$.pipe(
    ofType(EFFECT_SHOW_ANSWER_SHEET),
    tap(() => push('/exam')),
    ignoreElements(),
  )

const effectHandleSubmitSchool = action$ =>
  action$.pipe(
    ofType(EFFECT_HANDLE_SUBMIT_SCHOOL),
    pluck('payload'),
    mergeMap(school =>
      postRequest(`/user/${userIdView()}`)
        .send({ school })
        .on(
        'error',
        err =>
          err.status !== 304 &&
          dispatchChangeSnackbarStage('Server disconnected!'),
      ),
    ),
    tap(dispatchSetSchool),
    tap(() => dispatchSetIsSchoolModalOpen(false)),
    ignoreElements(),
  )

export default combineEpics(
  effectEditExam,
  effectOpenExam,
  effectCloseExam,
  effectStartExam,
  effectShowResults,
  effectShowAnswerSheet,
  effectHandleSubmitSchool,
)
