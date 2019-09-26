import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
// third party packages
// components
import Tabs from '../../helper/components/Tabs/Tabs.presentational'
import InfoTags from '../../helper/components/InfoTags/InfoTags.presentational'
import ResultItem from '../../helper/components/ResultItem/ResultItem.presentational'
// style
import './Result.scss'

const Result = ({
    participantCount,
    maxPercent,
    minPercent,
    averagePercent,
    userResult,
    results,
    onReturn,
    onExport,
}) => (
  <>
    <Tabs onReturn={onReturn} onExport={onExport} />
    <div className="c--result_container">
      <InfoTags title="نتیجه شما" description={userResult.toFixed(2)} />
      <InfoTags title="تعداد شرکت‌کننده" description={participantCount} />
      <InfoTags title="بیشترین درصد" description={maxPercent.toFixed(2)} />
      <InfoTags title="کمترین درصد" description={minPercent.toFixed(2)} />
      <InfoTags title="میانگین درصد" description={averagePercent.toFixed(2)} />

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
  </>
)
Result.propTypes = {
    participantCount:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    maxPercent: PropTypes.string,
    minPercent: PropTypes.string,
    averagePercent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    userResult: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    results: PropTypes.arrayOf(PropTypes.shape({})),
    onReturn: PropTypes.func.isRequired,
    onExport: PropTypes.func.isRequired,
}
Result.defaultProps = {
    participantCount: '-',
    maxPercent: '-',
    minPercent: '-',
    averagePercent: '-',
    userResult: '-',
    results: [],
}

export default Result


{/* <Result
    userReuslt="۳۸.۳۳٪"
    examParticipantCount="۱۰ نفر"
    examMaxPercent="۹۳.۳۳٪"
    examAveragePercent="۴۵٪"
    results={[
      {
        profileImage: 'kind',
        fullName: 'مصطفی محسنی کبیر',
        finishTime: 'چهارشنبه - ۱۳:۳۰',
        score: '۱۰۰٪',
      },
      {
        profileImage: 'kind',
        fullName: 'مسعود محمدصالحی',
        finishTime: 'چهارشنبه - ۱۱:۳۰',
        score: '۹۰٪',
      },
      {
        profileImage: 'kind',
        fullName: 'علی عسگری',
        finishTime: 'چهارشنبه - ۱۲:۳۰',
        score: '۸۰٪',
      },
      {
        profileImage: 'kind',
        fullName: 'فرزین پزشکی',
        finishTime: 'سه‌شنبه - ۱۷:۳۰',
        score: '۶۰٪',
      },
    ]}
  />
  /> */}