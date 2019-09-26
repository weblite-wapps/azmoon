// modules
import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { pluck, tap, ignoreElements, mergeMap } from 'rxjs/operators'
// actions
import { HANDLE_CREATE_EXAM } from './Create.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { dispatchSetIsLoading, dispatchSetIsExamReady, dispatchSetIsExamStarted } from '../App/App.action'
import { dispatchSetExamInfo } from '../Home/Home.action'
// helpers
import { postRequest } from '../../helper/functions/request.helper'
import { push } from '../../setup/redux'
// views
import { wisView, userIdView } from '../App/App.reducer'
import { startTimeView } from '../Home/Home.reducer'


const effectCreateExam = action$ =>
  action$.pipe(
    ofType(HANDLE_CREATE_EXAM),
    pluck('payload'),
    tap(() => dispatchSetIsLoading(true)),
    tap(data => dispatchSetExamInfo(data)),
    mergeMap(data =>
      postRequest('/exam/new')
        .send({
          ...R.dissoc('questionIndex', data),
          _id: wisView(),
          creatorId: userIdView(),
        })
        .on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        )
        .catch(),
    ),
    tap(() => dispatchSetIsExamReady(true)),
    tap(() => (new Date() > new Date(startTimeView())) && dispatchSetIsExamStarted(true)),
    tap(() => push('/home')),
    ignoreElements(),
  )

export default combineEpics(effectCreateExam)
