import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

// third party packages
// components
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import Button from '../../helper/components/Button/Button.presentational'
// style
import './Home.scss'

const Home = ({
    isParticipated,
    isExamReady,
    isExamStarted,
    isAdmin,

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

    onCloseExam,
    onOpenExam,
    onEditExam,
    onStartExam,
    onShowResults,
    onShowAnswerSheet,
}) => (
  <div className="c--home_container">
    <img alt="home" src="images/home.svg"/>

    <Typography style={{ margin: '10px 0px' }} variant="h2" align="center">آزمــــــــون</Typography>
    <Typography variant="body1" align="center">{examTitle}</Typography>
    <Typography variant="body2" align="center">{examSection}</Typography>

    <div className="c--home_info-tags">
      <InfoTags title="وضعیت آزمون" description={examStatus} />
      <InfoTags title="تعداد شرکت‌کننده" description={examParticipantCount} />
      <InfoTags title="تعداد سوالات" description={questionCount} />
      <InfoTags title="مدت پاسخگویی" description={examDuration} />

      {isAdmin && isExamStarted &&
      <>
        <InfoTags title="بیشترین درصد" description={examMaxPercent} />
        <InfoTags title="کمترین درصد" description={examMinPercent} />
        <InfoTags title="میانگین درصد" description={examAveragePercent} />
      </>
      }

      <InfoTags title="زمان باقیمانده" description={remainingTime} />
      {isParticipated && !isAdmin && <InfoTags title="نتیجه شما" description={userResult} />}
    </div>

    {isExamReady && !isExamStarted && isAdmin &&
      <>
        <Button onClick={onOpenExam} color="#84CE2D" fullWidth label="آغاز آزمون" />
        <Button onClick={onEditExam} color="#808285" fullWidth label="ویرایش آزمون" />
      </>
    }

    {isExamStarted &&  isAdmin &&
      <Button onClick={onCloseExam} color="#D65555" fullWidth label="بستن آزمون" />
    }

    {!isParticipated && isExamStarted && !isAdmin && <Button onClick={onStartExam} color="#6DC2EF" fullWidth label="شروع آزمون" />}
    {((isExamStarted && isAdmin) || (isParticipated && !isAdmin)) && <Button onClick={onShowResults} disabled color="#6DC2EF" fullWidth label="نتایج آزمون" />}
    {isParticipated && !isAdmin && <Button onClick={onShowAnswerSheet} disabled color="#84CE2D" fullWidth label="پاسخ‌نامه" />}
    {/* <Button color="#808285" fullWidth label="ویرایش آزمون و ارسال مجدد" /> */}
  </div>
)

Home.propTypes = {
    isParticipated: PropTypes.bool.isRequired,
    isExamReady: PropTypes.bool.isRequired,
    isExamStarted: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,

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

    onCloseExam: PropTypes.func,
    onOpenExam: PropTypes.func,
    onEditExam: PropTypes.func,
    onStartExam:PropTypes.func,
    onShowResults:  PropTypes.func,
    onShowAnswerSheet: PropTypes.func,
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

    onCloseExam: () => {},
    onOpenExam: () => {},
    onEditExam: () => {},
    onStartExam: () => {},
    onShowResults: () => {},
    onShowAnswerSheet: () => {},
}

export default Home