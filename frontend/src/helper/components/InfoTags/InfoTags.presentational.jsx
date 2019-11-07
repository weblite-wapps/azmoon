// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
// helper
import { toPersian } from '../../functions/utils.helper'
// style
import './InfoTags.scss'

const InfoTags = ({ title, description, style, direction }) => (
  <div className="info-tags" style={style}>
    <Typography className="info-tags--description" style={{ direction }}>
      {toPersian(description)}
    </Typography>
    <Typography className="info-tags--title">{title}</Typography>
  </div>
)

InfoTags.propTypes = {
  title: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['rtl', 'ltr']),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InfoTags.defaultProps = {
  direction: 'rtl',
}

export default InfoTags
