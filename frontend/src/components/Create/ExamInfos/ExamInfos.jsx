// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from './../../../helper/components/TextField/TextField.presentational'
import {
  mabhaseAzmoon,
  nameAzmoon,
  tedadeSoal,
  zamaneAzmoon,
  ijadeAzmoon,
} from '../../../helper/functions/constants'
export default class ExamInfos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      section: '',
      questionCount: 20,
      duration: 15,
      startTime: {
        date: null,
        hour: null,
      },
      endTime: {
        date: null,
        hour: null,
      },
    }
    this.handleAddData = this.handleAddData.bind(this)
  }

  handleAddData(e, type) {
    return this.setState({
      [type]: e.target.value,
    })
  }

  componentDidUpdate() {
    console.log('new state ', this.state)
  }

  render() {
    const { title, context, duration, questionCount } = this.state
    const { setInitialInfo } = this.props
    return (
      <div>
        <TextField
          onChange={e => this.handleAddData(e, 'title')}
          value={title}
          label={nameAzmoon}
        />
        <TextField
          onChange={e => this.handleAddData(e, 'section')}
          value={context}
          label={mabhaseAzmoon}
        />
        <TextField
          onChange={e => this.handleAddData(e, 'questionCount')}
          value={questionCount}
          label={tedadeSoal}
        />
        <TextField
          onChange={e => this.handleAddData(e, 'duration')}
          value={duration}
          label={zamaneAzmoon}
        />
        <button onClick={() => setInitialInfo(this.state)}>
          {ijadeAzmoon}
        </button>
      </div>
    )
  }
}

ExamInfos.propTypes = {
  setInitialInfo: PropTypes.func,
}
ExamInfos.defaultProps = {}
