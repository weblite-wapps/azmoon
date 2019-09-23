import { connect } from 'react-redux'

import CreatePen from './CreatePen'

import {
  dispatchChangePen,
  dispatchFetchPen,
  dispatchChangePreviewMode,
  dispatchChangePenViewMode,
  dispatchChangeTabIndex,
  dispatchSetWriterCurrentPen,
  dispatchResetState,
  dispatchsetTitleEditMode,
  dispatchSetIframe,
  dispatchRunClick,
} from './CreatePen.action'

import {
  htmlView,
  cssView,
  jsView,
  writerView,
  titleView,
  previewView,
  viewModeView,
  tabIndexView,
  isSavedView,
  titleEditModeView,
  _idView,
} from './CreatePen.reducer'
import { appUserView, pageView } from '../App/App.reducer'

const mapDispatchTpProps = () => ({
  fetchPen: dispatchFetchPen,
  changePen: dispatchChangePen,
  // changeMenu: dispatchChangeMenuMode,
  changeTab: dispatchChangeTabIndex,
  setWriter: dispatchSetWriterCurrentPen,
  clearState: dispatchResetState,
  titleModeChange: dispatchsetTitleEditMode,
  run: dispatchRunClick,
  // updatePen: dispatchSetIframe,
})

const mapStateToprops = () => ({
  htmlContent: htmlView(),
  cssContent: cssView(),
  jsContent: jsView(),
  writerName: writerView(),
  title: titleView(),
  isSaved: isSavedView(),
  previewIsOpen: previewView(),
  viewMode: viewModeView(),
  tabIndex: tabIndexView(),
  appUser: appUserView(),
  editableTitle: titleEditModeView(),
  page: pageView(),
  _id: _idView(),
})

export default connect(
  mapStateToprops,
  mapDispatchTpProps,
)(CreatePen)
