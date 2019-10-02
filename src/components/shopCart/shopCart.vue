<template>
<div>
	<div class="cart">
		<div class="cart_con" @click="toggleShow">
			<div class="icon_wrap">
				<div class="num" v-show="totalCount">{{totalCount}}</div>
				<div class="icon-background" :class="{on:totalCount}">
					<i class="iconfont icon-shopping_cart" :class="{on:totalCount}"></i>
				</div>
			</div>
			<div class="cart_text">
				<div class="price">￥{{totalPrice}}</div>
				<div class="delivery_price">另需配送费 ￥{{shopInfo.deliveryPrice}}元</div>
			</div>
			<div class="cart_con_right" :class="{on:totalPrice>=shopInfo.minPrice}">{{resultText}}</div>
		</div>

    <div class="ball_container">
        <div v-for="(ball,index) in balls" :key="index">
          <transition
            @before-enter="beforeDrop"
            @enter="dropping"
            @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
		
			<div class="shopcart-list" v-show="ShowList">
          <div class="list-header">
            <span class="title">购物车</span>
            <div class="empty" @click="clearCart">清空</div>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food,index) in cartFoods" :key="index">
                <div class="name">{{food.name}}</div>
                <div class="box">
									<div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <cartControl :food="food"></cartControl>
                </div>
								</div>
              </li>
						</ul>
          </div>
        </div>
      	<!-- <cartControl></cartControl> -->
	</div>
	<div class="list-mask" v-show="isShow" @click="toggleShow"></div>
	</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import cartControl from'../CartControl/CartControl.vue'
import BScroll from 'better-scroll'
import {MessageBox} from 'mint-ui'

 const BALL_LENGTH = 10
 const innerClsHook = 'inner-hook'

 function createBalls () {
      let balls = []
      for(let i=0; i<BALL_LENGTH; i++){
        balls.push({show:false})
      }
		return balls
    }
