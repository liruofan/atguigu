<template>
  <div class="swiperWrap">
    <swiper :options="swiperOption" v-if="swipers.length">
    	<swiper-slide v-for="(item,index) in swipers" :key="index">
        <img class="swiperImg" :src="item.imgUrl">
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
  data() {
	return {
    swiperOption:{
      pagination:'.swiper-pagination',
      loop:true,
      autoplay:5000
    },
   };
  },
  created() {},
  mounted() {
  },
  methods: {
     
  },
  computed: {
    ...mapState(['swipers'])
  },
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
