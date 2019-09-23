// modules
import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const FETCH_RECENT_PENS = 'FETCH_RECENT_PENS'
export const fetchRecentPens = createAction(FETCH_RECENT_PENS)
export const dispatchFetchRecentPens = (...args) =>
  dispatch(fetchRecentPens(...args))

export const SET_RECENT_PENS = 'SET_RECENT_PENS'
export const setRecentPens = createAction(SET_RECENT_PENS, pens => ({
  pens,
}))
export const dispatchSetRecentPens = (...args) =>
  dispatch(setRecentPens(...args))
// console.log('... :', ...args)

export const SET_SEARCH_IS_SHOWN = 'SET_SEARCH_IS_SHOWN'
export const setSearchIsShown = createAction(SET_SEARCH_IS_SHOWN)
export const dispatchSetSearchIsShown = () => dispatch(setSearchIsShown())

export const SET_MENU_IS_SHOWN = 'SET_MENU_IS_SHOWN'
export const setMenuIsShown = createAction(SET_MENU_IS_SHOWN)
export const dispatchSetMenuIsShown = () => dispatch(setMenuIsShown())

export const SET_CLOSE_MENU = 'SET_CLOSE_MENU'
export const setCloseMenu = createAction(SET_CLOSE_MENU)
export const dispatchSetCloseMenu = () => dispatch(setCloseMenu())

export const LIKE_PEN = 'LIKE_PEN'
export const likePen = createAction(LIKE_PEN, (user, _id) => ({ user, _id }))
export const dispatchLikePen = (...args) => dispatch(likePen(...args))

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const setSearchQuery = createAction(SET_SEARCH_QUERY)
export const dispatchSetSearchQuery = (...args) =>
  dispatch(setSearchQuery(...args))