export default {
	components: {
		cartControl
	},
	props: {},
	data() {
		return {
			isShow:false,
			balls:createBalls()
		};
	},
	created() {
			this.dropBalls = []
	},
	mounted() {},
	methods: {
		drop (el) {
			 for (let i = 0; i < this.balls.length; i++) {
            const ball = this.balls[i]
            if(!ball.show){
								ball.show = true
								ball.el = el
								this.dropBalls.push(ball)
								return
						}
			 }
		},
		beforeDrop (el) {
          const ball = this.dropBalls[this.dropBalls.length - 1]
          const rect = ball.el.getBoundingClientRect()
          const x = rect.left - 35
          const y = -(window.innerHeight - rect.top - 25)
          el.style.display = ''
          el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`
          const inner = el.getElementsByClassName(innerClsHook)[0]
          inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px,0,0)`
        },
        dropping (el,done) {
          this._reflow = document.body.offsetHeight
           el.style.transform = el.style.webkitTransform = `translate3d(0,0,0)`
          const inner = el.getElementsByClassName(innerClsHook)[0]
          inner.style.transform = inner.style.webkitTransform = `translate3d(0,0,0)`
          el.addEventListener('transitionend',done)
        },
        afterDrop (el) {
          const ball = this.dropBalls.shift()
          if (ball) {
            ball.show = false
            el.style.display = 'none'
          }
        },
		toggleShow () {
			if (this.totalCount > 0) {
				this.isShow = !this.isShow
			}
			
			},
		clearCart () {
			MessageBox.confirm('确定要清空购物车吗?').then(() => {
				this.$store.dispatch('clearCart')
},() => {})
			
		}
	},
	computed: {
		...mapState(['shopGoods','shopInfo','cartFoods']),
		...mapGetters(['totalCount','totalPrice']),
		resultText () {
			const {totalPrice} = this
			const {minPrice} = this.shopInfo
			if (totalPrice === 0) {
				return `￥${minPrice}元起送`
			}else if (totalPrice < minPrice) {
				return `还差${minPrice - totalPrice}元起送`
			}else {
				return '结算'
			}
		},
		ShowList () {
			if (this.totalCount === 0) {
				this.isShow = false
				return false
		}

		if (this.isShow) {
			this.$nextTick(() => {
				if (!this.myScroll) {
				this.myScroll = new BScroll('.list-content',{
						click:true,
					})
				}else{
				this.myScroll.refresh()
			}
				})
			}
			return this.isShow
		}
	
	},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles/mixins.styl'
  .cart
    position fixed
    left 0
    bottom 0
    width 100%
    height .50rem
    background-color #141d27
    z-index 100
    .cart_con
      width 100%
      height 100%
      display flex
      z-index 200
      .icon_wrap
        position relative
        display flex
        justify-content center
        align-items center
        margin-left .12rem
        margin-right .04rem
        background-color #141d27
        flex 0 0 .58rem
        height .58rem
        width .58rem
        border-radius 50%
        margin-top -.1rem
        .num
          position absolute
          top 0
          right 0
          width .24rem
          height .16rem
          line-height .18rem
          text-align center
          border-radius .16rem
          font-size .13rem
          font-weight 700
          color #ffffff
          background rgb(240, 20, 20)
          box-shadow 0 .04rem .08rem 0 rgba(0, 0, 0, 0.4)
        .icon-background
          display flex
          justify-content center
          align-items center
          background-color #2b343c
          height 80%
          width 80%
          border-radius 50%
          &.on
            background-color $green
          .icon-shopping_cart
            font-size .24rem
            line-height .54rem
            color #80858a
            &.on
              color white
      .cart_text
        height 100%
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items flex-start
        overflow hidden
        .price
          width 100%
          color white
          font-size .18rem
          margin .02rem  0 .06rem
        .delivery_price
          font-size .13rem
          color #686e74
          width 100%
      .cart_con_right
        flex 0 0 1.04rem
        color white
        width 1.04rem
        height 100%
        line-height .55rem
        text-align center
        background-color #2b333b
        font-size .14rem
        &.on
          background-color $green
    .ball
      position fixed
      left .32rem
      bottom .22rem
      z-index 200
      transition all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
      .inner
        width .18rem
        height .18rem
        border-radius 50%
        background $green
        transition all 0.4s linear
    .shopcart-list
      position absolute
      left 0
      right 0
      bottom .50rem
      width 100%
      z-index -1
      .list-header
        display flex
        justify-content space-between
        align-items center
        box-sizing border-box
        border-bottom 1px solid $deepborder
        width 100%
        height .46rem
        line-height .46rem
        background-color #f3f5f7
        .title
          margin-top .05rem
          font-size .14rem
          margin-left .16rem
        .empty
          margin-right .16rem
          font-size .15rem
          height 80%
          width .45rem
          line-height .4rem
          text-align center
          color #666666
          border 1px solid $deepborder
          border-radius .04rem
      .list-content
        padding-left .18rem
        padding-right .24rem
        max-height 2.17rem
        overflow hidden
        background #fff
        .food:nth-child(1)
          border none
        .food
          display flex
          justify-content space-around
          line-height .55rem
          width 100%
          height .5rem
          border-top 1px solid $deepborder
          .name
            flex 1
            font-size .14rem
            display inline-block
            height 100%
          .box 
            height 100%
            display flex
            flex 0 0 1.3rem
            width 1.3rem
            .price
              line-height .53rem
              flex 1
              text-align center
              color #f56767
              font-size .16rem
              height 100%
              display inline-block
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .cartcontrol-wrapper
              margin-top .02rem
              display flex
              justify-content center
              align-items center
              width .76rem
              flex 0 0 .76rem
 // &.move-enter-active, &.move-leave-active
      //   transition transform .3s
      // &.move-enter, &.move-leave-to
      //   transform translateY(0)
  .list-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 40
    // backdrop-filter blur(.1rem)
    opacity .5
    background #000
</style>
