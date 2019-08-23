<template>
  <div class="swiperWrap">
    <div class="swiper-container swiper1">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in swipers" :key="index">
           <img class="swiperImg" :src="item.imgUrl" ref="img"> 
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
export default {
	components: {
	},
  props: {},
  data() {
	return {
    
   };
  },
  created() {},
  activated() {
		
	},
  deactivated() {
		
	},
  mounted() {
  },
  methods: {
    
  },
  computed: {
    ...mapState(['swipers'])
	},
	watch:{
    swipers (value) {
      this.$nextTick(() => {
      new Swiper ('.swiper1', {
    autoplay:{
    delay: 4000,
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
.swiperWrap >>> .swiper-pagination-bullet-active
  background-color #fff !important
.swiperWrap
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.6%
  background-color #f4f4f4
  .swiperImg
    width 100%
</style>
