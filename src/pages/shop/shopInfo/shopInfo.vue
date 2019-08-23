<template>
	<div class="shopInfo_wrap">
		<div class="sendInfo_wrap">
			<div class="sendInfo_title">配送信息</div>
			<div class="sendInfo_dec">
				<div class="dec_title">{{shopInfo.description}}</div>
				<span>由商家配送提供配送，约{{shopInfo.deliveryTime}}分钟送达，距离{{shopInfo.distance}}</span>
			</div>
			<div class="sendInfo_price">配送费 ￥{{shopInfo.deliveryPrice}}</div>
		</div>
		<div class="blank"></div>
		<div class="active_wrap">
			<div class="active_title">活动与服务</div>
			<ul class="active_list">
				<li v-for="(support,index) in shopInfo.supports" :key="index" class="active_item">
					<div class="item_left_wrap">
						<div class="item_title" :class="bgcolor_arr[support.type]">{{support.name}}</div>
					</div>
					<div class="item_right_wrap">{{support.content}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	components: {},
	props: {},
	data() {
		return {
			bgcolor_arr:['bg_green','bg_red','bg_orange']
		};
	},
	created() {},
	mounted() {},
	methods: {

	},
	computed: {
		...mapState(['shopInfo']),
	},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/styles/mixins.styl'
  .shopInfo_wrap
    position absolute
    top 2.03rem
    left 0
    right 0
    bottom 0
    overflow hidden
    background-color $border
    .sendInfo_wrap
      background-color white
      box-sizing border-box
      font-size .15rem
      padding .08rem .14rem .08rem
      width 100%
      .sendInfo_title
        font-weight 700
        font-size .18rem
        text-align left
        line-height .36rem
        height .3rem
        margin-bottom .05rem
      .sendInfo_dec
        line-height .2rem
        .dec_title
          margin-right .06rem
          display inline-block
          width .64rem
          height .22rem
          background-color #0097ff
          line-height .26rem
          color white
          text-align center
          font-size .14rem
          border-radius .05rem
      .sendInfo_price
        line-height .3rem
    .blank
      width 100%
      background-color $border
      height .19rem
    .active_wrap
      background-color white
      box-sizing border-box
      padding .08rem .14rem .08rem
      .active_title
        font-size .18rem
        font-weight 700
        text-align left
        line-height .34rem
        height .28rem
      .active_list
        margin-top .05rem
        .active_item
          display flex
          height .32rem
          font-size .14rem
          .item_left_wrap
            display flex
            justify-content flex-start
            align-items center
            height 100%
            width .45rem
            .item_title
              width .38rem
              height .2rem
              color white
              text-align center
              line-height .24rem
              border-radius .03rem
              &.bg_green
                background-color #95cd76
              &.bg_red
                background-color #f07373
              &.bg_orange
                background-color #f1884f
          .item_right_wrap
            flex 1
            height 100%
            line-height .35rem
            font-size .15rem
            color #6f6f6f
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
</style>
