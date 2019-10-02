<template>
	<div class="carControl">
		<transition name="animate">
			<div class="reduce_wrap" v-if="food.count">
				<i class="iconfont icon-remove_circle_outline" @click="updata_count(false)"></i>
			</div>
		</transition>
		<div class="text" v-if="food.count">{{food.count}}</div>
		<div class="add_wrap">
			<i class="iconfont icon-add_circle" @click="updata_count($event,true)"></i>
			</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		food:Object
	},
	data() {
		return {
			reduce_ishow:false
		};
	},
	created() {},
	mounted() {},
	methods: {
		updata_count ($event,isAdd) {
			this.$store.dispatch('updata_count',{isAdd,food:this.food})
			if (isAdd) {
				this.$emit('onAdd',event.target)
			}
		}
	},
	computed: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/styles//mixins.styl'
  .carControl
    height .28rem
    display flex
    justify-content right
    align-items center
    .animate-enter-active,.animate-leave-active
      transition all .3s 
    .animate-enter,.animate-leave-to
      opacity 0
      transform translateX(.3rem) rotate(180deg)
    .reduce_wrap
      text-align center
      height 100%
      line-height .26rem
      width .28rem
      flex 0 0 .28rem
      .icon-remove_circle_outline
        font-size .24rem
        color $green
    .text
      color #93999f
      height 100%
      width .2rem
      flex 0 0 .2rem
      font-size .14rem
      display flex
      justify-content center
      line-height .3rem
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .add_wrap
      text-align center
      line-height .26rem
      height 100%
      width .28rem
      flex 0 0 .28rem
      .icon-add_circle
        font-size .24rem
        color $green
</style>
