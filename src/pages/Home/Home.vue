<template>
  <div class="home">
	  <NavHeader class="header_style" :title="address">
      <i class="iconfont icon-sousuo" slot="left" @click="$router.replace('/search')"></i>
      <router-link :to="userInfo._id ? '' : '/login'" class="right" slot="right">
				<span v-if="!userInfo._id">登录|注册</span>
				<span v-else><i class="iconfont icon-person"></i></span>
			</router-link>
	  </NavHeader> 
    <Swiper/>
    <NavSwiper/>
    <HomeShops/>
    
  </div>
</template>

<script>
import NavHeader from '../../components/NavHeader/NavHeader.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
import NavSwiper from '../../components/NavSwiper/NavSwiper.vue' 
import HomeShops from '../../components/HomeShops/HomeShops.vue' 
import {mapActions,mapState} from 'vuex'
export default {
  components: {
    NavHeader,
    Swiper,
    NavSwiper,
    HomeShops
  },
  props: {},
  data() {
	return {
    
	};
  },
  created() {},
  mounted() {
		this.getFoodCategory()
		
  },
  methods: {
		...mapActions(['getFoodCategory']),
		
  },
  computed: {
   ...mapState(['address','userInfo'])
	},
	

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .right
    color white
</style>
