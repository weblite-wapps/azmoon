import { differenceInSeconds } from 'date-fns'
import * as R from 'ramda'
/** Abbreviated for  A & B test for classnames
 * Caution try not to use branch function so much this function lead you to better
 * styling architecture */
export const ab = className => test => (test ? className : false)

/** Abbreviated ClassNames
 * Used with ab function to evaluate dynamic classnames for styling */
export const cns = (...args) => {
  let index = 0
  let classNames = ''
  while (index < args.length) {
    classNames += !args[index] ? '' : `${args[index]} `
    index += 1
  }
  return classNames.trimEnd()
}

/* === Strings === */
export const toPersian = text => {
  if (text == null) return text
  if (typeof text === 'number') return text.toLocaleString('fa-IR')
  return text.replace(/[0-9]/g, num =>
    parseInt(num, 10).toLocaleString('fa-IR'),
  )
}

// is rlt if arabic pattern contains all character
const ARABIC_PATTERN = /[\u0600-\u06FF]/
export const getDirection = text => (ARABIC_PATTERN.test(text) ? 'rtl' : 'ltr')

/* === Logical helpers === */

/** onEnterPress */
// const onEnterPress = (handler = Function.prototype) => ({ key }) => {
//   if (key === 'Enter') handler()
// }
// const onEnterPress = (handler = Function.prototype) => ({ key }) => {
//   if (key === 'Enter') handler()
// }

export const onExamError = ({ title, questionCount, duration, endTime }) => {
  if (title && questionCount > 0 && duration > 0 && endTime > new Date()) {
    return false
  } else {
    if (!title) {
      return { title: true, snackBar: 'همه ی موارد * دار را وارد کنید' }
    } else if (!questionCount) {
      return { questionCount: true, snackBar: 'همه ی موارد * دار را وارد کنید' }
    } else if (!duration) {
      return { duration: true, snackBar: 'همه ی موارد * دار را وارد کنید' }
    } else if (!endTime) {
      return { endTime: true, snackBar: 'زمان پایان آزمون را وارد کنید' }
    } else if (questionCount <= 0) {
      return {
        questionCount: true,
        snackBar: 'تعداد سوالات آزمون باید بیشتر از صفر باشد',
      }
    } else if (duration <= 0) {
      return {
        duration: true,
        snackBar: 'مدت زمان آزمون باید مثبت باشد',
      }
    } else if (endTime < new Date()) {
      return {
        endTime: true,
        snackBar: 'پایان آزمون باید بعد از شروع آزمون باشد',
      }
    }
  }
}

export const onQuestionError = ({ prob, probAttach, options }) => {
  if ((!!prob || !!probAttach) && !R.includes('', options)) {
    return false
  }
  else if (!prob && !probAttach) {
    return { prob: true, probAttach: true }
  }
  else {
    return {
      options: R.update(
        R.findIndex(R.equals(''))(options),
        true,
        R.times(() => false, 4),
      ),
    }
  }
}

const { format } = new Intl.NumberFormat([], { minimumIntegerDigits: 2 })

export const formattedSeconds = time =>
  `${format(Math.floor(time / 3600))}:${format(
    Math.floor((time % 3600) / 60),
  )}:${format(time % 60)}`

export const getRemainingTime = (endTime, nowTime = new Date()) => {
  const now = new Date(nowTime)
  const end = new Date(endTime)

  return differenceInSeconds(end, now)
}

export const getTimeToStart = startTime => {
  const now = new Date()
  const start = new Date(startTime)

  return differenceInSeconds(start, now)
}

export const formattedSecondsForStats = time =>
  `${format(Math.floor((time % 3600) / 60))}:${format(time % 60)}`

export const getAverageTime = stats => {
  const { dur, correct, wrong, white } = stats

  return formattedSecondsForStats(dur / (correct + wrong + white))
}

export const getStats = stats => {
  const { dur, correct, wrong, white } = stats
  const total = correct + wrong + white
  const average = (dur / total).toFixed(0)
  const averageTime = formattedSecondsForStats(average)
  const corrects = ((correct / total) * 100).toFixed(0)
  const wrongs = ((wrong / total) * 100).toFixed(0)
  const whites = ((white / total) * 100).toFixed(0)

  let hardness = ''
  if (average > 120 || corrects < 25) hardness = 'سخت'
  else if (corrects >= 25 && corrects < 75) hardness = 'متوسط'
  else hardness = 'آسان'

  return {
    hardness,
    averageTime,
    corrects,
    wrongs,
    whites,
  }
}
