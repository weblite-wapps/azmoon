import React from 'react'
import PropTypes from 'prop-types'
// third party packages
// components
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import Button from '../../helper/components/Button/Button.presentational'
// style
import './Home.scss'
import { Typography } from '@material-ui/core'

const Home = ({
    examTitle,
    examSection,
    examStatus,
    examParticipantCount,
    questionCount,
    examDuration,
    examMaxPercent,
    examMinPercent,
    examAveragePercent,
    remainingTime,
    userResult,
}) => (
  <div className="recast--stage-manager">
    <Typography variant="h2" align="center" color="primary">آزمــــــــون</Typography>
    <Typography variant="body2" align="center" color="primary">{examTitle}</Typography>
    <Typography variant="body2" align="center" color="primary">{examSection}</Typography>

    <InfoTags title="وضعیت آزمون" description={examStatus} />
    <InfoTags title="تعداد شرکت‌کننده" description={examParticipantCount} />
    <InfoTags title="تعداد سوالات" description={questionCount} />
    <InfoTags title="مدت پاسخگویی" description={examDuration} />
    <InfoTags title="بیشترین درصد" description={examMaxPercent} />
    <InfoTags title="کمترین درصد" description={examMinPercent} />
    <InfoTags title="میانگین درصد" description={examAveragePercent} />
    <InfoTags title="زمان باقیمانده" description={remainingTime} />
    <InfoTags title="نتیجه شما" description={userResult} />

    <Button color="#D65555" fullWidth label="بستن آزمون" />
    <Button color="#84CE2D" fullWidth label="آغاز آزمون" />
    <Button color="#808285" fullWidth label="ویرایش آزمون" />
    <Button color="#6DC2EF" fullWidth label="شروع آزمون" />
    <Button disabled color="#6DC2EF" fullWidth label="نتایج آزمون" />
    <Button disabled color="#84CE2D" fullWidth label="پاسخ‌نامه" />
    <Button color="#808285" fullWidth label="ویرایش آزمون و ارسال مجدد" />
  </div>
)

Home.propTypes = {
    examTitle: PropTypes.string.isRequired,
    examSection: PropTypes.string.isRequired,
    examStatus: PropTypes.string,
    examParticipantCount: PropTypes.string,
    questionCount: PropTypes.string,
    examMaxPercent: PropTypes.string,
    examMinPercent: PropTypes.string,
    examAveragePercent: PropTypes.string,
    remainingTime: PropTypes.string,
    userResult: PropTypes.string,
}
Home.defaultProps = {
    examStatus: '-',
    examParticipantCount: '-',
    questionCount: '-',
    examMaxPercent: '-',
    examMinPercent: '-',
    examAveragePercent: '-',
    remainingTime: '-',
    userResult: '-',
}

export default Home