import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// components
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import Button from '../../helper/components/Button/Button.presentational'
import UserInfoModal from '../../helper/components/UserInfoModal/UserInfoModal.presentational'

// helper
import { toPersian } from '../../helper/functions/utils.helper'
// style
import './Home.scss'
import { userRankView } from '../Result/Result.reducer'

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
    color: '#818181',
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
  timeToStart,
  userResult,
  isOpen,
  oldSchool,

  onCloseExam,
  onOpenExam,
  onEditExam,
  onStartExam,
  onShowResults,
  onShowAnswerSheet,
  onSubmit,
  onSearchSchools,
}) => {
  const classes = useStyles()
  return (
    <div className="c--home_container scroll-bar">
      <img alt="home" src="images/home.svg" className={classes.logoImage} />

      <Typography className={classes.wappName} variant="h1" align="center">
        آزمــــــــــــــون
      </Typography>
      <Typography className={classes.examName} variant="body1" align="center">
        {toPersian(title)}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        className={classes.categoryName}
      >
        {toPersian(section)}
      </Typography>

      <hr className={classes.separator} />

      <div className="c--home_info-tags">
        <InfoTags title="وضعیت آزمون" description={status} />
        <InfoTags title="تعداد شرکت‌کننده" description={participantsCount} />
        <InfoTags title="تعداد سوالات" description={questionCount} />
        <InfoTags title="مدت پاسخگویی" description={duration} />

        {isExamFinished && (
          <>
            <InfoTags
              direction="ltr"
              title="بیشترین درصد"
              description={maxPercent !== '--' && maxPercent.toFixed(0)}
            />
            <InfoTags
              direction="ltr"
              title="کمترین درصد"
              description={minPercent !== '--' && minPercent.toFixed(0)}
            />
            <InfoTags
              direction="ltr"
              title="میانگین درصد"
              description={averagePercent !== '--' && averagePercent.toFixed(0)}
            />
          </>
        )}
        {!isExamStarted && !isExamFinished && (
          <InfoTags title="تا شروع آزمون" description={timeToStart} />
        )}
        {!isExamFinished && (
          <InfoTags title="تا پایان آزمون" description={remainingTime} />
        )}
        {isExamFinished && !isAdmin && (
          <>
            <InfoTags
              direction="ltr"
              title="نتیجه شما"
              description={
                userResult !== '--' && userResult && userResult.toFixed(0)
              }
            />
            {userRankView() > -1 && (
              <InfoTags
                direction="ltr"
                title="رتبه ی شما"
                description={userRankView() + 1}
              />
            )}
          </>
        )}
      </div>

      {!isExamStarted && !isExamFinished && isAdmin && (
        <>
          <Button
            variant="normal"
            classesProp={{
              button: classes.button,
              typography: classes.buttonTypography,
            }}
            onClick={onOpenExam}
            color="#68D200"
            text="آغاز آزمون"
          />
          <Button
            classesProp={{
              button: classes.button,
              typography: classes.buttonTypography,
            }}
            variant="normal"
            onClick={onEditExam}
            color="#818181"
            text="ویرایش آزمون"
          />
        </>
      )}

      {isExamStarted && !isExamFinished && isAdmin && (
        <Button
          variant="normal"
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          onClick={onCloseExam}
          color="#D65555"
          text="بستن آزمون"
        />
      )}

      {!isParticipated && isExamStarted && !isExamFinished && !isAdmin && (
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          variant="normal"
          onClick={onStartExam}
          color="#4FC4F4"
          text="شروع آزمون"
        />
      )}
      {isExamFinished && (
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          variant="normal"
          onClick={onShowResults}
          color="#4FC4F4"
          text="نتایج آزمون"
        />
      )}
      {isExamFinished && (
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonTypography,
          }}
          variant="normal"
          onClick={onShowAnswerSheet}
          color="#68D200"
          text="پاسخ‌ نامه"
        />
      )}

      <UserInfoModal
        open={isOpen}
        oldSchool={oldSchool}
        onSubmit={onSubmit}
        onSearchSchools={onSearchSchools} />
    </div>
  )
}

Home.propTypes = {
  isParticipated: PropTypes.bool.isRequired,
  isExamStarted: PropTypes.bool.isRequired,
  isExamFinished: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  oldSchool: PropTypes.string,

  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  status: PropTypes.string,
  participantsCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  questionCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  averagePercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  remainingTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  timeToStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userResult: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isOpen: PropTypes.bool.isRequired,

  onCloseExam: PropTypes.func,
  onOpenExam: PropTypes.func,
  onEditExam: PropTypes.func,
  onStartExam: PropTypes.func,
  onShowResults: PropTypes.func,
  onShowAnswerSheet: PropTypes.func,
  onSubmit: PropTypes.func,
  onSearchSchools: PropTypes.func,
}
Home.defaultProps = {
  status: '--',
  section: '--',
  participantsCount: '--',
  questionCount: '--',
  maxPercent: '--',
  minPercent: '--',
  averagePercent: '--',
  remainingTime: '--',
  timeToStart: '--',
  userResult: '--',
  oldSchool: '',

  onCloseExam: Function.prototype,
  onOpenExam: Function.prototype,
  onEditExam: Function.prototype,
  onStartExam: Function.prototype,
  onShowResults: Function.prototype,
  onShowAnswerSheet: Function.prototype,
  onSubmit: Function.prototype,
  onSearchSchools: () => Promise.resolve([]),
}

export default Home
