// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import PenItems from './Components/PenItems/PenItems.container'

// styles
import './RecentPens.scss'

class Recentpens extends Component {
  componentDidMount() {
    const { fetchPens } = this.props
    fetchPens()
  }

  render() {
    const {
      pens,
      penClick,
      showSearch,
      searchQuery,
      setSearchQuery,
    } = this.props

    return (
      <div className="c--recentPens-root">
        {showSearch && (
          <input
            className="c--recentPens-searchBar"
            autoFocus
            onChange={setSearchQuery}
            value={searchQuery}
            type="text"
            placeholder="Search here ..."
          />
        )}
        <PenItems pens={pens} penClick={penClick} />
      </div>
    )
  }
}

Recentpens.propTypes = {
  fetchPens: PropTypes.func,
  pens: PropTypes.arrayOf(
    PropTypes.shape({
      writer: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  penClick: PropTypes.func,
  closeMenu: PropTypes.func,
}

Recentpens.defaultProps = {
  fetchPens: '',
  pens: [],
  penClick: Function.prototype,
  closeMenu: Function.prototype,
}

export default Recentpens
