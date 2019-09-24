// modules
import React from 'react'
import PropTypes from 'prop-types'
// styles
import '../../main/StageManager.scss'

const StageManagerInfo = ({ stageName, stageLevel }) => (
  <div className="stage-manager--info">
    <p className="stage-manager--info__stage-name text-clamp">{stageName}</p>
    <span className="stage-manager--info__stage">{stageLevel}</span>
  </div>
)

StageManagerInfo.propTypes = {
  stageLevel: PropTypes.string.isRequired,
  stageName: PropTypes.string.isRequired,
}

export default StageManagerInfo