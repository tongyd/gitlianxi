// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import core from '@/core/core.config'
Vue.use(core)
// 淘宝响应式
import 'lib-flexible/flexible.js'
import "@/common/css/reset.scss"
// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('@/assets/logo.png')
})
// 引入字体
import 'font-awesome/css/font-awesome.css'
import store from "@/core/store/index"

Vue.config.productionTip = false
// 动态改变网页标题
Vue.use(require('vue-wechat-title'));
// 商品列表公共样式
import "@/common/css/lists.scss"



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
