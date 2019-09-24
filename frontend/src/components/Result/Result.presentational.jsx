import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
// third party packages
// components
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
// style
import './Result.scss'

const Result = ({
    examParticipantCount,
    examMaxPercent,
    examMinPercent,
    examAveragePercent,
    userReuslt,
}) => (
  <div className="">
    <InfoTags title="نتیجه شما" description={userReuslt} />
    <InfoTags title="تعداد شرکت‌کننده" description={examParticipantCount} />
    <InfoTags title="بیشترین درصد" description={examMaxPercent} />
    <InfoTags title="کمترین درصد" description={examMinPercent} />
    <InfoTags title="میانگین درصد" description={examAveragePercent} />

    <Divider variant="middle" />

  </div>
)
Result.propTypes = {
    examParticipantCount: PropTypes.string,
    examMaxPercent: PropTypes.string,
    examMinPercent: PropTypes.string,
    examAveragePercent: PropTypes.string,
    userReuslt: PropTypes.string,
}
Result.defaultProps = {
    examParticipantCount: '-',
    examMaxPercent: '-',
    examMinPercent: '-',
    examAveragePercent: '-',
    userReuslt: '-',
}

export default Result
