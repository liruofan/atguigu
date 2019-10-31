<template>
	<div class="star" :class="starType">
		<span v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="item-star"></span>
	</div>
</template>

<script>
	const CLASS_ON = 'on'
	const CLASS_HALF = 'half'
	const CLASS_OFF = 'off'
	export default {
		data () {
			return {
				
			}
		},
		props:{
			size:{
				type:Number
			},
			score:{
				type:Number
			},
			starLength:{
				type:Number
			}
		},
		computed:{
			starType () {
				return 'star-' + this.size
			},
			itemClasses () {
				let result = []
				let score = Math.floor(this.score*2)/2
				let integer = Math.floor(score)
				let decimal = score % 1 !==0
				for (let i=0; i<integer; i++){
					result.push(CLASS_ON)
				}
				if(decimal){
					result.push(CLASS_HALF)
				}
				while (result.length < this.starLength) {
					result.push(CLASS_OFF)
				}
				return result
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styles/mixins.styl"
  .star
    font-size 0
    .item-star
      display inline-block
    &.star-48
      .item-star
        width .2rem
        height .2rem
        background-size .2rem .2rem
        background-repeat no-repeat
        margin-right .09rem
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .item-star
        width .15rem
        height .15rem
        background-size .15rem .15rem
        background-repeat no-repeat
        margin-right .06rem
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .item-star
        width .1rem
        height .1rem
        background-size .1rem .1rem
        background-repeat no-repeat
        margin-right .03rem
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
