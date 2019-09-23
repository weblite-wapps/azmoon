// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Iframe from './Components/Iframe/Iframe.container'
import Codes from './Components/Codes/Codes.container'
class Content extends Component {
  render() {
    return (
      <>
        <Iframe {...this.props} />
        <Codes {...this.props} />
      </>
    )
  }
}

Content.propTypes = {}

Content.defaultProps = {}

export default Content
