import {
	RECEIVE_SWIPERS,
	RECEIVE_ADDRESS,
	RECEIVE_FOODCATEGORY
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
	}
	
}