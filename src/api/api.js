import request from '../utils/request'

export function listProductAPI (projectName = '') {
  return request.get(`/api/aslan/environment/environments?projectName=${projectName}`)
}
