import request from '../utils/request'

export function listProductAPI (projectName = 'external') {
  return request.get(`/api/aslan/environment/environments?projectName=${projectName}`)
}
