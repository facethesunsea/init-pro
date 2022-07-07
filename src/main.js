import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null

function render (props) {
  const { routerBase } = props
  instance = new Vue({
    router: new VueRouter({
      mode: 'history',
      base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
      routes
    }),
    store,
    render: h => h(App)
  }).$mount('#app') // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
}

if (window.__POWERED_BY_QIANKUN__) { // 动态添加 publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

if (!window.__POWERED_BY_QIANKUN__) { // 默认独立运行
  render()
}

// 需要暴露接入协议
export async function bootstrap (props) {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount (props) {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
