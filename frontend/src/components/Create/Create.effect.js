import { combineEpics, ofType } from 'redux-observable'
import { pluck, tap, ignoreElements } from 'rxjs/operators'

// const effectStartWapp = action$ =>
//   action$.pipe(
//     ofType(SET_DATA),
//     pluck('payload'),
//     tap(window.W && window.W.start()),
//     ignoreElements(),
//   )

// const effectMenuButtonClick = action$ =>
//   action$.pipe(
//     ofType(CHANGE_MENU_MODE),
//     pluck('payload'),
//     tap(dispatchSetAnchorEl),
//     ignoreElements(),
//   )

// const effectChangePage = action$ =>
//   action$.pipe(
//     ofType(SET_PAGE),
//     pluck('payload'),
//     tap(({ oldPage }) => oldPage === 'CreatePen' && dispatchResetState()),
//     // tap(console.log),
//     ignoreElements(),
//   )

export default combineEpics()
