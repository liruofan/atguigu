import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(Router)
export default new Router({
	routes:[
		{
		  path:'/home',
		  component:Home
		},{
		  path:'/search',
		  component:Order
		},{
		  path:'/order',
		  component:Search	
		},{
		  path:'/profile',
		  component:Profile
		}
	]
})
