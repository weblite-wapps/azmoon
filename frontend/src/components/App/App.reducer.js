import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {} from './App.action'

const initialState = {
  isAppBarOpen: false,
  stageName: '',
  stageLevel: 0,
}

// const menuIsOpenLens = R.lensProp('menuIsOpen')

export const appBarIsOpenView = () =>
  R.path(['App', 'isAppBarOpen'])(getState())
export const stageNameView = () => R.path(['App', 'stageName'])(getState())
export const stageLevelView = () => R.path(['App', 'stageLevel'])(getState())

const reducer = {
  // [SET_DATA]: (state, { user, wisId }) => ({
  //   ...state,
  //   user,
  //   wisId,
  // }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
