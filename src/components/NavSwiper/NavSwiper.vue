<template>
  <div class="icons">
    <swiper :options="swiperOption">
    	<swiper-slide v-for="(foodCategory,index) in pages" :key="index">
        
         <div class="icon" v-for="(food,index) in foodCategory" :key="index">
       <div class="img-wrap">
         <img class="img" :src="BASE_URL+food.image_url">
       </div>
       <p class="word">{{food.title}}</p>
       </div>
      </swiper-slide>
    	<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {},
  props: {},
  data () {
	return {
    BASE_URL:'https://fuss10.elemecdn.com',
    swiperOption:{
      pagination:"swiper-pagination",
      autoplay:false,
      loop:true
    },
    
	}
  },
  created() {},
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
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 55%
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      margin-bottom .05rem
      .img-wrap
        position absolute
        left 0
        top 0
        right 0
        bottom .2rem
        .img
          padding-top .1rem
          display block
          margin 0 auto
          height 75%
	    .word
        font-size .13rem
        display block
        position absolute
        left .15rem
        right 0
        bottom 0
        width 70%
        color #666
        text-align center
        padding-bottom .05rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
</style>
