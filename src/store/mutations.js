import {
	RECEIVE_SWIPERS,
	RECEIVE_ADDRESS
} from './mutation-types.js' 
export default{
	[RECEIVE_SWIPERS] (state,{swiperInfo}) {
        state.swipers = swiperInfo
	},

	[RECEIVE_ADDRESS] (state,{addressName}) {
        state.address = addressName
	}
}