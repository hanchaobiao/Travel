// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClike from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 默认引用index.js
import store from './store'
import 'swiper/dist/css/swiper.css'

// 简写路径，在webpack 里配置了 styles 路径别名
// 修改默认html标签样式
import 'styles/reset.css'
// 解决多倍屏，1像素边框显示多像素
import 'styles/border.css'
// iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClike.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 引用vuex
  components: { App },
  template: '<App/>'
})
