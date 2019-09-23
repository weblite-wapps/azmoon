import { connect } from 'react-redux'
import { getRequests } from '../../../../helper/functions/request.helper'

import Iframe from './Iframe'
import {
  dispatchSetRunningMode,
  dispatchChangeIframe,
} from '../../CreatePen.action'
import {
  iframeHtmlView,
  iframeCssView,
  iframeJsView,
} from '../../CreatePen.reducer'

const mapDispatchToProps = () => ({
  // fPen: getRequests,
  changeIframe: dispatchChangeIframe,
})

const mapStateToProps = () => ({
  html: iframeHtmlView(),
  css: iframeCssView(),
  js: iframeJsView(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Iframe)
