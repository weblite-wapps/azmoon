import { createAction } from 'redux-actions'
import { dispatch } from '../../setup/redux'

export const FETCH_WRITER_PENS = 'FETCH_WRITER_PENS'
export const fetchWriterPens = createAction(FETCH_WRITER_PENS, writer => ({
  writer,
}))
export const dispatchFetchWriterPens = (...args) =>
  dispatch(fetchWriterPens(...args))
// console.log('args :', args)

export const SET_WRITER_PENS = 'SET_WRITER_PENS'
export const setWriterPens = createAction(SET_WRITER_PENS, pens => ({ pens }))
export const dispatchSetWriterPens = (...args) =>
  dispatch(setWriterPens(...args))
