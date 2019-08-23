import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('date-fns',function(value,formatStr="yyyy-MM-dd hh:mm:ss") {
   return format(value,formatStr)
})