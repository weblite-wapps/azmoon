// modeuls
import * as R from 'ramda'


export const mapToUserIds = results => R.map(result => result.stdId, results)

export const injectUserInfo = (results, users) => R.map(result => {
        const userInfo = users[result.stdId]
        return { ...result, ...userInfo }
    }, results)
