import { createSelector } from 'reselect'

const getIsExamFinished = state => state.App.isExamFinished
const getIsExamStarted = state => state.App.isExamStarted

const getStatus = createSelector(
  [getIsExamFinished, getIsExamStarted],
  (isExamFinished, isExamStarted) => {
    if (isExamFinished) return "تمام شده است"
    else if (isExamStarted) return "در حال برگزاری"
    return 'شروع نشده است'
  },
)

export { getStatus }
