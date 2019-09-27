// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
import { toPersian } from '../../functions/utils.helper'
// style
import './InfoTags.scss'

const InfoTags = ({ title, description }) => (
  <div className="info-tags">
    <Typography className="info-tags--description">{toPersian(description)}</Typography>
    <Typography className="info-tags--title">{title}</Typography>
  </div>
)

InfoTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

InfoTags.defaultProps = {
}

export default InfoTags
