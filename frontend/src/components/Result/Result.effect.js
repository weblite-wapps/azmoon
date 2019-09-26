// modules
import { ofType, combineEpics } from 'redux-observable'
import { tap, mergeMap, ignoreElements } from 'rxjs/operators'
// actions
import { EFFECT_HANDLE_RETURN } from './Result.action'
// views
// helpers
import { push } from '../../setup/redux'


const effectEditExam = action$ =>
  action$.pipe(
    ofType(EFFECT_HANDLE_RETURN),
    // mergeMap(() =>
    //   postRequest(`/exam/${wisView()}/start`)
    //     .on(
    //       'error',
    //       err =>
    //         err.status !== 304 &&
    //         dispatchChangeSnackbarStage('Server disconnected!'),
    //     )
    //   ),
    tap(() => push('/home')),
    ignoreElements(),
  )


export default combineEpics(
  effectEditExam,
)