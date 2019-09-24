import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
// style
import './InfoTags.scss'

const InfoTags = ({ title, description }) => (
  <div className="info-tags">
    <Typography className="info-tags--description">{description}</Typography>
    <Typography className="info-tags--title">{title}</Typography>
  </div>
)

InfoTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default InfoTags
