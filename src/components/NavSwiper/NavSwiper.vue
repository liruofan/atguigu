<template>
<div class="NavSwiper_wrap">
	<div class="swiper-container swiper2">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(foodCategory,index) in pages" :key="index" v-if="foodCategory.length">
				<div class="icon" v-for="(food,index) in foodCategory" :key="index">
          <div class="img_wrap">
						<img class="img" :src="BASE_URL+food.image_url">
					</div>
					 <p class="word">{{food.title}}</p>
				</div>
      </div>
		</div>
		<div class="swiper-pagination"></div>
   </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {},
  props: {},
  data () {
	return {
    BASE_URL:'https://fuss10.elemecdn.com',
  }
  },
  created() {},
	activated() {
    
  },
  deactivated() {
    
  },
  mounted() {},
  methods: {

  },
  computed: {
    ...mapState(['foodCategory']),
    pages () {
      const {foodCategory} = this
      let arr = []
      let minArr = []
      foodCategory.forEach(shop => {
         if (minArr.length === 8) {
           minArr = []
         }
         if (minArr.length === 0) {
           arr.push(minArr)  
         } 
          minArr.push(shop)
      })
      return arr
  },
},
  watch:{
		foodCategory (value) {
			this.$nextTick(() => {
      new Swiper ('.swiper2', {
		loop: true, 
		pagination: {
      el:'.swiper-pagination'
    }
  })
			})
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
  .NavSwiper_wrap >>> .swiper-pagination-bullet
    background-color $green !important
  .NavSwiper_wrap >>> .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction
    bottom 0
  .NavSwiper_wrap
    height 2.2rem
    .swiper-wrapper
      margin-top .1rem
      box-sizing border-box
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content flex-start
        flex-wrap wrap
        align-content center
        .icon
          display flex
          flex-direction column
          width 25%
          height 50%
          overflow hidden
          .img_wrap
            margin-bottom .1rem
            text-align center
            width 100%
            .img
              width .6rem
              height .6rem
          .word
            display block
            line-height .18rem
            box-sizing border-box
            padding 0 .11rem
            margin-bottom .15rem
            text-align center
            font-size .14rem
            width 100%
            ellipsis()
</style>
