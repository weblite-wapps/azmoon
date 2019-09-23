// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// local modules
import Header from './Components/Header/Header.container'
import Content from './CreatePen.helper'

// styles
import './CreatePen.scss'

class CreatePen extends Component {
  render() {
    return (
      <div className="root">
        <Header {...this.props} />
        <Content {...this.props} />
      </div>
    )
  }
}

CreatePen.propTypes = {}

CreatePen.defaultProps = {}

export default CreatePen
