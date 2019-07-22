import {
   reqSwipers,
   reqAddress,
   reqFoodCategory
} from '../api/index.js'

import {
	RECEIVE_SWIPERS,
	RECEIVE_ADDRESS,
	RECEIVE_FOODCATEGORY,
} from './mutation-types.js'

export default {
//异步请求轮播图数据
  async getSwipers ({commit}) {
	  const result = await reqSwipers()
	  if (result.code===0) {
		 let swiperInfo = result.data
		 commit(RECEIVE_SWIPERS,{swiperInfo})
	  }
	},

//异步请求地址数据
  async getAdress ({commit,state}) {
	 const geohash = state.latitude + ',' + state.longitude
	 const result = await reqAddress({geohash})
	 if (result.code===0) {
		let addressName = result.data.name
		commit(RECEIVE_ADDRESS,{addressName})
	 }
  },
  
//异步请求食品分类列表
  async getFoodCategory ({commit}) {
	const result = await reqFoodCategory()
	if (result.code===0) {
		let foodCategory = result.data
	  commit(RECEIVE_FOODCATEGORY,{foodCategory})
	}
       
  }

}