// modules
import * as R from 'ramda'
import { differenceInSeconds } from 'date-fns'


export const mapToUserIds = results => R.map(result => result.stdId, results)

export const injectUserInfo = (results, users) => R.map(result => {
    const userInfo = users[result.stdId]
    return { ...result, ...userInfo }
}, results)

export const getRemainedTime = (duration, startTime) =>
    duration * 60 - differenceInSeconds(new Date(), startTime)