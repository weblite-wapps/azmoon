// modules
import * as R from 'ramda'
import 'rxjs'
import { isWithinRange } from 'date-fns'
import { ofType, combineEpics } from 'redux-observable'
import { tap, mergeMap, filter, ignoreElements } from 'rxjs/operators'
// actions
import {
  dispatchSetIsExamReady,
  dispatchSetIsExamStarted,
  dispatchSetIsExamFinished,
  dispatchSetIsParticipated,
  dispatchSetIsLoading,
  FETCH_INITIAL_DATA,
} from './App.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
// views
import {
  wisView,
  isAdminView,
  userIdView,
} from './App.reducer'
// helpers
// import { mapToUsername } from './Home.helper'
import {
  getRequest,
  postRequest,
} from '../../helper/functions/request.helper'


const initialFetchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_INITIAL_DATA),
    tap(() => dispatchSetIsLoading(true)),
    mergeMap(() =>
      Promise.all([
        getRequest(`/exam/${wisView()}`)
          .on(
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
      ]).then(([exam, result]) => ({ exam, result }))
    ),
    filter(({ exam }) => {
      if (!exam) {
        dispatchSetIsLoading(false)
        return false
      }
      return true
    }),
    tap(() => dispatchSetIsExamReady(true)),
    tap(({ exam }) => isWithinRange(
      new Date(), new Date(exam.startTime), new Date(exam.endTime)
    ) && dispatchSetIsExamStarted(true)),
    tap(({ exam }) => new Date() > new Date(exam.endTime) && dispatchSetIsExamFinished(true)),
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


export default combineEpics(
  initialFetchEpic,
)
