import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { pluck, tap, ignoreElements, mergeMap } from 'rxjs/operators'
import { HANDLE_CREATE_QUIZ, diapatchSetIsLoading } from './Create.action'
import {
  getRequests,
  postRequests,
} from '../../helper/functions/request.helper'
const effectCreateQuiz = action$ =>
  action$.pipe(
    ofType(HANDLE_CREATE_QUIZ),
    pluck('payload'),
    tap(() => diapatchSetIsLoading(true)),
    mergeMap(data =>
      postRequests('/exam/new')
        // .send({...R.dissoc('questionIndex', data),_id: wisIdView()})
        .then()
        .catch(),
    ),
    tap(console.log),
    ignoreElements(),
  )

export default combineEpics(effectCreateQuiz)
