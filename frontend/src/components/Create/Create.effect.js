import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { pluck, tap, ignoreElements, mergeMap } from 'rxjs/operators'
import { HANDLE_CREATE_QUIZ, diapatchSetIsLoading } from './Create.action'
import { postRequest } from '../../helper/functions/request.helper'
import { wisView, userIdView } from '../App/App.reducer'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { push } from '../../setup/redux'
const effectCreateQuiz = action$ =>
  action$.pipe(
    ofType(HANDLE_CREATE_QUIZ),
    pluck('payload'),
    tap(() => diapatchSetIsLoading(true)),
    tap(console.log),
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
    // tap(() => push('/'))
    tap(console.log),
    ignoreElements(),
  )

export default combineEpics(effectCreateQuiz)
