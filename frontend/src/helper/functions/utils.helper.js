const R = require('ramda')
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

/* === Logical helpers === */

/** onEnterPress */
const onEnterPress = (handler = Function.prototype) => ({ key }) => {
  if (key === 'Enter') handler()
}

export const onExamError = ({ title, questionCount, duration, endTime }) => {
  if (title && questionCount && duration && endTime) {
    return false
  } else if (!title) {
    return { title: true }
  } else if (!questionCount) {
    return { questionCount: true }
  } else if (!duration) {
    return { duration: true }
  } else if (!endTime) {
    return { endTime: true }
  }
}

export const onQuestionError = ({ prob, options }) => {
  const arr = R.times(() => false, 4)
  if (!!prob && !R.includes('', options)) {
    return false
  } else if (!prob) {
    return { prob: true, options: arr }
  } else {
    return {
      prob: false,
      options: R.update(
        R.findIndex(R.equals(''))(options),
        true,
        R.times(() => false, 4),
      ),
    }
  }
}
