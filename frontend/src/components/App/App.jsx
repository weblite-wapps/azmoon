// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FileUpload from '../../helper/components/FileUpload/FileUpload.presentational'

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
        <FileUpload
          uploadLabel="انتخاب فایل"
          id="question-file-upload"
          onUpload={() => alert('file uploaded')}
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
