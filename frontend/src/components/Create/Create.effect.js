// modules
import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { pluck, tap, ignoreElements, mergeMap } from 'rxjs/operators'
// actions
import { HANDLE_CREATE_EXAM } from './Create.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { dispatchSetIsLoading, dispatchSetIsExamReady } from '../App/App.action'
// helpers
import { postRequest } from '../../helper/functions/request.helper'
import { push } from '../../setup/redux'
// views
import { wisView, userIdView } from '../App/App.reducer'


const effectCreateExam = action$ =>
  action$.pipe(
    ofType(HANDLE_CREATE_EXAM),
    pluck('payload'),
    tap(() => dispatchSetIsLoading(true)),
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
    tap(() => push('/home')),
    ignoreElements(),
  )

export default combineEpics(effectCreateExam)
