// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles } from '@material-ui/core/styles'

import StageManagerInfo from '../components/StageManagerInfo/StageManagerInfo.presentational'
import ArrowButton from '../components/ArrowButton/ArrowButton.presentational'
// helpers
import { toPersian } from '../../../functions/utils.helper'
// style
import './StageManager.scss'

const useStyles = makeStyles(() => ({
  anchorOriginBottomCenter: {
    bottom: 'unset',
    top: 130,
    '& > div > div:nth-child(2)': {
      width: '100%',
      marginLeft: 'unset',
      padding: 0,
    },
  },
  typography: {
    fontSize: 12,
    lineHeight: '17px',
    letterSpacing: -0.07,
  },
  text: {
    flexGrow: 2,
  },
}))

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
  examMode,
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className="recast--stage-manager">
      {examMode && finalStage && (
        <>
          <ArrowButton
            type="Titled"
            title={finalStageLabel}
            onClick={() => setOpen(true)}
          />
          <Snackbar
            open={open}
            className={`${classes.anchorOriginBottomCenter} ${classes.action}`}
            TransitionComponent={props => <Slide {...props} direction="down" />}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            action={
              <>
                <Button
                  color="inherit"
                  size="small"
                  className={classes.typography}
                  onClick={() => {
                    onFinalStageClick()
                    onClose()
                  }}
                >
                  بله
                </Button>

                <Button
                  color="inherit"
                  size="small"
                  onClick={onClose}
                  className={classes.typography}
                >
                  نه
                </Button>
                <Typography
                  align="right"
                  id="message-id"
                  className={`${classes.typography} ${classes.text}`}
                >
                  آیا مطمئن هستید؟
                </Typography>
              </>
            }
          />
        </>
      )}
      {!finalStage && <ArrowButton type="Left" onClick={onLeftClick} />}
      <StageManagerInfo
        stageName={toPersian(stageName)}
        stageLevel={toPersian(stageLevel)}
      />
      {!firstStage && (
        <ArrowButton type="Right" onClick={onRightClick} hasError={error} />
      )}
    </div>
  )
}

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
  examMode: PropTypes.bool.isRequired,
}
StageManager.defaultProps = {
  error: false,
  finalStage: false,
  firstStage: false,
  stageName: '',
  examMode: true,
}

export default StageManager
