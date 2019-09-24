// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Home from '../Home/Home.container'
import Result from '../Result/Result.container'
// import Create from '../Create/Create.container'

import AppBar from '../../helper/components/AppBar/AppBar.presentational'
export default class App extends Component {
  // constructor(props) {
  //   super(props)
  // this.handleWappMode = this.handleWappMode.bind(this)
  // this.handleNormalMode = this.handleNormalMode.bind(this)
  // }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') this.handleWappMode()
    // else this.handleNormalMode()
  }

  handleWappMode() {
    const { setData } = this.props
    window.W.loadData().then(({ user: { name } }) => {
      setData(name, window.W.wisId)
      // TODO SET USER AND WIS ID
    })
  }

  handleNormalMode() {
    const { setData } = this.props
    setData('javad', '110')
    // console.log('normalMode :')
  }

  render() {
    return (
      <div>
        <AppBar />
        {/* <Home
          examTitle="آزمون جامع دین‌ و زندگی"
          examSection="درس یک تا پنج"
          examDuration="۳۰ دقیقه"
          examStatus="در حال برگزاری"
          examParticipantCount="۱۰ نفر"
          examMaxPercent="۹۳.۳۳٪"
          examMinPercent="۱۱.۲٪"
          examAveragePercent="۴۵٪"
          remainingTime="۱۴:۱۵:۳۰"
          userResult="۳۸.۳۳٪"
        /> */}
        <Result
          userResult="۳۸.۳۳٪"
          examParticipantCount="۱۰ نفر"
          examMaxPercent="۹۳.۳۳٪"
          examMinPercent="۱۱.۲٪"
          examAveragePercent="۴۵٪"
          results={[
            {
              profileImage: 'kind',
              fullName: 'مصطفی محسنی کبیر',
              finishTime: 'چهارشنبه - ۱۳:۳۰',
              score: '۱۰۰٪',
            },
            {
              profileImage: 'kind',
              fullName: 'مسعود محمدصالحی',
              finishTime: 'چهارشنبه - ۱۱:۳۰',
              score: '۹۰٪',
            },
            {
              profileImage: 'kind',
              fullName: 'علی عسگری',
              finishTime: 'چهارشنبه - ۱۲:۳۰',
              score: '۸۰٪',
            },
            {
              profileImage: 'kind',
              fullName: 'فرزین پزشکی',
              finishTime: 'سه‌شنبه - ۱۷:۳۰',
              score: '۶۰٪',
            },
          ]}
        />
      </div>
    )
  }
}

App.propTypes = {
  setData: PropTypes.func,
}
App.defaultProps = {
  setData: Function.prototype,
}
