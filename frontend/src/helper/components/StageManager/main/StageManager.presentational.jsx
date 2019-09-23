import React from 'react'
import PropTypes from 'prop-types'
// third party packages
// components
import Button from '../../Button/Button.presentational'
import StageManagerInfo from '../components/StageManagerInfo/StageManagerInfo.presentational'
import ArrowButton from '../components/ArrowButton/ArrowButton.presentational'
// style
import './StageManager.scss'

const StageManager = ({
  error,
  onLeftClick,
  onRightClick,
  stageLevel,
  stageName,
  finalStage,
}) => (
  <div className="recast--stage-manager">
    {finalStage ? (
      <Button label="اتمام آزمون" />
    ) : (
      <ArrowButton type="Left" onClick={onLeftClick} />
    )}
    <StageManagerInfo stageName={stageName} stageLevel={stageLevel} />
    <ArrowButton type="Right" onClick={onRightClick} hasError={error} />
  </div>
)

StageManager.propTypes = {
  error: PropTypes.bool,
  finalStage: PropTypes.bool,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  stageLevel: PropTypes.string.isRequired,
  stageName: PropTypes.string,
}
StageManager.defaultProps = {
  error: false,
  finalStage: false,
  stageName: '',
}

export default StageManager