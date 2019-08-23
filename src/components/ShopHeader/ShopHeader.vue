<template>
	<div>
		<div class="shopHeader" :style="`background:url('${shopInfo.bgImg}') no-repeat`">
			<span class="icon_wrap" @click="$router.back()">
				<i class="iconfont icon-jiantou2"></i>
			</span>
		</div>
		<div class="shopPic_wrap">
			<div class="shopPic">
				<img class="img" :src="shopInfo.avatar">
			</div>
		</div>
		<div class="info_wrap" @click="popupVisible2 = true" v-if="shopInfo.supports">
		<div class="firstRow_info">
      <div class="firstRow_info_left">
				<span class="pinpai">品牌</span>
			</div>
			<span class="shop_name">{{shopInfo.name}}</span>
		</div>
		<div class="secondRow_info">
			<span class="secondRow_info_text">{{shopInfo.score}} &nbsp;&nbsp;月售{{shopInfo.sellCount}}单 &nbsp;&nbsp;{{shopInfo.description}} &nbsp;&nbsp;约{{shopInfo.deliveryTime}}分钟 &nbsp;&nbsp;距离{{shopInfo.distance}}</span>
		</div>
		<div class="thirdRow_info" @click.stop="popupVisible = true">
			<div class="thirdRow_left">
				<span class="activity_name">{{shopInfo.supports[0].name}}</span>
			</div>
			<div class="thirdRow_center">
				<span class="thirdRow_center_text">{{shopInfo.supports[0].content}}</span>
			</div>
			<div class="thirdRow_right">
				<span class="thirdRow_right_text">{{shopInfo.supports.length}}个优惠</span>
			</div>
		</div>
		</div>
		<mt-popup class="mt-popup" v-model="popupVisible" position="bottom" closeOnClickModal="false">
			<i class="iconfont icon-close" @click="popupVisible = false"></i>
			<div class="pop">
				<div class="pop_title">
					优惠活动
				</div>
				<ul class="list">
					<li class="list_item" v-for="(support,index) in shopInfo.supports" :key="index">
						<div class="item_left">
							<div class="active_title" :class="bgcolor_arr[support.type]">{{support.name}}</div>
						</div>
						<div class="item_right">{{support.content}}</div>
					</li>
				</ul>
			</div>
		</mt-popup>
		<mt-popup class="mt-popup2" v-model="popupVisible2" modal="false" closeOnClickModal="false">
			<div class="wrap">
			<div class="title_wrap">
				<div class="title_left">
					<div class="pinpai">品牌</div>
				</div>
				<span class="title_right">{{shopInfo.name}}</span>
			</div>
			<div class="body_info">
				<div class="info_item">
					<div class="item_top">{{shopInfo.score}}</div>
					<div class="item_bottom">评分</div>
				</div>
				<div class="info_item">
					<div class="item_top">{{shopInfo.sellCount}}</div>
					<div class="item_bottom">月售</div>
				</div>
				<div class="info_item">
					<div class="item_top">{{shopInfo.description}}</div>
					<div class="item_bottom">约{{shopInfo.deliveryTime}}分钟</div>
				</div>
				<div class="info_item">
					<div class="item_top">{{shopInfo.deliveryPrice}}元</div>
					<div class="item_bottom">配送费用</div>
				</div>
				<div class="info_item">
					<div class="item_top">{{shopInfo.distance}}</div>
					<div class="item_bottom">距离</div>
				</div>
			</div>
			<div class="gonggao">- 公告 -</div>
			<p class="dec">{{shopInfo.bulletin}}</p>
			<div class="circle" @click="popupVisible2 = false">
				<i class="iconfont icon-close"></i>
			</div>
			</div>
		</mt-popup>
	
		
	</div>
</template>

<script>
import Vue from 'vue'
import {Popup} from 'mint-ui'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
Vue.use(Popup)

