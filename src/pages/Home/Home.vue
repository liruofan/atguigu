<template>
  <div>
	<NavHeader class="header_style" title="弘农路同心堂大药房东100米亚神书画社">
    <i class="iconfont icon-sousuo" slot="left" @click="$router.replace('/search')"></i>
    <div class="right" slot="right">登录|注册</div>
	</NavHeader> 
    <Swiper/>
   </div>
 </template>

<script>
import NavHeader from '../../components/NavHeader/NavHeader.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
export default {
  components: {
    NavHeader,
    Swiper
  },
  props: {},
  data() {
	return {

	};
  },
  created() {},
  mounted() {},
  methods: {
    
  },
  computed: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
