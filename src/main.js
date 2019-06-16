// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClike from 'fastclick'

// 修改默认html标签样式
import './assets/styles/reset.css'
// 解决多倍屏，1像素边框显示多像素
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClike.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
