// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
// helper
import { toPersian } from '../../functions/utils.helper'
// style
import './InfoTags.scss'

const InfoTags = ({ title, description, style }) => (
  <div className="info-tags" style={style}>
    <Typography className="info-tags--description">
      {toPersian(description)}
    </Typography>
    <Typography className="info-tags--title">{title}</Typography>
  </div>
)

InfoTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InfoTags.defaultProps = {}

export default InfoTags
