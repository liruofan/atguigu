<template>
  <div class="navHeader">
     <slot class="con_left" name="left"></slot>
     <div class="con_center">{{title}}</div>
     <slot class="con_right" name="right"></slot>
  </div>
</template>

<script>
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
  computed: {},
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
      .con_center
        text-align center
        font-size .2rem
        flex 1
      
        
</style>
