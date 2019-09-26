// modules
import 'rxjs'
import { ofType, combineEpics } from 'redux-observable'
import { tap, mergeMap, filter, ignoreElements } from 'rxjs/operators'
// actions
import { dispatchSetResults } from '../Result/Result.action'
import {
  dispatchSetIsExamReady,
  dispatchSetIsExamStarted,
  dispatchSetIsExamFinished,
  dispatchSetIsParticipated,
  dispatchSetIsLoading,
  FETCH_INITIAL_DATA,
} from './App.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { dispatchSetExamInfo } from '../Home/Home.action'
import { dispatchSetExamDuration } from '../Exam/Exam.action'
// views
import { wisView, isAdminView, userIdView } from './App.reducer'
// helpers
// import { mapToUsername } from './Home.helper'
import { getRequest } from '../../helper/functions/request.helper'
import { push } from '../../setup/redux'

const initialFetchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_INITIAL_DATA),
    tap(() => dispatchSetIsLoading(true)),
    mergeMap(() =>
      Promise.all([
        getRequest(`/exam/${wisView()}`).on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
        getRequest(`/result`)
          .query({ stdId: userIdView(), examId: wisView() })
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage('Server disconnected!'),
          ),
        getRequest(`/exam/${wisView()}/count`)
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage('Server disconnected!'),
          ),
        getRequest(`/exam/${wisView()}/result`)
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage('Server disconnected!'),
          ),
      ]).then(([exam, result, participantsCount, results]) => ({ exam: exam.body, result: result.body, participantsCount: participantsCount.body, results: results.body })),
    ),
    filter(({ exam }) => {
      if (!exam) {
        dispatchSetIsLoading(false)
        return false
      }
      return true
    }),
    tap(() => push('/home')),
    tap(({ exam, participantsCount, result }) => dispatchSetExamInfo({ ...exam, participantsCount, result })),
    tap(({ exam }) => dispatchSetExamDuration(exam.duration * 60)),
    tap(() => dispatchSetIsExamReady(true)),
    tap(
      ({ exam }) =>
        new Date() > new Date(exam.startTime) && dispatchSetIsExamStarted(true),
    ),
    tap(
      ({ exam }) =>
        new Date() > new Date(exam.endTime) && dispatchSetIsExamFinished(true),
    ),
    tap(({ results }) => dispatchSetResults(results)),
    filter(() => !isAdminView()),
    tap(({ result }) => result && dispatchSetIsParticipated(true)),
    ignoreElements(),
  )
// .do(
//   ({ body }) =>
//     window.W &&
//     window.W.getUsersInfo(mapToUsername(body)).then(info => {
//       const users = R.values(info)
//       // TODO: load users
//     }),
// )
// .do(() => dispatchSetIsLoading(false))
// .ignoreElements()

// const initialFetchEpic = action$ =>
//   action$
//     .ofType(FETCH_INITIAL_DATA)
//     .do(() => window.W && window.W.start())
//     .do(() => dispatchSetIsLoading(true))
//     .mergeMap(() =>
//       getRequest('/initialFetch')
//         .query({ wis: wisView() })
//         .on(
//           'error',
//           err =>
//             err.status !== 304 &&
//             dispatchChangeSnackbarStage('Server disconnected!'),
//         ),
//     )
//     .do(({ body: { tasks } }) => dispatchLoadTasksData(tasks))
//     .do(() => dispatchSetIsLoading(false))
//     .ignoreElements()

export default combineEpics(initialFetchEpic)
