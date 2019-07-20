<template>
  <div class="navHeader">
    <div class="left_wrap">
      <slot name="left"></slot>
    </div>
      <div class="con_center">{{title}}</div>
    <div class="right_wrap">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  components: {},
  props: {
    title:String
  },
  data() {
	return {

	};
  },
  created() {},
  mounted() {},
  methods: {

  },
  computed: {
     
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
    .navHeader
      position fixed
      left 0
      top 0 
      right 0
      height .48rem
      line-height .48rem
      color white
      background $green
      display flex
      .left_wrap >>> .icon-sousuo
        font-size .23rem
      .left_wrap
        margin-left .1rem
        margin-right .3rem
        padding-right .1rem
      .right_wrap  
        font-size .14rem  
        margin-right .1rem
        margin-left .3rem
        padding-left .1rem
      .con_center
        text-align center
        font-size .2rem
        flex 1
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      
        
</style>
