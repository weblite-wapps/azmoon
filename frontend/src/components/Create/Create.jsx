// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExamInfos from './ExamInfos/ExamInfos.container'
import QuestionInfo from './QuestionInfo/QuestionInfo.container'

export default class Create extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { index } = this.props
    // console.log(index)
    return !index ? <ExamInfos /> : <QuestionInfo />
  }
  //
}

Create.propTypes = {
  index: PropTypes.number,
}
Create.defaultProps = {}
