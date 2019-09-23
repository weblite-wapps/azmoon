import { combineEpics, ofType } from 'redux-observable'
import { CHANGE_MENU_MODE, dispatchSetAnchorEl, SET_PAGE, SET_DATA } from './App.action'
import { pluck, tap, ignoreElements } from 'rxjs/operators'
import { dispatchResetState } from '../CreatePen/CreatePen.action'


const effectStartWapp = action$ =>
  action$.pipe(
    ofType(SET_DATA),
    pluck('payload'),
    tap(window.W && window.W.start()),
    ignoreElements(),
  )



const effectMenuButtonClick = action$ =>
  action$.pipe(
    ofType(CHANGE_MENU_MODE),
    pluck('payload'),
    tap(dispatchSetAnchorEl),
    ignoreElements(),
  )

const effectChangePage = action$ =>
  action$.pipe(
    ofType(SET_PAGE),
    pluck('payload'),
    tap(({ oldPage }) => oldPage === 'CreatePen' && dispatchResetState()),
    // tap(console.log),
    ignoreElements(),
  )

export default combineEpics(effectMenuButtonClick, effectChangePage, effectStartWapp)
