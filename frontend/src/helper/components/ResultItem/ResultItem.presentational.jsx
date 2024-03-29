// modules
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
// helpers
import { toPersian } from '../../functions/utils.helper'
// style
import './ResultItem.scss'

const getMedal = rank => {
  if (rank === 1) return 'gold'
  else if (rank === 2) return 'silver'
  else if (rank === 3) return 'bronze'
  return null
}
const ResultItem = ({ rank, profileImage, fullName, finishTime, score, school }) => (
  <div className="c--result-item_container" dir="rtl">
    <div className="c--result-item_right-segment">
      <Typography style={{ margin: '11px' }} variant="subtitle2">
        {toPersian(rank)}
      </Typography>
    </div>

    <div className="c--result-item_left-segment">
      <div className="c--result-item_user-info">
        <Avatar
          alt={fullName}
          src={
            profileImage
              ? `https://www.weblite.me:3000/image/${profileImage}`
              : 'images/user.svg'
          }
          style={{ background: '#BC7DDE' }}
        ></Avatar>

        <div className="c--result-item_text">
          <Typography
            noWrap
            variant="subtitle1"
            align="right"
            style={{ width: '100%' }}
          >
            {fullName}
          </Typography>
          <Typography
            style={{ fontSize: '8px' }}
            variant="body2"
            align="center"
          >
            {finishTime} - {school}
          </Typography>
        </div>
      </div>

      {getMedal(rank) && (
        <div className="c--result-item_medal">
          <img alt="home" src={`images/${getMedal(rank)}-medal.svg`} />
        </div>
      )}

      <Typography variant="subtitle2" style={{ direction: 'ltr' }}>
        {toPersian(score)}
      </Typography>
    </div>
  </div>
)

ResultItem.propTypes = {
  rank: PropTypes.number.isRequired,
  profileImage: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  finishTime: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
}

export default ResultItem
