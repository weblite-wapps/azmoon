// modules
import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { pluck, tap, ignoreElements, mergeMap, map } from 'rxjs/operators'
// actions
import { HANDLE_CREATE_EXAM, dispatchAddQuestion } from './Create.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { dispatchSetIsLoading, dispatchSetIsExamReady, dispatchSetIsExamStarted } from '../App/App.action'
import { dispatchSetHomeInfo, dispatchEffectChangeRemainingTime } from '../Home/Home.action'
// helpers
import { postRequest } from '../../helper/functions/request.helper'
import { push } from '../../setup/redux'
// views
import { wisView, userIdView } from '../App/App.reducer'
import { startTimeView } from '../Home/Home.reducer'
import { currentStateView } from './Create.reducer'

const effectCreateExam = action$ =>
  action$.pipe(
    ofType(HANDLE_CREATE_EXAM),
    pluck('payload'),
    tap(dispatchAddQuestion),
    tap(() => dispatchSetIsLoading(true)),
    map(currentStateView),
    tap(dispatchSetHomeInfo),
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
    tap(() => dispatchEffectChangeRemainingTime()),
    tap(() => window.W && window.W.analytics('CREATE_EXAM')),
    ignoreElements(),
  )

export default combineEpics(effectCreateExam)
