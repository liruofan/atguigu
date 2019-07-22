<template>
  <div class="HomeShops">
    <div class="title">
      <i class="iconfont icon-xuanxiang"></i>
      <span>附近商家</span>
    </div>
    <ul>
      <li class="item_shop" v-for="(shop,index) in 5" :key="index">
        <img class="img" src="http://img1.qunarzz.com/sight/p0/1703/58/5835f32c0ebe3bc6a3.img.jpg_250x250_f421d564.jpg">
        <div class="item_info_center">
           <div class="item_info_name"><span class="pinpai">品牌</span> 嘉禾一品（温都水城）嘉禾一品（温都水城）嘉禾一品（温都水城）嘉禾一品（温都水城）嘉禾一品（温都水城）嘉禾一品（温都水城）嘉禾一品（温都水城）嘉禾一品（温都水城）嘉禾一品（温都水城）</div>
           <div class="item_info_rating"><span class="star">$ $ $ $ $ </span><span class="rating">4.7</span>月售106单</div>
           <div class="item_info_delivery">￥20起送<span class="or">/</span>配送费约￥5</div>
        </div>
        <div class="item_info_right">
           <div class="item_info_bzp"><span>保</span><span>准</span><span>票</span></div>
           <span class="item_info_zhuansong">硅谷专送</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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
  .HomeShops
    width 100%
    .title
      line-height .36rem
      padding-left .11rem
      text-align left
      width 100%
      height .28rem
      font-size .16rem
      color #999
      border-top 0.1rem solid $border
      .icon-xuanxiang
        font-size .18rem
    .item_shop
      display flex
      border-bottom 2px solid $border
      padding .04rem 0
      height 1rem
      .img
        padding .1rem
        width .8rem
        height .8rem
      .item_info_center
        flex 1
        width 2rem
        height 100%
        .item_info_name
           line-height .4rem
           font-weight 600
           font-size .16rem
           overflow hidden
           white-space nowrap 
           text-overflow ellipsis
          .pinpai
            padding .01rem
            font-size .11rem
            background-color #ffd930
        .item_info_rating
          color #666
          line-height .2rem
          font-size .12rem
          .star
            color #ff9a0d
          .rating
            color #ff6000
            margin-right .08rem
        .item_info_delivery 
          margin-left -.02rem
          color #666
          line-height .4rem
          font-size .12rem
          .or
            margin 0 .02rem
            font-weight 600
            color #ccc
      .item_info_right
        text-align center
        width .8rem
        height 100%
        .item_info_bzp
          line-height .4rem
          font-size .12rem
        .item_info_bzp > span
          margin 0 .01rem
          padding .01rem
          border 1px solid #eeeeee 
          color #666  
        .item_info_zhuansong
          margin 0 auto
          text-align center
          width .5rem
          line-height .15rem
          height .13rem
          display block
          color #02a774  
          border 1px solid #02a774
          font-size .1rem  
</style>
