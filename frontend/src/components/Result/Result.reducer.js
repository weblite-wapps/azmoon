import * as R from 'ramda'
import { getState } from '../../setup/redux'
// actions
import { SET_RESULTS } from './Result.action'
import { userIdView } from '../App/App.reducer'

// state
const initialState = {
  results: [],
}
//views
export const resultsView = () => R.path(['Result', 'results'])(getState())
export const userInfosView = () =>
  R.find(R.propEq('stdId', userIdView()), resultsView())
export const userRankView = () =>
  R.findIndex(R.propEq('stdId', userIdView()), resultsView())
// reducers
const reducers = {
  [SET_RESULTS]: (state, results) => ({
    ...state,
    results,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
