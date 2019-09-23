// modules
import React, { Component } from 'react'
import PropTypes, { shape } from 'prop-types'
import { Link } from '@reach/router'
// local modules
import PenItems from './Components/PenItems/PenItems.container'

class Dashboard extends Component {
  componentWillMount() {
    const { user, fetchPens } = this.props
    fetchPens(user)
  }

  render() {
    const { pens, user, penClick, send } = this.props

    return (
      <div style={{ width: '350px', border: '2px solid black' }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/CreatePen">CreatePen</Link>
        <p>Dashboard</p>

        <PenItems pens={pens} penClick={penClick} send={send} user={user} />
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(
    PropTypes.shape({ writer: PropTypes.string, title: PropTypes.string }),
  ),
  penClick: PropTypes.func,
  user: PropTypes.string,
  send: PropTypes.func,
}

Dashboard.defaultProps = {
  fetchPens: Function.prototype,
  pens: [],
  penClick: Function.prototype,
  user: 'javad',
  send: Function.prototype,
}

export default Dashboard
