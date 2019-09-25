import { differenceInSeconds } from 'date-fns'


const { format } = new Intl.NumberFormat([], { minimumIntegerDigits: 2 })
const formattedSeconds = (time) => `${format(Math.floor(time / 3600))}:${format(Math.floor((time % 3600) / 60))}`

export const getStatus = (startTime, endTime) => {
    const now = new Date()
    const start = new Date(startTime)
    const end = new Date(endTime)

    if (!startTime || now < start) return 'شروع نشده است'
    else if (start < now && now < end) return "در حال برگزاری"
    return "تمام شده است"
}

export const getRemainingTime = (endTime) => {
    const now = new Date()
    const end = new Date(endTime)

    return formattedSeconds(differenceInSeconds(end, now))
}