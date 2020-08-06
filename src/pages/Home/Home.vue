<template>
  <div>
	<NavHeader class="header_style" title="弘农路亚神书画社">
    <i class="iconfont icon-sousuo" slot="left" @click="$router.replace('/search')"></i>
    <div class="right" slot="right">登录|注册</div>
	</NavHeader> 
  navHeader2
   </div>
 </template>

<script>
import NavHeader from '../../components/NavHeader/NavHeader.vue'
export default {
  components: {
	  NavHeader
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
  @import '../../common/styles//mixins.styl'
    .icon-sousuo 
      font-size .23rem
      margin-left .1rem
      padding-right .1rem
    .right
      font-size .14rem  
      margin-right .1rem
      padding-left .1rem
    
      
</style>
