import React from 'react'
import PropTypes from 'prop-types'
// third party packages
// components
import assets from './assets'
// helper
import { cns, ab } from '../../../../functions/utils.helper'
// style
import '../../main/StageManager.scss'

const ArrowButton = ({ type, hasError }) => {
  const Comp = assets[type]

  const buttonCN = cns(
    'recast--arrow-button',
    ab('arrow-button__error')(hasError),
  )

  return (
    <button className={buttonCN} type="button">
      <Comp />
    </button>
  )
}
ArrowButton.propTypes = {
  type: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
}
ArrowButton.defaultProps = {
  hasError: false,
}

export default ArrowButton