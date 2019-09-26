import * as R from 'ramda'
import { getState } from '../../setup/redux'
// actions
import { SET_RESULTS } from './Result.action'

// state
const initialState = {
  results: [],
}
//views
export const resultsView = () => R.path(['Result', 'results'])(getState())

// reducers
const reducers = {
  [SET_RESULTS]: (state, results) => ({
    ...state,
    results,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
