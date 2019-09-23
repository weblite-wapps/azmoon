// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import MoreIcon from './../Svgs/More'
import Close from './../Svgs/Close'
import Plus from './../Svgs/Plus'
import Search from './../Svgs/Search'
import More from '../App/Component/Menu/Menu.container'
import Button from '@material-ui/core/Button'

import { Link } from '@reach/router'
//Styles
import './App.scss'
class LeftIcon extends Component {
  render() {
    const { page, changePage } = this.props
    // console.log('changePage ', changePage)
    return (
      <div className="leftIcon">
        {page === 'CreatePen' && (
          <Link to="/">
            <Close
              className="button"
              onClick={() => changePage('CreatePen', 'RecentPens')}
            />
          </Link>
        )}
        {page === 'RecentPens' && (
          <Link to="/CreatePen">
            <Plus
              className="button"
              onClick={() => changePage('RecentPens', 'CreatePen')}
            />
          </Link>
        )}
        {/* {page === 'RecentPens' && <Plus />} */}
      </div>
    )
  }
}

LeftIcon.propTypes = {}
LeftIcon.defaultProps = {}

class RightIcon extends Component {
  render() {
    const { page, anchorEl, openMenu, searchClick } = this.props
    return (
      <div className="rightIcon">
        {page === 'CreatePen' && (
          <>
            <MoreIcon
              className="button"
              onClick={e => openMenu(e.currentTarget)}
            >
              <Button aria-controls="simple-menu" aria-haspopup="true" />
            </MoreIcon>
            <More anchorEl={anchorEl} id={'simple-menu'} {...this.props} />
          </>
        )}
        {page === 'RecentPens' && (
          <Search className="button" onClick={searchClick} />
        )}
      </div>
    )
  }
}

RightIcon.propTypes = {}
RightIcon.defaultProps = {}

class HeadTitle extends Component {
  render() {
    const { page } = this.props
    return (
      <>
        {
          <div className="title" role="presentation">
            <div className="pene">PENNE</div>
            <div className="lite">LITE</div>
          </div>
        }
      </>
    )
  }
}
HeadTitle.propTypes = {}
HeadTitle.defaultProps = {}

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <LeftIcon {...this.props} />
        <HeadTitle {...this.props} />
        <RightIcon {...this.props} />
      </div>
    )
  }
}

Header.propTypes = {}
Header.defaultProps = {}
