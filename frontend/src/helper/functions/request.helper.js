import request from 'superagent'
import config from '../../setup/config'

export const getRequest = path =>
  request.get(config + path).set('Access-Control-Allow-Origin', '*')

export const postRequest = path =>
  request.post(config + path).set('Access-Control-Allow_Origin', '*')
