import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// components
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import Button from '../../helper/components/Button/Button.presentational'
// style
import './Home.scss'
const useStyles = makeStyles(() => ({
  logoImage: {
    margin: 'auto',
    display: 'block',
  },
  button: {
    width: '100%',
    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  buttonTypography: {
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 'bold',
    letterSpacing: -0.08,
  },
  wappName: {
    fontSize: 42,
    lineHeight: '73px',
    fontWeight: 'bold',
    letterSpacing: -0.08,
    color: '#808285',
    margin: 0,
  },
  examName: {
    fontSize: 14,
    lineHeight: '25px',
    fontWeight: 500,
  },
  categoryName: {
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 500,
  },
  separator: {
    marginTop: 10,
    height: 1,
    border: 'none',
    backgroundColor: '#ccc',
    marginBottom: 15,
  },
}))

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
  const classes = useStyles()

  return (
    <div className="c--home_container scroll-bar">
      <img alt="home" src="images/home.svg" className={classes.logoImage} />

      <Typography className={classes.wappName} variant="h1" align="center">
        آزمــــــــون
      </Typography>
      <Typography variant="body1" align="center" className={classes.examName}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        className={classes.categoryName}
      >
        {section}
      </Typography>

      <hr className={classes.separator} />

      <div className="c--home_info-tags">
        <InfoTags title="وضعیت آزمون" description={status} />
        <InfoTags title="تعداد شرکت‌کننده" description={participantsCount} />
        <InfoTags title="تعداد سوالات" description={questionCount} />
        <InfoTags title="مدت پاسخگویی" description={`${duration} دقیقه`} />

        {isAdmin && isExamStarted && (
          <>
            <InfoTags title="بیشترین درصد" description={maxPercent} />
            <InfoTags title="کمترین درصد" description={minPercent} />
            <InfoTags title="میانگین درصد" description={averagePercent} />
          </>
        )}

        {!isExamFinished && (
          <InfoTags title="زمان باقیمانده" description={remainingTime} />
        )}
        {isParticipated && !isAdmin && (
          <InfoTags title="نتیجه شما" description={userResult} />
        )}
      </div>

      {!isExamStarted && !isExamFinished && isAdmin && (
        <>
          <Button
            classesProp={{
              button: classes.button,
              typography: classes.buttonTypography,
            }}
            onClick={onOpenExam}
            style={{ backgroundColor: '#84CE2D' }}
            text="آغاز آزمون"
          />
          <Button
            classesProp={{
              button: classes.button,
              typography: classes.buttonTypography,
            }}
            onClick={onEditExam}
            style={{ backgroundColor: '#808285' }}
            text="ویرایش آزمون"
          />
        </>
      )}

      {isExamStarted && !isExamFinished && isAdmin && (
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          onClick={onCloseExam}
          style={{ backgroundColor: '#D65555' }}
          text="بستن آزمون"
        />
      )}

      {!isParticipated && isExamStarted && !isAdmin && (
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          variant="normal"
          onClick={onStartExam}
          style={{ backgroundColor: '#6DC2EF' }}
          text="شروع آزمون"
        />
      )}
      {((isExamStarted && isAdmin) || (isParticipated && !isAdmin)) && (
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          variant="normal"
          onClick={onShowResults}
          style={{ backgroundColor: '#6DC2EF' }}
          text="نتایج آزمون"
        />
      )}
      {((isParticipated && !isAdmin) || isAdmin) && (
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          variant="normal"
          onClick={onShowAnswerSheet}
          style={{ backgroundColor: '#84CE2D' }}
          text="پاسخ‌ نامه"
        />
      )}
      {/* <Button color="#808285" button label="ویرایش آزمون و ارسال مجدد" /> */}
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
  participantsCount: PropTypes.number,
  questionCount: PropTypes.number,
  maxPercent: PropTypes.string,
  minPercent: PropTypes.string,
  averagePercent: PropTypes.string,
  remainingTime: PropTypes.string,
  userResult: PropTypes.string,

  onCloseExam: PropTypes.func,
  onOpenExam: PropTypes.func,
  onEditExam: PropTypes.func,
  onStartExam: PropTypes.func,
  onShowResults: PropTypes.func,
  onShowAnswerSheet: PropTypes.func,
}
Home.defaultProps = {
  status: '-',
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

{
  /* <Home
  title="آزمون جامع دین‌ و زندگی"
  section="درس یک تا پنج"
  duration="۳۰ دقیقه"
  status="در حال برگزاری"
  participantsCount="۱۰ نفر"
  maxPercent="۹۳.۳۳٪"
  minPercent="۱۱.۲٪"
  averagePercent="۴۵٪"
  remainingTime="۱۴:۱۵:۳۰"
/> */
}
