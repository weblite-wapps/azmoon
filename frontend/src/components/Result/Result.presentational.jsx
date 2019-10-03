import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Html2Pdf from 'js-html2pdf'

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

const handleClick = (element, title) => {
  // Define optional configuration
  const date = new Date()
  var options = {
    filename: `${title}-${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.pdf`,
  }

  // You can also use static methods for one time use...
  options.source = element
  options.download = true
  Html2Pdf.getPdf(options)
}

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
  title,
  allResults,
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Tabs
        isAdmin={isAdmin}
        onReturn={onReturn}
        onExport={() =>
          handleClick(document.getElementById('element-to-pdf'), title)
        }
      />
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

        <div style={{ display: 'none' }}>
          <div id="element-to-pdf" dir="rtl">
            <div>{title}</div>

            <table dir="rtl" style={{ width: '100%' }}>
              <thead>نفرات برتر آزمون</thead>

              {allResults.map((result, index) => (
                <>
                  {index === 0 && (
                    <tr>
                      <td>رتبه</td>
                      <td>نام شخص</td>
                      <td>درصد</td>
                    </tr>
                  )}
                  <tr>
                    <td>{index + 1} </td>
                    <td>
                      {`${result.firstname}`}
                      {` ${result.lastname}`}
                    </td>
                    <td>{result.percent.toFixed(1)}</td>
                  </tr>

                  <td>
                    {result.answers.map((answer, index) => (
                      <td style={{ marginLeft: '5px' }}>
                        {index + 1} :
                        {typeof answer.opt === 'number'
                          ? answer.opt + 1
                          : 'نزده'}
                      </td>
                    ))}
                  </td>
                  <br />
                </>
              ))}
            </table>
          </div>
        </div>
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
