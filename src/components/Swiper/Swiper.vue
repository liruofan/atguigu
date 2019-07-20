<template>
  <div class="swiperWrap">
    <swiper :options="swiperOption">
    	<swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img class="swiperImg" :src="item.imgUrl">
      </swiper-slide>
    	<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
	return {
    swiperOption:{
      pagination:'.swiper-pagination',
      loop:true
    },
    swiperList:[{
      imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
    },{
      imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/7a902407b45793f1613124db98740498.jpg_750x200_858aac54.jpg'
    },{
      imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
    }]
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
  .swiperWrap >>> .swiper-pagination-bullet-active
    background-color #fff !important
  .swiperWrap
    position absolute 
    left 0
    top .48rem
    right 0
    .swiperImg
      width 100%
</style>
