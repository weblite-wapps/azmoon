import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
// local modules
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import '../../RecentPens.scss'
// svgs
import Disliked from '../../../Svgs/disliked'

const PenItems = ({ user, pens, send, like, penClick }) =>
  pens.map(pen => (
    <div className="c--pen-items" key={`${pen._id}`}>
      <div className="c--pen-header" role="presentation">
        <div className="c--pen-title">{pen.title}</div>
        <div className="c--pen-writer">BY: {pen.writer}</div>
      </div>
      <div className="c--pen-footer">
        <div className="c--pen-buttonPanel">
          <Link to="/CreatePen">
            <button
              style={{ background: '#2C2C2C', color: '#a3a3a3' }}
              className="c--pen-Button"
              onClick={() => penClick({ _id: pen._id, mode: 'EDIT' })}
            >
              EDIT
            </button>
          </Link>
          <Link to="/CreatePen">
            <button
              style={{ background: '#AA0000', color: '#a3a3a3' }}
              className="c--pen-Button"
              onClick={() => penClick({ _id: pen._id, mode: 'RUN' })}
            >
              RUN
            </button>
          </Link>
          <button
            style={{ background: '#0074AA', color: '#a3a3a3' }}
            className="c--pen-Button"
            onClick={() => send(pen._id)}
          >
            SEND
          </button>
        </div>
        <div className="c--recentPens-likePanel">
          {pen.likeCnt}
          <div>
            <Disliked
              // onClick={() => like(user, pen._id)}
              className="disliked"
            />
          </div>
        </div>
      </div>
    </div>
  ))

PenItems.propTypes = {
  send: PropTypes.func,
  pens: PropTypes.arrayOf(
    PropTypes.shape({
      writer: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  penClick: PropTypes.func,
  like: PropTypes.func,
  user: PropTypes.string,
}

PenItems.defaultProps = {
  send: Function.prototype,
  pens: [],
  penClick: Function.prototype,
  like: Function.prototype,
  user: '',
}
export default PenItems
