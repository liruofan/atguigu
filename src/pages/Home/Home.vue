<template>
  <div class="home">
	  <NavHeader class="header_style" :title="address">
      <i class="iconfont icon-sousuo" slot="left" @click="$router.replace('/search')"></i>
      <div class="right" slot="right">登录|注册</div>
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
    this.getSwipers()
  },
  methods: {
    ...mapActions(['getSwipers'])
  },
  computed: {
   ...mapState(['address'])
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
