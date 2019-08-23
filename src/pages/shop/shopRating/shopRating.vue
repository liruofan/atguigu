<template>
	<div class="Ratings" ref="Ratings">
		<div class="ratings-content">
		<div class="Rating_header">
			<div class="header_left">
				<div class="rating_num">{{shopInfo.score}}</div>
				<div class="rating_title">综合评分</div>
				<div class="rating_dec">高于周边商家99%</div>
			</div>
			<div class="header_right">
				<div class="fuwu_star"><span>服务态度</span><el-rate class="star" v-model="shopInfo.serviceScore" disabled show-score text-color="#ff9900"></el-rate></div>
				<div class="rating_star"><span>商家评分</span><el-rate class="star" v-model="shopInfo.score" disabled show-score text-color="#ff9900"></el-rate></div>
				<div class="delivery_time">送达时间&nbsp;&nbsp;<span>{{shopInfo.deliveryTime}}分钟</span></div>
			</div>
		</div>
		<div class="blank"></div>
		<div class="Rating_body">
			<div class="body_top">
				<div class="selectors">
					<div class="select_item" :class="{on:select_type === 2}" @click="select(2)">全部{{shopRatings.length}}</div>
					<div class="select_item" :class="{on:select_type === 0}" @click="select(0)">满意{{positiveSize}}</div>
					<div class="select_item" :class="{on:select_type === 1}" @click="select(1)">不满意{{shopRatings.length-positiveSize}}</div>
				</div>
				<div class="radios">
					<mt-checklist class="radio" v-model="value" :options="['只看有内容的评价']"></mt-checklist>
				</div>
			</div>
			<div class="body_rating">
				<ul>
					<li class="rating_item" v-for="(shopRating,index) in filterShopRatings" :key="index">
						<div class="left_wrap">
							<img class="protImg" width="30" height="30" :src="shopRating.avatar">
						</div>
						<div class="rating_right">
							<div class="firstRow">
								<div class="firstRow_left">
									<div class="name">{{shopRating.username}}</div>
									<div><el-rate class="star" v-model="shopRating.score" disabled text-color="#ff9900"></el-rate></div>
								</div>
								<div class="firstRow_right">{{shopRating.rateTime | date-fns}}</div>
							</div>	
								<p class="con">{{shopRating.text}}</p>
								<div class="tab">
									<div class="tab_item" v-for="(tab,index) in shopRating.recommend" :key="index">{{tab}}</div>
								</div>
						</div>
					</li>
				</ul>
			</div>
		 </div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import {Rate} from 'element-ui'
import {Checklist} from 'mint-ui'
import BScroll from 'better-scroll'
import {mapState,mapGetters} from 'vuex'
Vue.use(Rate)
Vue.use(Checklist)

export default {
	components:{
   'mt-checklist':Checklist
	},
	props: {},
	data() {
		return {
			value:[], //true看有内容的  false看全部的
			tabs:['南瓜粥','皮蛋瘦肉粥','扁豆焖面','娃娃菜炖豆腐','牛肉馅饼',],
			select_type:2 //0满意 1不满意 2全部
		};
	},
	created() {},
	mounted() {
		this.$store.dispatch('getShopRatings',() => {
			this.$nextTick(() => {
          new BScroll(this.$refs.Ratings, {
						click: true,
						bounce:false
          })
        })
		})
	},
	methods: {
		select (select_type) {
			this.select_type = select_type
		}
	},
	computed: {
		...mapState(['shopInfo','shopRatings']),
		...mapGetters(['positiveSize']),
		filterShopRatings () {
			const {shopRatings, select_type, value} = this
			return shopRatings.filter(shopRating => {
				const {rateType,text} = shopRating
				// select_type 0/1/2
				// rateType 0/1
				// value true/false
				// text>0 
				// 条件一: select_type = 2 || select_type = rateType
				// 条件二: value = false || text>0
				return (select_type === 2 || select_type === rateType) && (!value[0] || text.length > 0)
			})
		}
	},
	// watch:{
	// 	shopRatings (value) {
	// 		this.$nextTick(() => {
	// 			new BScroll('.shopRating',{
	// 				click: true
	// 			})
	// 		})
	// 	}
	// }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/styles/mixins.styl'
  .Ratings
    position absolute
    top 2.03rem
    left 0
    bottom 0
    width 100%
    font-size .13rem
    overflow hidden
    .Rating_header
      box-sizing border-box
      padding .2rem 0 .2rem
      display flex
      height 1.3rem
      .header_left
        display flex
        flex-direction column
        justify-content center
        align-items center
        border-right 1px solid $deepborder
        width 1.4rem
        height 100%
        .rating_num
          font-size .25rem
          color #ff9900
          margin-bottom .1rem
        .rating_title
          margin-bottom .06rem
        .rating_dec
          color #7e8c8d
      .header_right
        display flex
        flex 1
        flex-direction column
        justify-content center
        align-items center
        .star >>> .el-icon-star-on:before
          font-size: .2rem
        .star >>> .el-rate__item  
          margin-right -.06rem  
        .star >>> .el-rate__text
          font-size .14rem
          margin-left .03rem
        .star
          display inline-block
          line-height .1rem 
        .fuwu_star
          margin-bottom .05rem
          >span
            margin-right .05rem
        .rating_star
          margin-bottom .12rem
          >span
            margin-right .05rem
        .delivery_time > span
          color #93999f
    .blank
      height .18rem
      border-bottom 1px solid $deepborder
      border-top 1px solid $deepborder
      background-color $border
    .body_top
      padding .18rem .18rem .12rem
      height .9rem
      display flex
      flex-direction column
      border-bottom 1px solid $deepborder
      .selectors
        flex 1
        display flex
        .select_item
          color #4d555d
          width .68rem
          height .36rem
          line-height .4rem
          text-align center
          background-color #dbdddf
          margin-right .15rem
          &.on
            background-color $green
            color white
      .radios
        flex 1
        .radio >>> .mint-checkbox-core
          margin-bottom .03rem
        .radio >>> .mint-checkbox-label
          color #acb1b5
          font-size .13rem
          margin-left 0 
        .radio >>> .mint-checklist-label
          margin-top .22rem
          margin-left -.21rem
        .radio >>> .mint-cell-wrapper
         border 1px solid white !important
         padding-right 1.9rem !important
        .radio >>> .mint-cell-title
         border 1px solid white !important
    .rating_item
      box-sizing border-box
      display flex
      margin 0 .18rem 0
      padding .18rem 0 .18rem
      border-bottom 1px solid $deepborder
      .left_wrap
        width .4rem
        height 100%
      .rating_right
        flex 1
        .firstRow
          display flex
          justify-content space-between
          height .3rem
          .firstRow_left
            display flex
            flex-direction column
            > .name
              margin-top .02rem
              margin-bottom -.01rem
              font-size .13rem
            .star >>> .el-icon-star-on:before
              font-size: .13rem
            .star >>> .el-rate__item  
              margin-right -.06rem  
            .star >>> .el-rate__text
              font-size .14rem
              margin-left .03rem
          .firstRow_right
            font-size .13rem
            color #acb1b5
        .con
          margin .1rem 0 .08rem
          line-height .19rem
        .tab
          display flex
          justify-content space-between
          align-content space-between
          align-items space
          flex-wrap wrap
          .tab_item
            display inline-block
            height .16rem
            line-height .2rem
            padding 0 .03rem 0
            margin-bottom .05rem
            color #93999f
            font-size .13rem
            text-align center
            border 1px solid #e6e7e8
</style>
