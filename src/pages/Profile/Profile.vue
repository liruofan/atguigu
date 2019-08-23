<template>
  <div class="profile">
    <NavHeader title="我的"/>
    <div class="user_header" @click="userInfo._id ? '' : $router.push('/login')">
      <div class="portrite_wrap">
        <i class="iconfont icon-person"></i>
      </div>
      <div class="header_center">
        <div class="login_text" v-if="userInfo.name">{{userInfo.name || '登录/注册'}}</div>
				<div class="login_text" v-if="!userInfo.name">{{userInfo._id || '登录/注册'}}</div>
        <div class="phone_text">
         <div class="icon_wrap"><i class="iconfont icon-shouji"></i></div><span>{{userInfo.phone || '暂无绑定手机号'}}</span>
        </div>
      </div>
      <div class="header_right">
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div>
    <div class="user_footer">
      <div class="balance_text">
        <div class="balance_num"><span>0.00</span>元</div>
        <div class="balance_dec">我的余额</div>
      </div>
      <div class="discount_text">
        <div class="discount_num"><span>0</span>个</div>
        <div class="discount_dec">我的优惠</div>
      </div>
      <div class="score_text">
        <div class="score_num"><span>0</span>分</div>
        <div class="score_dec">我的积分</div>
      </div>
    </div>
    <div class="blank"></div>
    <ul class="user_list">
       <li><i class="iconfont icon-order-s"></i><span>我的订单</span><i class="iconfont icon-jiantou1"></i></li>
       <li><i class="iconfont icon-jifen"></i><span>积分商城</span><i class="iconfont icon-jiantou1"></i></li>
       <li><i class="iconfont icon-vip"></i><span>硅谷外卖会员卡</span><i class="iconfont icon-jiantou1"></i></li>
       <li><i class="iconfont icon-fuwu"></i><span>服务中心</span><i class="iconfont icon-jiantou1"></i></li>
		</ul>
	  <div class="close_login" v-if="userInfo._id" @click="close_login">退出登录</div>
  </div>
</template>

<script>
import NavHeader from '../../components/NavHeader/NavHeader.vue'
import {mapState} from 'vuex'
import { MessageBox,Toast} from 'mint-ui'
export default {
  components: {
	NavHeader
  },
  props: {},
  data() {
	return {

	};
  },
  created() {},
  mounted() {},
  methods: {
   close_login () {
		 MessageBox.confirm('您确定要退出登录吗?').then(() => {
			  Toast({
					message:'退出登录成功',
					duration: 1000
				})
			 this.$store.dispatch('getLogout')
						
   },() => {})
	}
  },
  computed: {
  ...mapState(['userInfo'])
	},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
  .user_header
    height 1rem
    background-color $green
    // border-top .01rem solid white
    display flex
    .portrite_wrap
      width .65rem
      height .65rem
      border-radius 50%
      margin .18rem .15rem .15rem .1rem
      background-color #e6e6e6
      overflow hidden
      .icon-person
        display block
        color #a1a1a1
        font-size .66rem
    .header_center
      position relative
      flex 1
      height 100%
      color white
      overflow hidden
      white-space nowrap
      text-overflow ellipsis	
      .login_text
        font-weight 700
        line-height .7rem
        font-size .19rem 
      .phone_text
        line-height 0
        font-size .13rem
        .icon_wrap
          width .14rem
          height .04rem
          display inline-block
          .icon-shouji
            margin-left -.16rem
            position absolute
            left 0
            font-size .3rem 
    .header_right
      width .5rem
      line-height .94rem
      height 100%  
      text-align center
      .icon-jiantou1
        font-size .15rem
        color white  
  .user_footer
    display flex
    font-size .15rem
    height .9rem
    text-align center
    .balance_text
      flex 1
      .balance_num
        line-height .63rem 
        > span
          font-weight 600
          font-size .35rem
          color #f90
      .balance_dec
        line-height 0
        color #666  
    .discount_text
      border-left 1px solid $deepborder 
      border-right 1px solid $deepborder
      flex 1
      .discount_num
        line-height .63rem
        > span
          font-weight 600
          font-size .35rem
          color #ff5f3e
      .discount_dec
        line-height 0
        color #666  
    .score_text
      flex 1
      .score_num 
        line-height .63rem
        > span
          font-weight 600
          font-size .35rem
          color #6ac20b
      .score_dec
        line-height 0
        color #666  
  .blank
    background-color $border
    height .12rem
  .user_list > li
    position relative
    height .6rem
    line-height .65rem  
    border-bottom 1px solid $deepborder
    font-size .18rem
    .iconfont
      font-size .35rem
      vertical-align middle
    .icon-order-s
      color #02a774
    .icon-jifen
      color #ff5f3e
    .icon-vip
      color #f90
    .icon-fuwu
      color #02a774
    .icon-jiantou1
      position absolute
      right .1rem
      color #bbb
      font-weight 700
      font-size .12rem
  .close_login
    height .4rem
    width 70%
    background #ff5f3e
    color white 
    text-align center
    line-height .42rem 
    font-size .15rem
    border-radius .04rem
    margin .15rem auto
</style>
