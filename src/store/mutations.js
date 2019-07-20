import {
	RECEIVE_SWIPERS
} from './mutation-types.js' 
export default{
	[RECEIVE_SWIPERS] (state,{swiperInfo}) {
        state.swipers = swiperInfo
	}
}