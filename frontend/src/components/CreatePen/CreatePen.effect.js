// import rxjs from 'rxjs'
import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import {
  ignoreElements,
  tap,
  pluck,
  mergeMap,
  map,
  filter,
} from 'rxjs/operators'
import {
  dispatchChangePen,
  SAVE_PEN,
  FETCH_PEN,
  dispatchSetIsSavedToTrue,
  RUN_CLICK,
  dispatchSetIframe,
  dispatchSetRunningMode,
  dispatchSetCurrentPenId,
} from './CreatePen.action'
import { codesView, _idView, writerView } from './CreatePen.reducer'

import {
  postRequests,
  getRequests,
} from '../../helper/functions/request.helper'
import { appUserView } from '../App/App.reducer'

const effectSavePenEpic = action$ =>
  action$.pipe(
    ofType(SAVE_PEN),
    tap(() =>
      postRequests('/updateCurrentPen')
        .send(
          appUserView() === writerView()
            ? codesView()
            : { ...codesView(), _id: '', writer: appUserView() },
        )
        .then(res => dispatchSetCurrentPenId(R.prop('body', res)))
        // .then(res => console.log(R.prop('body', res)))
        .catch(() => console.log("couldn't update")),
    ),
    tap(dispatchSetIsSavedToTrue),
    ignoreElements(),
  )

const effectRunPenEpic = action$ =>
  action$.pipe(
    ofType(RUN_CLICK),
    tap(dispatchSetIframe),
    tap(dispatchSetRunningMode),
    ignoreElements(),
  )

const effectFetchPenEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PEN),
    filter(() => _idView()),
    mergeMap(() => getRequests('/fetchSinglePen').query({ _id: _idView() })),
    map(R.prop('body')),
    tap(R.forEachObjIndexed(dispatchChangePen)),
    tap(dispatchSetIframe),
    ignoreElements(),
  )

export default combineEpics(
  effectSavePenEpic,
  effectRunPenEpic,
  effectFetchPenEpic,
)
