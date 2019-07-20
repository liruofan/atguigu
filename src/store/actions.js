import {
   reqSwipers
} from '../api/index.js'

import {
	RECEIVE_SWIPERS
} from './mutation-types.js'

export default {
  async getSwipers ({commit}) {
	  const result = await reqSwipers()
	  if (result.code===0) {
		 let swiperInfo = result.data
		 commit(RECEIVE_SWIPERS,{swiperInfo})
	  }
	}
}