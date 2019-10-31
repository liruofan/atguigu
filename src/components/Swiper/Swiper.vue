<template>
  <div class="swiperWrap">
    <div v-if="swiperArr" class="swiper-container swiper1">
    <div class="swiper-wrapper">
      <div  class="swiper-slide" v-for="(item,index) in swiperArr" :key="index">
          <img class="swiperImg" :src="item.picUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
   </div>  
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {foo} from '../../api/home'
import {ERR_OK} from '../../api/config'
export default {
	components: {
	},
  props: {},
  data() {
	return {
    swiperArr:[]
   };
  },
  created() {
		this._getSwiper()
	},
  activated() {
		if(this.mySwiper) {
			this.mySwiper.autoplay.start()
		}
		
	},
  deactivated() {
		if(this.mySwiper) {
			this.mySwiper.autoplay.stop();
		}
	},
  mounted() {
	},
  methods: {
    _getSwiper () {
			foo().then((res) => {
				if (res.code === ERR_OK){
					let result = res.data
					this.swiperArr = result.slider
				}
			})
		}
  },
  computed: {
    
	},
	watch:{
    swiperArr (value) {
      this.$nextTick(() => {
      this.mySwiper = new Swiper ('.swiper1', {
    autoplay:{
    delay: 1000,
      disableOnInteraction: false,
    },
    loop:true,
    pagination: {
      el:'.swiper-pagination'
    }
	})
   
 })
}

 
}
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/styles/mixins.styl'
.swiperWrap >>> .swiper-pagination-bullet
  background-color $color-text-l
  opacity .8
.swiperWrap >>> .swiper-pagination-bullet-active
  width .2rem
  border-radius .05rem
  background-color $color-text-ll
.swiperWrap
  overflow hidden
  width 100%
  height 0
  padding-bottom 40%
  background-color #f4f4f4
  .swiperImg
    width 100%
</style>
