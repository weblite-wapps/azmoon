import React from 'react'
import PropTypes from 'prop-types'
// third party packages
import Fab from '@material-ui/core/Fab'
// components
import assets from './assets'
// helper
import { cns, ab } from '../../../../functions/utils.helper'
// style
import '../../main/StageManager.scss'
const defaultStyle = {
  height: 25,
  padding: 0,
  borderRadius: 50,
  backgroundColor: '#7dd9de',
  minWidth: 25,
}

const ArrowButton = ({ type, hasError, title }) => {
  const Comp = assets[type]

  const buttonCN = cns(
    'recast--arrow-button',
    ab('arrow-button__error')(hasError),
  )

  return (
    <Fab
      className={buttonCN}
      size="small"
      variant="extended"
      type="button"
      style={{
        ...defaultStyle,
        ...(type !== 'Titled' && { width: 25 }),
      }}
    >
      <Comp {...(type === 'Titled' && { title: title })} />
    </Fab>
  )
}
ArrowButton.propTypes = {
  type: PropTypes.oneOf(['Titled', 'Left', 'Right']).isRequired,
  hasError: PropTypes.bool,
  title: PropTypes.string,
}
ArrowButton.defaultProps = {
  hasError: false,
  title: '',
}

export default ArrowButton
