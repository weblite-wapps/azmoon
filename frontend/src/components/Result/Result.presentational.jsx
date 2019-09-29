import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// third party packages
import { makeStyles } from '@material-ui/core/styles'
// components
import Tabs from '../../helper/components/Tabs/Tabs.presentational'
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import ResultItem from '../../helper/components/ResultItem/ResultItem.presentational'
// helpers
import { convertToPersianFormat } from '../../helper/functions/time.helper'
// style
import './Result.scss'

const useStyles = makeStyles(() => ({
  separator: {
    marginTop: 20,
    height: 1.5,
    border: 'none',
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
}))

const Result = ({
  isAdmin,
  participantCount,
  maxPercent,
  minPercent,
  averagePercent,
  userResult,
  results,
  onReturn,
  onExport,
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Tabs onReturn={onReturn} onExport={onExport} />
      <div className="c--result_container scroll-bar">
        {!isAdmin && (
          <InfoTags
            title="نتیجه شما"
            description={
              userResult !== '-' && userResult && userResult.toFixed(0)
            }
          />
        )}
        <InfoTags title="تعداد شرکت‌کننده" description={participantCount} />
        <InfoTags
          title="بیشترین درصد"
          description={maxPercent !== '-' && maxPercent.toFixed(0)}
        />
        <InfoTags
          title="کمترین درصد"
          description={minPercent !== '-' && minPercent.toFixed(0)}
        />
        <InfoTags
          title="میانگین درصد"
          description={averagePercent !== '-' && averagePercent.toFixed(0)}
        />

        {!!results.length && <hr className={classes.separator} />}

        {results.map((result, index) => (
          <ResultItem
            key={result._id}
            rank={index + 1}
            profileImage={result.profileImage}
            fullName={result.firstname + ' ' + result.lastname}
            finishTime={
              result.endTime && convertToPersianFormat(new Date(result.endTime))
            }
            score={result && result.percent && result.percent.toFixed(0)}
          />
        ))}
      </div>
    </Fragment>
  )
}
Result.propTypes = {
  isAdmin: PropTypes.bool,
  participantCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  averagePercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userResult: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  results: PropTypes.arrayOf(PropTypes.shape({})),
  onReturn: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
}

Result.defaultProps = {
  isAdmin: false,
  participantCount: '-',
  maxPercent: '-',
  minPercent: '-',
  averagePercent: '-',
  userResult: '-',
  results: [],
}

export default Result
