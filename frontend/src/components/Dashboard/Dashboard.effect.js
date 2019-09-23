import { ofType, combineEpics } from 'redux-observable'
import { map, mergeMap, pluck } from 'rxjs/operators'
import { FETCH_WRITER_PENS, setWriterPens } from './Dashboard.action'
import { getRequests } from '../../helper/functions/request.helper'

const effectFetchUserPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_WRITER_PENS),
    pluck('payload'),
    mergeMap(writer =>
      getRequests('/fetchWriterPens')
        .query(writer)
        .catch(console.log),
    ),
    pluck('body'),
    map(setWriterPens),
  )

export default combineEpics(effectFetchUserPensEpic)
