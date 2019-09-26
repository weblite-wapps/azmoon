// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExamInfos from './ExamInfos/ExamInfos.container'
import QuestionInfo from './QuestionInfo/QuestionInfo.container'

// TODO: make functional
export default class Create extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { index } = this.props
    // console.log(index)
    return index === -1 ? <ExamInfos /> : <QuestionInfo />
  }
  //
}

Create.propTypes = {
  index: PropTypes.number,
}
Create.defaultProps = {}
