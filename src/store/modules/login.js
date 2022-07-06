import * as types from '../mutations'
import { Message } from 'element-ui'

const state = {
  userinfo: {
    id: 0,
    name: '',
    email: '',
    password: '',
    phone: ''
  },
  role: []
}

const getters = {
  uid: state => {
    return state.userinfo.uid
  }
}

const actions = {
  async LOGINOUT (context, args) {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('role')

    Message({
      message: '登出成功',
      type: 'success'
    })
    return Promise.resolve(true)
  }
}

const mutations = {
  [types.INJECT_PROFILE] (state, profile) {
    state.userinfo = profile
  },
  [types.INJECT_ROLE] (state, role) {
    state.role = role
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
