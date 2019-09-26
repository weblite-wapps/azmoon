// modules
import { differenceInSeconds } from 'date-fns'
// views
import { isExamStartedView, isExamFinishedView } from '../App/App.reducer'

const { format } = new Intl.NumberFormat([], { minimumIntegerDigits: 2 })
const formattedSeconds = (time) => `${format(Math.floor(time / 3600))}:${format(
    Math.floor((time % 3600) / 60),
    )}:${format(time % 60)}`

export const getRemainingTime = (endTime) => {
    const now = new Date()
    const end = new Date(endTime)

    return formattedSeconds(differenceInSeconds(end, now))
}