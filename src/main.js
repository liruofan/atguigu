// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'mint-ui/lib/style.css'
import './common/styles/border.css'
import './common/styles/reset.css'
import './common/styles/mint-ui.styl'
// import 'swiper/dist/css/swiper.css'
import './mock/mockServer'
import './filter'

Fastclick.attach(document.body)
// Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  render:h => h(App),
  router,
  store
})
