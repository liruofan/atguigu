import {
	RECEIVE_SWIPERS,
	RECEIVE_ADDRESS,
	RECEIVE_FOODCATEGORY,
	RECEIVE_SHOPLIST
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
	}
	
}