import * as R from 'ramda'
import { getState } from '../../setup/redux'

import { SET_WRITER_PENS } from './Dashboard.action'

const initialState = {
  writerPens: [],
}

export const userPensView = () =>
  R.path(['Dashboard', 'writerPens'])(getState())

const reducers = {
  [SET_WRITER_PENS]: (state, { pens }) => ({
    writerPens: pens,
  }),
  // console.log('pens :', pens[0]),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
