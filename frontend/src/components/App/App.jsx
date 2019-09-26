// modules

import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Home from '../Home/Home.container'
import AppBar from '../../helper/components/AppBar/AppBar.presentational'
// import Result from '../Result/Result.container'
// import Create from '../Create/Create.container'
// import Exam from '../Exam/Exam.container'
// import Exam from '../Exam/Exam.container'
// components
// import TimePicker from '../../helper/components/TimePicker/TimePicker.presentational'

//test
import { dispatchHandleStartExam } from '../Exam/Exam.action'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleWappMode = this._handleWappMode.bind(this)
    this.handleNormalMode = this._handleNormalMode.bind(this)
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') this.handleWappMode()
    else this.handleNormalMode()
    setTimeout(dispatchHandleStartExam, 1000)
  }

  _handleWappMode() {
    const { setAPI, fetchInitialData } = this.props
    window.W.loadData().then(({ creator, user }) => {
      setAPI(creator, user)
      fetchInitialData()
    })
  }

  _handleNormalMode() {
    const { setAPI, fetchInitialData } = this.props
    setAPI(true, { name: 'Ali', id: '5d8a554ddfc8d5055d9baff1' })
    fetchInitialData()
  }

  render() {
    return <AppBar />
  }
}

App.propTypes = {
  setData: PropTypes.func,
}
App.defaultProps = {
  setData: Function.prototype,
}
