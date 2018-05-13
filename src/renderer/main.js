import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import AV from 'leancloud-storage'
import AVL from 'leancloud-storage/live-query'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// LeanCloud初始化配置
const appId = ''
const appKey = ''
// 初始化LeanCloud存储模块
AV.init({
  appId,
  appKey
})
// 初始化LeanCloud LiveQuery模块
AVL.init({
  appId,
  appKey
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
