import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
// third party packages
// components
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import ResultItem from '../../helper/components/ResultItem/ResultItem.presentational'
// style
import './Result.scss'

const Result = ({
    examParticipantCount,
    examMaxPercent,
    examMinPercent,
    examAveragePercent,
    userResult,
    results,
}) => (
  <div className="c--result_container">
    <InfoTags title="نتیجه شما" description={userResult} />
    <InfoTags title="تعداد شرکت‌کننده" description={examParticipantCount} />
    <InfoTags title="بیشترین درصد" description={examMaxPercent} />
    <InfoTags title="کمترین درصد" description={examMinPercent} />
    <InfoTags title="میانگین درصد" description={examAveragePercent} />

    <Divider variant="middle" />

    {results.map((result, index) =>
      <ResultItem
        rank={index + 1}
        profileImage={result.profileImage}
        fullName={result.fullName}
        finishTime={result.finishTime}
        score={result.score}
      />)}
  </div>
)
Result.propTypes = {
    examParticipantCount: PropTypes.string,
    examMaxPercent: PropTypes.string,
    examMinPercent: PropTypes.string,
    examAveragePercent: PropTypes.string,
    userResult: PropTypes.string,
}
Result.defaultProps = {
    examParticipantCount: '-',
    examMaxPercent: '-',
    examMinPercent: '-',
    examAveragePercent: '-',
    userResult: '-',
}

export default Result
