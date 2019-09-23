import React, { Component } from 'react'
import PropTypes from 'prop-types'

// module
import { Link } from '@reach/router'
import IconButton from '@material-ui/core/IconButton'

// Svgs

import Edit from './../../../Svgs/Edit'

// style
import '../../CreatePen.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(text, type) {
    const { changePen } = this.props
    changePen(text, type)
    // console.log('text, type :', text, type)
  }

  render() {
    const { editableTitle, title, titleModeChange, run } = this.props
    return (
      <div className="penTitleBar">
        <div style={{ display: 'flex' }}>
          {(editableTitle && (
            <input
              className="title"
              onChange={e => this.handleChange(e.target.value, 'title')}
              value={title}
              placeholder="title"
              type="search"
            />
          )) || <div style={{ width: '50px' }}>{title}</div>}
          <Edit onClick={titleModeChange} className="edit" />
        </div>
        <button onClick={run} className="run">
          RUN
        </button>
      </div>
    )
  }
}
Header.propTypes = {
  clearState: PropTypes.func,
  changeMenu: PropTypes.func,
}

Header.defaultProps = {
  clearState: Function.prototype,
  changeMenu: Function.prototype,
}
export default Header
