// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './common/styles/border.css'
import './common/styles/reset.css'
import 'swiper/dist/css/swiper.css'

Fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  render:h => h(App),
  router,
 
})
