import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
} from './App.action'

const initialState = {
}

// const menuIsOpenLens = R.lensProp('menuIsOpen')

// export const appUserView = () => R.path(['App', 'user'])(getState())

const reducer = {
  // [SET_DATA]: (state, { user, wisId }) => ({
  //   ...state,
  //   user,
  //   wisId,
  // }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
