<template>
<div>
  <div class="footGuideWrap"></div>
  <div class="footGuide">
     <router-link tag="div" class="footGuide-item" to="/home">
        <div class="icon-wrap">
          <i class="iconfont icon-waimai"></i>
        </div>
        <span>首页</span>
	 </router-link>
	 <router-link tag="div" class="footGuide-item" to="/search">
        <div class="icon-wrap">
          <i class="iconfont icon-search"></i>
        </div>
        <span>搜索</span>
	 </router-link>
	 <router-link tag="div" class="footGuide-item" to="/order">
        <div class="icon-wrap">
          <i class="iconfont icon-dingdan"></i>
        </div>
        <span>订单</span>
	 </router-link>
	 <router-link tag="div" class="footGuide-item" to="/profile">
        <div class="icon-wrap">
          <i class="iconfont icon-geren"></i>
        </div>
        <span>我的</span>
	 </router-link>
  </div>
</div>
  
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
	return {

	};
  },
  created() {},
  mounted() {},
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  },
  computed: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/styles//mixins.styl'
  .footGuide
    z-index 200
    background-color white
    color #999999
    border-top 1px solid #f3f3f3
    position fixed
    left 0
    bottom 0
    right 0
    height .52rem
    font-size .12rem
    display flex
    .footGuide-item
      margin-top .06rem
      display flex
      justify-content center
      align-items center
      flex-direction column
      line-height .2rem
      flex 1
      &.active
        color $green
      .iconfont
        font-size .22rem
        
</style>

