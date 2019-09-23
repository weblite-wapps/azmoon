import * as R from 'ramda'
import { getState } from '../../setup/redux'
import {
  SET_DATA,
  SET_PAGE,
  SET_ANCHOREL,
  CHANGE_MENU_MODE,
  CLOSE_MENU,
} from './App.action'

const initialState = {
  user: '',
  wisId: '',
  page: 'RecentPens',
  anchorEl: null,
  menuIsOpen: false,
}

const menuIsOpenLens = R.lensProp('menuIsOpen')

export const appUserView = () => R.path(['App', 'user'])(getState())
export const wisView = () => R.path(['App', 'wisId'])(getState())
export const pageView = () => R.path(['App', 'page'])(getState())
export const anchorElView = () => R.path(['App', 'anchorEl'])(getState())
export const menuView = () => R.path(['App', 'menuIsOpen'])(getState())

const reducer = {
  [SET_DATA]: (state, { user, wisId }) => ({
    ...state,
    user,
    wisId,
  }),
  [SET_PAGE]: (state, { oldPage, newPage }) => ({
    ...state,
    page: newPage,
  }),
  [SET_ANCHOREL]: (state, anchorEl) => ({
    ...state,
    anchorEl,
  }),

  [CLOSE_MENU]: state => R.set(menuIsOpenLens, false, state),

  [CHANGE_MENU_MODE]: state => R.set(menuIsOpenLens, !state.menuIsOpen, state),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
