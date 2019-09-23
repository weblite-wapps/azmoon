import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const SET_DATA = 'SET_DATA'
export const setData = createAction(SET_DATA, (user, wisId) => ({
  user,
  wisId,
}))
export const dispatchSetData = (...args) => dispatch(setData(...args))

export const SET_PAGE = 'SET_PAGE'
export const setPage = createAction(SET_PAGE, (oldPage, newPage) => ({
  oldPage,
  newPage,
}))
export const dispatchSetPage = (...args) => dispatch(setPage(...args))

export const SET_ANCHOREL = 'SET_ANCHOREL'
export const setAnchorEl = createAction(SET_ANCHOREL)
export const dispatchSetAnchorEl = (...args) => dispatch(setAnchorEl(...args))

export const CHANGE_MENU_MODE = 'CHANGE_MENU_MODE'
export const changeMenuMode = createAction(CHANGE_MENU_MODE)
export const dispatchChangeMenuMode = args => dispatch(changeMenuMode(args))

export const CLOSE_MENU = 'CLOSE_MENU'
export const closeMenu = createAction(CLOSE_MENU)
export const dispatchCloseMenu = () => dispatch(closeMenu())
