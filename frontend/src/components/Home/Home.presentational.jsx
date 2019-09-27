import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
// components
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import Button from '../../helper/components/Button/Button.presentational'
// style
import './Home.scss'

const Home = ({
  isParticipated,
  isExamReady,
  isExamStarted,
  isExamFinished,
  isAdmin,

  title,
  section,
  status,
  participantsCount,
  questionCount,
  duration,
  maxPercent,
  minPercent,
  averagePercent,
  remainingTime,
  userResult,

  onCloseExam,
  onOpenExam,
  onEditExam,
  onStartExam,
  onShowResults,
  onShowAnswerSheet,
}) => {
  console.log('userResult', userResult)
  return (
    <div className="c--home_container">
      <img alt="home" src="images/home.svg" />

      <Typography style={{ margin: '10px 0px' }} variant="h2" align="center">
        آزمــــــــــــــون
      </Typography>
      <Typography variant="body1" align="center">
        {title}
      </Typography>
      <Typography variant="body2" align="center">
        {section}
      </Typography>

      <div className="c--home_info-tags">
        <InfoTags title="وضعیت آزمون" description={status} />
        {isExamFinished && <InfoTags title="تعداد شرکت‌کننده" description={participantsCount} />}
        <InfoTags title="تعداد سوالات" description={questionCount} />
        <InfoTags title="مدت پاسخگویی" description={duration} />

        {isExamFinished && (
          <>
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
          </>
        )}
        {!isExamFinished && (
          <InfoTags title="زمان باقیمانده" description={remainingTime} />
        )}
        {isExamFinished && !isAdmin && (
          <InfoTags
            title="نتیجه شما"
            description={
              userResult !== '-' && userResult && userResult.toFixed(0)
            }
          />
        )}
      </div>

      {!isExamStarted && !isExamFinished && isAdmin && (
        <>
          <Button
            variant="labeled"
            onClick={onOpenExam}
            color="#84CE2D"
            text="آغاز آزمون"
          />
          <Button
            variant="labeled"
            onClick={onEditExam}
            color="#808285"
            text="ویرایش آزمون"
          />
        </>
      )}

      {isExamStarted && !isExamFinished && isAdmin && (
        <Button
          variant="labeled"
          onClick={onCloseExam}
          color="#D65555"
          text="بستن آزمون"
        />
      )}

      {!isParticipated && isExamStarted && !isExamFinished && !isAdmin && (
        <Button
          variant="labeled"
          onClick={onStartExam}
          color="#6DC2EF"
          text="شروع آزمون"
        />
      )}
      {isExamFinished && (
        <Button
          variant="labeled"
          onClick={onShowResults}
          color="#6DC2EF"
          text="نتایج آزمون"
        />
      )}
      {isExamFinished && (
        <Button
          variant="labeled"
          onClick={onShowAnswerSheet}
          color="#84CE2D"
          text="پاسخ‌ نامه"
        />
      )}
      {/* <Button variant="labeled" color="#808285" text="ویرایش آزمون و ارسال مجدد" /> */}
    </div>
  )
}

Home.propTypes = {
  isParticipated: PropTypes.bool.isRequired,
  isExamReady: PropTypes.bool.isRequired,
  isExamStarted: PropTypes.bool.isRequired,
  isExamFinished: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,

  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  status: PropTypes.string,
  participantsCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  questionCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  averagePercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  remainingTime: PropTypes.string,
  userResult: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  onCloseExam: PropTypes.func,
  onOpenExam: PropTypes.func,
  onEditExam: PropTypes.func,
  onStartExam: PropTypes.func,
  onShowResults: PropTypes.func,
  onShowAnswerSheet: PropTypes.func,
}
Home.defaultProps = {
  status: '-',
  section: '-',
  participantsCount: '-',
  questionCount: '-',
  maxPercent: '-',
  minPercent: '-',
  averagePercent: '-',
  remainingTime: '-',
  userResult: '-',

  onCloseExam: Function.prototype,
  onOpenExam: Function.prototype,
  onEditExam: Function.prototype,
  onStartExam: Function.prototype,
  onShowResults: Function.prototype,
  onShowAnswerSheet: Function.prototype,
}

export default Home
