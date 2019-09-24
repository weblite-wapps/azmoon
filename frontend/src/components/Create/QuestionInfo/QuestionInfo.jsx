import * as R from 'ramda'
// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '../../../helper/components/TextField/TextField.presentational'
import {
  soal,
  tasvireMarbootbeSoal,
  gozineYek,
  gozineDo,
  gozineChahar,
  gozineSe,
} from '../../../helper/functions/constants'
export default class QuestionInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prob: '',
      probAttach: '',
      options: [],
      correct: 0,
      sol: '',
      solAttach: '',
    }
    this.handleAddData = this.handleAddData.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddData(type) {
    return ({ target: { value } }) =>
      this.setState({
        [type]: value,
      })
  }

  handleAddOption(index) {
    return ({ target: { value } }) => {
      var arr = this.state.options
      arr[index] = value
      this.setState({
        options: arr,
      })
    }
  }

  render() {
    const { prob, questionImage, options, correct } = this.state
    const { changePage } = this.props
    return (
      <div>
        <button onClick={() => changePage(-1)}>back</button>
        <button onClick={() => changePage(1)}>forth</button>
        <TextField
          onChange={this.handleAddData('prob')}
          value={prob}
          label={soal}
        />
        <TextField
          onChange={this.handleAddOption(0)}
          value={options[0]}
          label={gozineYek}
        />
        <TextField
          onChange={this.handleAddOption(1)}
          value={options[1]}
          label={gozineDo}
        />
        <TextField
          onChange={this.handleAddOption(2)}
          value={options[2]}
          label={gozineSe}
        />
        <TextField
          onChange={this.handleAddOption(3)}
          value={options[3]}
          label={gozineChahar}
        />
        <div style={{ color: 'gray' }}>
          <div>gozineYek</div>
          <div>{gozineDo}</div>
          <div>{gozineSe}</div>
          <div>{gozineChahar}</div>
        </div>
      </div>
    )
  }
}

QuestionInfo.propTypes = {
  setInitialInfo: PropTypes.func,
}
QuestionInfo.defaultProps = {}
