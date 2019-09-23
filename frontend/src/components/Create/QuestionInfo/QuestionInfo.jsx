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
      title: '',
      questionImage: '',
      choise: {
        a: '',
        b: '',
        c: '',
        d: '',
      },
      correctChoise: 0,
    }
  }

  render() {
    const { title, questionImage, choise, correctChoise } = this.state
    const { changePage } = this.props
    return (
      <div>
        <button onClick={() => changePage(-1)}>back</button>
        <button onClick={() => changePage(1)}>forth</button>
        <TextField value={title} label={soal} />
        <TextField value={choise.a} label={gozineYek} />
        <TextField value={choise.b} label={gozineDo} />
        <TextField value={choise.c} label={gozineSe} />
        <TextField value={choise.d} label={gozineChahar} />
      </div>
    )
  }
}

QuestionInfo.propTypes = {
  setInitialInfo: PropTypes.func,
}
QuestionInfo.defaultProps = {}
