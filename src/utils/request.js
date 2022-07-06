import axios from 'axios'
import Store from '../store/index'

import { Message } from 'element-ui'

const instance = axios.create({ timeout: 1000 * 12 })

// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// TODO: baseUrl 是主应用的 base，这里后面看是否需要修改

instance.interceptors.request.use(config => {
  // Set Authorization Header.
  if (localStorage.getItem('userInfo')) {
    config.headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).token
  }
  return config
})

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response.status === 401) {
      const redirectPath = window.location.pathname + window.location.search
      Message.error('登录信息失效, 请返回重新登录')
      Store.dispatch('LOGINOUT')
      window.location.href = `/signin?redirect=${redirectPath}`
    } else if (error.response.status === 403) {
      Message.error('暂无权限')
    } else {
      console.log('ERROR', error.Message)
    }
    return Promise.reject(error)
  }
)

export default instance
