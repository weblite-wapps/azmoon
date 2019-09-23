import * as R from 'ramda'
// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
// import { IconButton } from 'weblite-web-relite'
import FullScreen from './../../../Svgs/FullScreen'

// styles
import '../../CreatePen.scss'

class Iframe extends Component {
  constructor(props) {
    super(props)
    this.fullScreen = this.fullScreen.bind(this)
    // this.run = this.run.bind(this)
  }

  // componentWillMount() {
  //   const { htmlContent } = this.props
  //   console.log('componentWillMount htmlContent ', htmlContent)
  // }

  componentDidMount() {
    const { fetchPen } = this.props
    fetchPen()
    // console.log('fetchPen ', fetchPen)
    // const { htmlContent, cssContent, jsContent } = this.props
    // const iRef = this.iframeRef.contentWindow.document
    // iRef.open()
    // iRef.write(htmlContent)
    // iRef.write(`<style>${cssContent}</style>`)
    // iRef.write(`<script>${jsContent}</script>`)
    // iRef.close()
    // const iRef = this.iframeRef.contentWindow.document
    // const { fPen, changeIframe, _id } = this.props
    // console.log('_id', _id)
    // fPen('/fetchSinglePen')
    // .query({ _id })
    // .then(res => res.body)
    // .then(console.log)
    // .then(R.forEachObjIndexed(dispatchChangePen))
    // .then(({ html, css, js }) => {
    //   changeIframe(html, 'iframeHtml')
    //   changeIframe(css, 'iframeCss')
    //   changeIframe(js, 'iframeJs')
    // })
    // .catch(console.log)
    // R.map(console.log, body)
    // { body }) => {
    // console.log(html)
    // dispatchChangePen(html, 'html')
    // iRef.write(html)
    // iRef.write(`<style>${css}</style>`)
    // iRef.write(`<script>${js}</script>`)
    // }
    // )
    // .then(res => console.log('res', res.body))
    // .then(res => console.log('res', res.body))
    // iRef.write(htmlContent)
    // iRef.write(`<style>${cssContent}</style>`)
    // iRef.write(`<script>${jsContent}</script>`)
    // iRef.close()
  }

  // shouldComponentUpdate() {}

  componentDidUpdate() {
    const { html, css, js } = this.props
    const iRef = this.iframeRef.contentWindow.document
    iRef.open()
    iRef.write(`<html><body>${html}</body></html>`)
    iRef.write(`<style>${css}</style>`)
    iRef.write(`<script>${js}</script>`)
    iRef.close()
  }

  // run() {
  //   const { htmlContent, cssContent, jsContent, runMode } = this.props
  //   const iRef = this.iframeRef.contentWindow.document
  //   iRef.open()
  //   iRef.write(htmlContent)
  //   iRef.write(`<style>${cssContent}</style>`)
  //   iRef.write(`<script>${jsContent}</script>`)
  //   iRef.close()
  //   runMode()
  // }

  fullScreen() {
    const iRef = this.iframeRef
    if (!document.fullscreenElement) {
      iRef
        .requestFullscreen()
        .then({})
        .catch(err => {
          console.log(
            `Error attempting to enable full-screen mode: ${err.message} (${
              err.name
            })`,
          )
        })
    } else {
      document.exitFullscreen()
    }
  }

  render() {
    const { previewIsOpen } = this.props
    return (
      <div>
        <div
          className="iframePanel"
          style={{
            display: previewIsOpen ? '' : 'none',
          }}
        >
          <FullScreen onClick={this.fullScreen} className="fullScreen" />
          <iframe
            className="iframe"
            width="100%"
            ref={iframe => {
              this.iframeRef = iframe
            }}
            color="white"
            allowFullScreen
            height="200px"
            title="penneliteIframe"
            id="iframe"
          />
        </div>
      </div>
    )
  }
}

Iframe.propTypes = {
  htmlContent: PropTypes.string,
  cssContent: PropTypes.string,
  jsContent: PropTypes.string,
  previewIsOpen: PropTypes.bool,
  runMode: PropTypes.func,
  fPen: PropTypes.func,
  writerName: PropTypes.string,
  title: PropTypes.string,
  html: PropTypes.string,
  css: PropTypes.string,
  js: PropTypes.string,
  changeIframe: PropTypes.func,
}

Iframe.defaultProps = {
  htmlContent: '',
  cssContent: '',
  jsContent: '',
  previewIsOpen: false,
  runMode: Function.prototype,
  fPen: Function.prototype,
  writerName: 'javad',
  title: 'title 1',
  html: '',
  css: '',
  js: '',
  changeIframe: Function.prototype,
}

export default Iframe
