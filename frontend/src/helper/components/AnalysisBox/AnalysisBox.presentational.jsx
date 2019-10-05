import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
import InfoTags from '../InfoTags/InfoTags.presentational'
import ColumnInfo from '../InfoTags/ColumnInfo.presentational'
import PercentageInfo from '../InfoTags/PercentageInfo.presentational'
import { makeStyles } from '@material-ui/core/styles'

// style
const useStyles = makeStyles(() => ({
  label: {
    fontSize: 10,
    lineHeight: '17px',
    letterSpacing: -0.07,
    color: '#CCC',
  },
  columnInfos: {
    width: '100%',
    display: 'flex',
    marginTop: '10px',
  },
}))

const AnalysisBox = ({
  hardness,
  label,
  yourTime,
  averageTime,

  corrects,
  wrongs,
  whites,
}) => {
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.label}>{label}</Typography>
      <InfoTags
        style={{ marginTop: 6 }}
        description={hardness}
        title="درجه سختی"
      />
      <div className={classes.columnInfos}>
        <ColumnInfo title="زمان شما" time={yourTime} />
        <ColumnInfo title="میانگین زمان" time={averageTime} />
        <ColumnInfo title="درصد پاسخگویی">
          <PercentageInfo corrects={corrects} wrongs={wrongs} whites={whites} />
        </ColumnInfo>
      </div>
    </div>
  )
}

AnalysisBox.propTypes = {
  hardness: PropTypes.string.isRequired,
  label: PropTypes.string,
}

AnalysisBox.defaultProps = {}

export default AnalysisBox
