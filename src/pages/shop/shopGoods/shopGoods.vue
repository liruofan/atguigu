<template>
<div>
	<div class="goods_wrap">
		<div class="menu_wrap">
			<ul class="menu_list">
				<li ref="menu_li" class="menu_item" :class="{on:index === current_index}" v-for="(shopGood,index) in shopGoods" :key="index"
				@click="select_item(index)">{{shopGood.name}}</li>
			</ul>
		</div>
		<div class="foods_wrap">
		<ul class="foodUl" ref="foodUl">
			<li class="sort_item" v-for="(shopGood,index) in shopGoods" :key="index">
        <div class="sort_title">{{shopGood.name}}</div>
				<ul class="foods">
					<li class="food" v-for="(food,index) in shopGood.foods" :key="index">
						<div class="left_wrap">
							<img :src="food.image">
						</div>
						<div class="right_wrap">
							<div class="first_row_wrap">
									<div class="food_name">{{food.name}}</div>
									<div class="food_type">{{food.description}}</div>
									<div class="food_rating">月售{{food.sellCount}}份 &nbsp;&nbsp;好评率{{food.rating}}%</div>
							</div>
							<div class="second_row_wrap">
								<span>￥{{food.price}}</span>
							</div>
							<cartControl class="cartControl" :food="food"></cartControl>
						</div>
					</li>
				</ul>
			</li>
		</ul>
		</div>
		<shopCart></shopCart>	
	</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import cartControl from'../../../components/CartControl/CartControl.vue'
import shopCart from'../../../components/shopCart/shopCart.vue'
export default {
	components: {
		cartControl,
		shopCart
	},
	props: {},
	data() {
		return {
		scrollY:0,
		tops:[],
		};
	},
	created() {},
	mounted() {
		this.$store.dispatch('getShopGoods')
		
	},
	methods: {
		select_item (index) {
			const y = this.tops[index]
			this.scrollY = y
			this.foodscroll.scrollTo(0,-y)
		},
//初始化tops
		_initTops () {
			const tops = []
					let top = 0
					tops.push(top)
			const lis = this.$refs.foodUl.querySelectorAll('.sort_item')
				Array.prototype.slice.call(lis).forEach(li => {
						top += li.clientHeight
						tops.push(top)
				})
					this.tops = tops
					
		},
//滑动实时计算scrollY
		_initscrollY () {
			new BScroll('.menu_wrap',{
					click:true,
					bounce:false
				})
				this.foodscroll = new BScroll('.foods_wrap',{
					click:true,
					probeType:3,
					bounce:false
				})
				this.foodscroll.on('scroll',({x,y})=>{
					this.scrollY = Math.abs(y)
					// console.log(this.scrollY)
				})
		}
	},
	computed: {
		...mapState(['shopGoods']),
		current_index () {
			const {scrollY,tops} = this
			const index = tops.findIndex((top,index) => {
				return scrollY >= top && scrollY < tops[index + 1]
			})
			return index
		}
	},
	watch:{
		shopGoods (value) {
			this.$nextTick(()=>{
				this._initscrollY()
				this._initTops()
		})
		}
	}
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/styles/mixins.styl'
  .goods_wrap
    position absolute
    top 2.03rem
    left 0
    right 0
    bottom .50rem
    display flex
    background-color white
    overflow hidden
    .menu_wrap
      flex 0 0 .8rem
      .menu_list
        width 100%
        .menu_item:nth-child(1)
          border none
        .menu_item
          box-sizing border-box
          border-top 1px solid $deepborder
          text-align center
          line-height .61rem
          font-size .14rem
          width 100%
          height .58rem
          background-color #f4f4f4
          &.on
            background-color white
            border-color white
    .foods_wrap
      flex 1
      overflow hidden
      .sort_title
        line-height .31rem
        box-sizing border-box
        height .28rem
        border-left 2px solid #d9dde1
        padding-left .15rem
        font-size .13rem
        background-color #f4f4f4
      .food
        display flex
        box-sizing border-box
        height 1.2rem
        padding .18rem
        background-color white
        border-top 1px solid #f2f3f3
        position relative
        .left_wrap
          flex 0 0 .6rem
          height 100%
          > img
            width 100%
            height .6rem
        .right_wrap
          overflow hidden
          display flex
          flex-direction column
          margin-left .1rem
          flex 1
          .first_row_wrap
            height .6rem
            display flex
            flex-direction column
            justify-content space-around
            .food_name
              height .2rem
              font-size .15rem
              line-height .23rem
            .food_type
              height .2rem
              font-size .13rem
              line-height .27rem
              color #b1b5ba
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .food_rating
              height .2rem
              line-height .28rem
              font-size .13rem
              color #b1b5ba
          .second_row_wrap
            flex 1
            display flex
            align-items flex-end
            >span
              color #f56767
              font-size .16rem
          .cartControl
            position absolute
            bottom .08rem
            right .25rem
 
</style>
