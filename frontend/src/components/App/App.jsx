// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import TextArea from '../../helper/components/Textarea/Textarea.presentational'
import TextField from '../../helper/components/TextField/TextField.presentational'
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
=======
import StageManager from '../../helper/components/StageManager/main/StageManager.presentational'
>>>>>>> 6a63bfc16803c598f9e31dbc789e24a6c88bab0e

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
      <div style={{ margin: 15 }}>
<<<<<<< HEAD
        <TextArea label="AB" />

        <br />
        <TextField label="AB" placeholder="placeholder" />
        <br />
        <InfoTags title="vaziat" description="87%" />
=======
        <StageManager
          finalStage
          onLeftClick={() => console.log('kind')}
          onRightClick={() => console.log('shit')}
          stageLevel="سوال شماره ۱"
          stageName="نام آزمون"
        />
>>>>>>> 6a63bfc16803c598f9e31dbc789e24a6c88bab0e
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