export default {
	components: {
		'mt-popup':Popup
	},
	props: {},
	data() {
		return {
			popupVisible:false,
			popupVisible2:false,
			bgcolor_arr:['bg_green','bg_red','bg_orange']
		};
	},
	created() {},
	mounted() {},
	methods: {
	},
	computed: {
		...mapState(['shopInfo'])
	},
	
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/styles//mixins.styl'
  .shopHeader
    width 100%
    height .48rem
    background-color #f4f4f4
    text-align left
    overflow hidden
    .icon_wrap
      z-index 200
      display inline-block
      height 100%
      width .32rem
      line-height .4rem
      text-align center
      .icon-jiantou2
        font-size .2rem
        color white
  .shopPic_wrap
    position relative
    height .28rem
    margin-bottom .05rem
    .shopPic
      position absolute
      left 50%
      margin-left -.34rem
      top -.4rem
      box-sizing border-box
      border 1px solid #f3f3f3
      width .68rem
      height .68rem
      .img
        width 100%
  .info_wrap
    margin 0 .28rem 0
    .firstRow_info
      display flex
      justify-content center
      height .34rem
      line-height .35rem
      .firstRow_info_left
        display flex
        justify-content center
        align-items center
        height 100%
        width .45rem
        .pinpai
          display inline-block
          text-align center
          height .18rem
          width .32rem
          line-height .2rem
          background-color #ffe433
          font-weight 700
          font-size .12rem
          border-radius .03rem
      .shop_name
        font-size .2rem
        font-weight 700
    .secondRow_info
      line-height .13rem
      height .24rem
      text-align center
      .secondRow_info_text
        font-size .13rem
    .thirdRow_info
      box-sizing border-box
      border 1px solid #eeeeee
      display flex
      height .24rem
      text-align center
      .thirdRow_left
        height 100%
        width .4rem
        text-align center
        line-height .12rem
        .activity_name
          background-color #70bc46
          padding .04rem .04rem .01rem
          font-size .1rem
          border-radius .02rem
          color white
      .thirdRow_center
        font-size .13rem
        line-height .24rem
        flex 1
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        .thirdRow_center_text
          color #666666
      .thirdRow_right
        font-size .13rem
        width .66rem
        line-height .24rem
        .thirdRow_right_text
          color #666666
        .icon-jiantou2
          font-size .13rem
  .mt-popup
    box-sizing border-box
    width 100%
    padding 0 .3rem .15rem
    .icon-close
      position absolute
      right .15rem
      top .15rem
    .pop
      position relative
      .pop_title
        text-align center
        font-size .2rem
        font-weight 700
        line-height .63rem
      .list
        height auto
        .list_item
          height .3rem
          display flex
          line-height .34rem
          .item_left
            height 100%
            width .43rem
            display flex
            justify-content flex-start
            align-items center
            .active_title
              width .35rem
              height .18rem
              background-color #f07373
              text-align center
              line-height .21rem
              font-size .13rem
              color white
              border-radius .02rem
              &.bg_green
                background-color #70bc46
              &.bg_red
                background-color #f07373
              &.bg_orange
                background-color #f1884f
          .item_right
            height 100%
            font-size .14rem
            flex 1
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
  .mt-popup2
    width 90%
    border-radius .07rem
    box-sizing border-box
    padding .24rem
    .wrap
      position relative
      .title_wrap
        display flex
        justify-content center
        align-items center
        width 100%
        height .35rem
        text-align center
        .title_left
          margin-left .14rem
          display flex
          justify-content center
          align-items center
          .pinpai
            display inline-block
            text-align center
            height .18rem
            width .32rem
            line-height .2rem
            background-color #ffe433
            font-weight 700
            font-size .12rem
            border-radius .03rem
        .title_right
          margin-left .08rem
          font-size .2rem
          font-weight 700
      .body_info
        width 100%
        margin-top .15rem
        display flex
        justify-content space-around
        .info_item
          display flex
          justify-content center
          align-items center
          flex-direction column
          height 100%
          .item_top
            font-size .16rem
            font-weight 700
            margin-bottom .1rem
          .item_bottom
            font-size .13rem
            color #999999
      .gonggao
        text-align center
        height .45rem
        line-height .5rem
        font-size .14rem
        color #999999
      .dec
        font-size .14rem
      line-height .2rem
      .circle
        position absolute
        top 124%
        left 50%
        transform translateX(-50%)
        line-height .25rem
        width .3rem
        height .3rem
        border-radius 50%
        text-align center
        border 1px solid rgba(255, 255, 255, .7)
        .icon-close
          font-size .17rem
          color rgba(255, 255, 255, .7)
</style>
