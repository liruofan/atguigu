<template>
  <div>
    <div class="title">
      <i class="iconfont icon-xuanxiang"></i>
      <span>附近商家</span>
    </div>
    <ul>
      <li class="item_shop" v-for="(shop,index) in shopList" :key="index" @click="$router.push(`./shop?id=${index}`)">
        <img class="img" :src="shop.image_path">
        <div class="item_info_center">
           <div class="item_info_name"><div class="pinpaiWrap"><div class="pinpai">品牌</div></div> {{shop.name}}</div>
           <div class="item_info_rating"><el-rate class="star" v-model="shop.rating" disabled show-score text-color="#ff9900"></el-rate><div class="sell">月售{{shop.recent_order_num}}单</div></div>
           <div class="item_info_delivery">￥{{shop.float_minimum_order_amount}}起送<span class="or">/</span><span>配送费约￥{{shop.float_delivery_fee}}</span></div>
        </div>
        <div class="item_info_right">
           <div class="item_info_bzp"><span v-for="(support,index) in shop.supports" :key="index">{{support.icon_name}}</span></div>
           <span class="item_info_zhuansong">{{shop.delivery_mode.text}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue'
// import {Rate} from 'element-ui'
// Vue.use(Rate)
import Vue from 'vue'
import {Rate} from 'element-ui'
Vue.use(Rate)
import {mapState} from 'vuex'

export default {
  components: {
		Rate
		
  },
  props: {},
  data() {
	return {
    
	};
  },
  created() {},
  mounted() {},
  methods: {

  },
  computed: {
    ...mapState(['shopList'])
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
    .title
      line-height .36rem
      padding-left .11rem
      text-align left
      height .28rem
      font-size .16rem
      color #999
      border-top 0.1rem solid $border
      .icon-xuanxiang
        font-size .18rem
    .item_shop
      display flex
      border-bottom .01rem solid $border
      padding .04rem 0
      height 1rem
      .img
        padding .1rem
        width .8rem
        height .8rem
      .item_info_center
        position relative
        flex 1
        width 2rem
        height 100%
        .item_info_name
           line-height .39rem
           font-weight 700
           font-size .16rem
           overflow hidden
           white-space nowrap 
           text-overflow ellipsis
          .pinpaiWrap
            width .26rem
            height .16rem
            display inline-block
          .pinpai
            font-weight normal
            position absolute 
            left 0
            top .11rem
            width .26rem
            height .16rem
            line-height .17rem
            text-align center
            font-size .11rem
            background-color #ffd930
        .item_info_rating
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          color #666
          height .21rem
          line-height .21rem
          font-size .12rem
          .star >>> .el-icon-star-on:before
            font-size: .15rem
          .star >>> .el-rate__item  
            margin-right -.06rem
          .star >>> .el-rate__text
            font-size .12rem
            margin-left .03rem
          .star
            display inline-block
            line-height .1rem 
            margin-left -.03rem
          .sell
            height .2rem
            display inline-block
            margin-left .07rem
            font-size .11rem
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
          font-size .11rem
        .item_info_bzp > span
          margin 0 .01rem
          border 1px solid #eeeeee 
          color #666  
        .item_info_zhuansong
          margin 0 auto
          text-align center
          width .38rem
          line-height .14rem
          height .1rem
          display block
          color #02a774  
          border 1px solid #02a774
          font-size .09rem  
</style>
