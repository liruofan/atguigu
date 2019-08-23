import {
   reqSwipers,
   reqAddress,
   reqFoodCategory,
	 reqShopList,
	 reqUserInfo,
	 reqUserlogout,
	 reqShopInfo,
	 reqShopGoods,
	 reqShopRatings,
	 reqSearchShops
} from '../api/index.js'

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
       
  },
  
//异步请求商家列表
   async getShopList ({commit,state}) {
	 const result = await reqShopList(state.latitude,state.longitude)  
	if (result.code===0) {
		let shopList = result.data
	  commit(RECEIVE_SHOPLIST,{shopList})
	}
	
	 },

//同步记录用户信息
   recordUserInfo ({commit},userInfo) {
		  commit(RECEIVE_USERINFO,{userInfo})
		 },

//根据会话获取用户信息
   async getUserInfo ({commit}) {
		const result = await reqUserInfo()
		if (result.code === 0) {
			let userInfo = result.data
			commit(RECEIVE_USERINFO,{userInfo})
		 }  
	 },

//异步请求用户登出
   async getLogout ({commit}) {
			const result = await reqUserlogout()
			 if (result.code === 0) {
				commit(RECEIVE_LOGOUT)
			 }
	 },

//异步请求商家信息
   async getShopInfo ({commit}) {
			const result = await reqShopInfo()
			if (result.code === 0) {
				let shopInfo= result.data
        commit(RECEIVE_SHOPINFO,{shopInfo})
			}
	 },

//异步请求商家食品
	 async getShopGoods ({commit}) {
		const result = await reqShopGoods()
		if (result.code === 0) {
			let shopGoods = result.data
			commit(RECEIVE_SHOPGOODS,{shopGoods})
		}
	 },

//异步请求商家评价
	 async getShopRatings ({commit},callback) {
		const result = await reqShopRatings()
		if (result.code === 0) {
			let shopRatings = result.data
			commit(RECEIVE_SHOPRATINGS,{shopRatings})
			callback && callback()
	 }
},

//同步更新食物数量
	 async updata_count ({commit},{isAdd,food}) {
			if (isAdd) {
				commit(INCREMENT_FOOD_COUNT,{food})
			}else{
				commit(DECREMENT_FOOD_COUNT,{food})
			}
	 },

//同步清空购物车
	 clearCart ({commit}) {
			commit(CLEAR_MYCART)
	 },

//异步搜索商家列表
	 async searchShops ({commit,state},keyword) {
		 const geohash = state.latitude + ',' + state.longitude
		const result = await reqSearchShops(keyword,geohash)
		if (result.code === 0) {
			let searchShops = result.data
			commit(RECEIVE_SEARCH_SHOPS,{searchShops})
		}
	 }
}
