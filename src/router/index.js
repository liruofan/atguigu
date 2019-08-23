import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../pages/Home/Home.vue'
// import Order from '../pages/Order/Order.vue'
// import Search from '../pages/Search/Search.vue'
// import Profile from '../pages/Profile/Profile.vue'
const Home = () => import('../pages/Home/Home.vue')
const Order = () => import('../pages/Order/Order.vue')
const Search = () => import('../pages/Search/Search.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/shop/shop.vue'
import ShopGoods from '../pages/shop/shopGoods/shopGoods.vue'
import ShopInfo from '../pages/shop/shopInfo/shopInfo.vue'
import ShopRating from '../pages/shop/shopRating/shopRating.vue'

Vue.use(Router)
export default new Router({
	routes:[
		{
		  path:'/home',
		  component:Home,
      meta:{
		    showFooter:true	  
		  }
		},{
		  path:'/search',
		  component:Search,
		  meta:{
		    showFooter:true	  
		  }
		},{
		  path:'/order',
		  component:Order,
		  meta:{
		    showFooter:true	  
		  }
		},{
		  path:'/profile',
		  component:Profile,
		  meta:{
		    showFooter:true	 
		  }
		},{
		  path:'/',
		  redirect:'/home'	
		},{
		  path:'/login',
		  component:Login,
		},{
      path:'/shop',
			component:Shop,
			children:[
				{
					path:'/shop/goods',
					component:ShopGoods,
					
				},{
          path:'/shop/info',
					component:ShopInfo,
				},{
          path:'/shop/rating',
					component:ShopRating,
				},{
					path:'',
					redirect:'/shop/goods'
				}
			]
		}
	]
})
