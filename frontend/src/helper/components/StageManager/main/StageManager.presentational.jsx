import React from 'react'
import PropTypes from 'prop-types'
// third party packages
// components
import StageManagerInfo from '../components/StageManagerInfo/StageManagerInfo.presentational'
import ArrowButton from '../components/ArrowButton/ArrowButton.presentational'
// style
import './StageManager.scss'

const StageManager = ({
  error,
  onLeftClick,
  onRightClick,
  onFinalStageClick,
  stageLevel,
  stageName,
  finalStageLabel,
  finalStage,
  firstStage,
}) => (
  <div className="recast--stage-manager">
    {finalStage ? (
      <ArrowButton
        type="Titled"
        title={finalStageLabel}
        onClick={onFinalStageClick}
      />
    ) : (
      <ArrowButton type="Left" onClick={onLeftClick} />
    )}
    <StageManagerInfo stageName={stageName} stageLevel={stageLevel} />
    {!firstStage && <ArrowButton type="Right" onClick={onRightClick} hasError={error} />}
  </div>
)

StageManager.propTypes = {
  error: PropTypes.bool,
  finalStage: PropTypes.bool,
  firstStage: PropTypes.bool,
  finalStageLabel: PropTypes.string.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  onFinalStageClick: PropTypes.func.isRequired,
  stageLevel: PropTypes.string.isRequired,
  stageName: PropTypes.string,
}
StageManager.defaultProps = {
  error: false,
  finalStage: false,
  firstStage: false,
  stageName: '',
}

export default StageManager
