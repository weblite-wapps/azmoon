import * as R from 'ramda'

import { getState } from '../../setup/redux'

// actions
import {
  CHANGE_PEN,
  SET_WRITER_AND_TITLE,
  CHANGE_PREVIEW_MODE,
  CHANGE_PEN_VIEW_MODE,
  CHANGE_TAB_INDEX,
  SET_WRITER_CURRENT_PEN,
  RESET_STATE,
  SET_ISSAVED_TO_TRUE,
  SET_TITLE_EDIT_MODE,
  SET_RUNNING_MODE,
  SET_IFRAME,
  CHANGE_IFRAME,
  SET_CURRENTPEN_ID,
  SET_CLICKEDPEN_ID,
} from './CreatePen.action'
// import { userView } from '../App/App.reducer'

// const defaultHtml = `<html>
//   <body>
//     <div id="root"></div>
//   </body>
// </html>`
// state
const initialState = {
  html: '',
  css: '',
  js: '',
  writer: '',
  title: 'untitled',
  isSaved: true,
  previewIsShown: false,
  viewMode: 'simple',
  tabIndex: 0,
  titleEditMode: false,
  iframeHtml: '',
  iframeCss: '',
  iframeJs: '',
  _id: '',
}

// lens
const writerLens = R.lensProp('writer')
const isSavedLens = R.lensProp('isSaved')
const previewIsShownLens = R.lensProp('previewIsShown')
const viewModeLens = R.lensProp('viewMode')
const tabIndexLens = R.lensProp('tabIndex')
const titleEditModeLens = R.lensProp('titleEditMode')

// views
export const codesView = () => ({
  html: R.path(['CreatePen', 'html'])(getState()),
  css: R.path(['CreatePen', 'css'])(getState()),
  js: R.path(['CreatePen', 'js'])(getState()),
  writer: R.path(['CreatePen', 'writer'])(getState()),
  title: R.path(['CreatePen', 'title'])(getState()),
  _id: R.path(['CreatePen', '_id'])(getState()),
})

export const htmlView = () => R.path(['CreatePen', 'html'])(getState())
export const cssView = () => R.path(['CreatePen', 'css'])(getState())
export const jsView = () => R.path(['CreatePen', 'js'])(getState())
export const writerView = () => R.path(['CreatePen', 'writer'])(getState())
export const titleView = () => R.path(['CreatePen', 'title'])(getState())
export const isSavedView = () => R.path(['CreatePen', 'isSaved'])(getState())
export const previewView = () =>
  R.path(['CreatePen', 'previewIsShown'])(getState())
export const viewModeView = () => R.path(['CreatePen', 'viewMode'])(getState())
export const tabIndexView = () => R.path(['CreatePen', 'tabIndex'])(getState())
export const titleEditModeView = () =>
  R.path(['CreatePen', 'titleEditMode'])(getState())
export const iframeHtmlView = () =>
  R.path(['CreatePen', 'iframeHtml'])(getState())
export const iframeCssView = () =>
  R.path(['CreatePen', 'iframeCss'])(getState())
export const iframeJsView = () => R.path(['CreatePen', 'iframeJs'])(getState())
export const _idView = () => R.path(['CreatePen', '_id'])(getState())

const reducers = {
  [SET_CLICKEDPEN_ID]: (state, { mode, _id }) => ({
    ...state,
    _id,
    previewIsShown: mode === 'RUN',
    viewMode: mode === 'RUN' ? 'tabular' : 'simple',
  }),

  [CHANGE_PEN]: (state, { value, type }) => ({
    ...state,
    [type]: value,
    isSaved: false,
  }),

  [CHANGE_PREVIEW_MODE]: state =>
    R.set(previewIsShownLens, !state.previewIsShown, state),

  [CHANGE_PEN_VIEW_MODE]: state =>
    R.set(
      viewModeLens,
      state.viewMode === 'simple' ? 'tabular' : 'simple',
      state,
    ),

  [CHANGE_TAB_INDEX]: (state, { value }) => R.set(tabIndexLens, value, state),

  [SET_WRITER_CURRENT_PEN]: (state, { writer }) =>
    R.set(writerLens, writer, state),

  [RESET_STATE]: () => initialState,

  [SET_ISSAVED_TO_TRUE]: state => R.set(isSavedLens, true, state),

  [SET_TITLE_EDIT_MODE]: state =>
    R.set(titleEditModeLens, !state.titleEditMode, state),

  [SET_RUNNING_MODE]: state => ({
    ...state,
    previewIsShown: true,
    viewMode: 'tabular',
  }),

  [SET_IFRAME]: state => ({
    ...state,
    iframeHtml: state.html,
    iframeCss: state.css,
    iframeJs: state.js,
  }),

  [CHANGE_IFRAME]: (state, { value, type }) => ({
    ...state,
    [type]: value,
  }),

  [SET_CURRENTPEN_ID]: (state, { _id, writer }) => ({
    ...state,
    _id,
    writer,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
