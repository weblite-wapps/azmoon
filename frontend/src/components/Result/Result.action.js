// modules
import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

// actions
export const SET_RESULTS = 'SET_RESULTS'
const setResults = createAction(SET_RESULTS)
export const dispatchSetResults = (...args) => dispatch(setResults(...args))


// effects
// export const EFFECT_HANDLE_RETURN = 'EFFECT_HANDLE_RETURN'
// const effectHandleReturn = createAction(EFFECT_HANDLE_RETURN)
// export const dispatchEffectHandleReturn = (...args) => dispatch(effectHandleReturn(...args))