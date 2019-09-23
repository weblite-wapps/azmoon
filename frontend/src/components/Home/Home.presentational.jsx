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
    examStatus,
    examParticipants,
    examMaxPercent,
    examMinPercent,
    examAveragePercent,
    remainingTime,
}) => (
  <div className="recast--stage-manager">
    <Typography variant="h2" align="center" color="primary">آزمون</Typography>

    <InfoTags title="وضعیت آزمون" description={examStatus} />
    <InfoTags title="افراد شرکت‌ کننده" description={examParticipants} />
    <InfoTags title="بیشترین درصد" description={examMaxPercent} />
    <InfoTags title="کمترین درصد" description={examMinPercent} />
    <InfoTags title="میانگین درصد" description={examAveragePercent} />
    <InfoTags title="زمان باقیمانده" description={remainingTime} />

    <Button color="#D65555" fullWidth label="بستن آزمون" />
    <Button color="#84CE2D" fullWidth label="آغاز آزمون" />
    <Button color="#808285" fullWidth label="ویرایش آزمون" />
  </div>
)

Home.propTypes = {
    examStatus: PropTypes.string,
    examParticipants: PropTypes.string,
    examMaxPercent: PropTypes.string,
    examMinPercent: PropTypes.string,
    examAveragePercent: PropTypes.string,
    remainingTime: PropTypes.string,
}
Home.defaultProps = {
    examStatus: '-',
    examParticipants: '-',
    examMaxPercent: '-',
    examMinPercent: '-',
    examAveragePercent: '-',
    remainingTime: '-',
}

export default Home