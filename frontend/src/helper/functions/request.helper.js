import request from 'superagent'
import config from '../../setup/config'

export const getRequests = path =>
  request.get(config + path).set('Access-Control-Allow-Origin', '*')

export const postRequests = path =>
  request.post(config + path).set('Access-Control-Allow_Origin', '*')
