import Vue from 'vue'
import {
	RECEIVE_SWIPERS,
	RECEIVE_ADDRESS,
	RECEIVE_FOODCATEGORY,
	RECEIVE_SHOPLIST,
	RECEIVE_USERINFO,
	RECEIVE_LOGOUT,
	RECEIVE_SHOPINFO,
	RECEIVE_SHOPGOODS,
	RECEIVE_SHOPRATINGS,
	INCREMENT_FOOD_COUNT,
	DECREMENT_FOOD_COUNT,
	CLEAR_MYCART,
	RECEIVE_SEARCH_SHOPS
} from './mutation-types.js' 
export default{
	[RECEIVE_SWIPERS] (state,{swiperInfo}) {
        state.swipers = swiperInfo
	},

	[RECEIVE_ADDRESS] (state,{addressName}) {
        state.address = addressName
	},

	[RECEIVE_FOODCATEGORY] (state,{foodCategory}) {
        state.foodCategory = foodCategory
	},

	[RECEIVE_SHOPLIST] (state,{shopList}) {
        state.shopList = shopList
	},
	
	[RECEIVE_USERINFO] (state,{userInfo}) {
       state.userInfo = userInfo
	},

	[RECEIVE_LOGOUT] (state) {
       state.userInfo = {}
	},

	[RECEIVE_SHOPINFO] (state,{shopInfo}) {
       state.shopInfo = shopInfo
	},

	[RECEIVE_SHOPGOODS] (state,{shopGoods}) {
       state.shopGoods = shopGoods
	},

	[RECEIVE_SHOPRATINGS] (state,{shopRatings}) {
       state.shopRatings = shopRatings
	},

	[INCREMENT_FOOD_COUNT] (state,{food}) {
       if (!food.count) {
					Vue.set(food,'count',1)
					state.cartFoods.push(food)
			 } else {
				food.count++
			 }
	},

	[DECREMENT_FOOD_COUNT] (state,{food}) {
				if (food.count) {
					food.count--
					if (food.count === 0) {
						state.cartFoods.splice(state.cartFoods.indexOf(food),1)
					}
					
				}
	},

	[CLEAR_MYCART] (state) {
		state.cartFoods.forEach(food => {
			food.count = 0
		})
		state.cartFoods = []
		
	},

	[RECEIVE_SEARCH_SHOPS] (state,{searchShops}) {
		state.searchShops = searchShops
	}
}