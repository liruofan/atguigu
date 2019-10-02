<template>
  <section class="login">
    <div class="login_header">
       <span class="icon_wrap" @click="$router.back()">
         <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
    <div class="title">硅谷外卖</div>
    <div class="login_method">
      <span class="message_login" :class="{on:!login_type}" @click="toggle(false)">短信登录</span>
      <span class="password_login" :class="{on:login_type}" @click="toggle(true)">密码登录</span>
    </div>
   <form @submit.prevent="login">
    <div class="login_content">
     
      <div class="pwd_login_content" v-if="login_type">
        <div  class="input_wrap">
          <input class="input" type="text" placeholder="手机/邮箱/用户名" v-model="name">
				</div>
				<div class="input_wrap" v-if="!value">
          <input class="input" type="password" placeholder="密码" maxlength="8" v-model="pwd"> 
					<el-switch class="switch" v-model="value" active-color="#02a774" inactive-color="#dddddd"></el-switch>
				</div>
        <div class="input_wrap" v-else>
           <input class="input" type="text" placeholder="密码" maxlength="8" v-model="pwd">
					 <el-switch class="switch" v-model="value" active-color="#02a774" inactive-color="#dddddd"></el-switch>
				 </div>
				 <div class="input_wrap">
           <input class="input" type="text" placeholder="验证码" v-model="captcha">
					 <img ref="captchaImg" class="pic_captcha" src="http://localhost:4000/captcha" alt="captcha" @click="change_captcha">
				 </div>
      </div>
      <div class="mes_login_content" v-if="!login_type">
				<div  class="input_wrap">
          <input class="input" type="tel" placeholder="手机号" v-model="phone" maxlength="11">
					<button class="get_check" :class="{check:right_phone}" @click.prevent="getcode" :disabled="!right_phone && computeTime">{{computeTime===0 ? '获取验证码' : `已发送(${computeTime}s)`}}</button>
				</div>	
        <div class="input_wrap">
          <input class="input" type="number" placeholder="验证码" v-model="code" oninput="if(value.length>8){value=value.slice(0,8)}">
				</div>
        <p class="decrible">温馨提示: 未注册硅谷外卖账号的手机号，登录时将自动注册，且代表已同意<span>《用户服务协议》</span></p>
      </div>
     </div>
    <div class="login_button">
			 <button class="btn">登录</button>
		</div>
    <p class="about_user">关于我们</p>
	</form>
  </section>
</template>

<script>
import Vue from 'vue'
import {Switch} from 'element-ui'
import {MessageBox,Toast} from 'mint-ui'
import {reqSendCode,reqPwdLogin,reqSmsLogin} from '../../api/index.js'
Vue.use(Switch)
export default {
  components: {
		'el-switch':Switch,
	
		
	},
  props: {},
  data() {
  return {
  login_type:true,
	phone:'',
	code:'',
	computeTime:0,
	value:false,
	name:'',
	pwd:'',
	captcha:''
	};
  },
  created() {},
  mounted() {
	},
  methods:{
   toggle (type) {
      this.login_type = type
    },
   async getcode () {
    //判断是否正在计时
      if (!this.computeTime) {
          this.computeTime = 30
          this.intervalId = setInterval(() => {
							this.computeTime --
       if (!this.computeTime) {
           clearInterval(this.intervalId)
         } 
        },1000)
		 }
		 
     const result = await reqSendCode(this.phone)
       if (result.code === 1) {
					MessageBox.alert(result.msg)
					if (this.computeTime) {
						this.computeTime = 0
	          clearInterval(this.intervalId)
					}
			 }
},
  async login () {
		  let result
	  if (!this.login_type) {//前台短信验证
       const {phone,code,right_phone} = this   
       if (!right_phone) {
				MessageBox.alert('手机号输入有误');
				return
		}else if (!/^\d{6}$/.test(code)) {
				MessageBox.alert('验证码必须是六位数字');
				return
		}
				 result = await reqSmsLogin (phone,code)
				  
		  } else {//前台密码登录验证
			const {name,pwd,captcha} = this  
			 if (!name) {
				MessageBox.alert('用户名不能为空');
				return
		}else if (!pwd) {
				MessageBox.alert('密码不能为空');
				return
     }else if (!captcha) {
				MessageBox.alert('验证码不能为空');
				return
		 }
      	 result = await reqPwdLogin ({name,pwd,captcha})
				  
	}
	     
			if (result.code===0) {
						Toast({
							message:'登录成功',
							duration: 1000
						})
						if (this.computeTime) {
              this.computeTime = 0
	          clearInterval(this.intervalId)
						}
						let user = result.data
						this.$store.dispatch('recordUserInfo',user)
							this.$router.replace('./profile')
					}else{
						const errorMsg = result.msg
						MessageBox.alert(errorMsg);
						this.change_captcha()
					}
	},
	change_captcha () {
    this.$refs.captchaImg.src='http://localhost:4000/captcha?time='+Date.now()
	}
	},
  computed:{
   right_phone () {
     return /^1\d{10}$/.test(this.phone)
   }
   }


}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
// .animate-enter-active,.animate-leave-active
//   transition all .3s
// .animate-enter,.animate-leave-to
//   transform translateY(100%)
.login
  text-align center
  .login_header
    height .48rem
    .icon_wrap
      height 100%
      display block
      width .32rem
      line-height .4rem
      text-align center
      .icon-jiantou2
        color #a4a4a4
        font-size .2rem
  .title
    font-weight 700
    line-height .85rem
    font-size .4rem
    color $green
    text-align center
  .login_method
    display flex
    font-size .14rem
    line-height .26rem
    justify-content center
    .message_login
      margin-right .21rem
      &.on
        font-weight 700
        border-bottom 2px solid $green
        color $green
    .password_login
      margin-left .21rem
      &.on
        font-weight 700
        border-bottom 2px solid $green
        color $green
  .login_content
    font-size .14rem
    margin .08rem .4rem 0
    .mes_login_content
      display flex
      flex-direction column
      justify-content space-between
      .input_wrap
        position relative
        font-size .14rem
        margin-bottom .16rem
        height .48rem
        .input
          width 100%
          height 100%
          padding-top .03rem
          padding-left 10px
          box-sizing border-box
          border 1px solid #ddd
          border-radius 4px
          &:focus
            border-color #02a774
      .get_check
        background-color white
        color #cfcccc
        position absolute
        top 50%
        transform translateY(-50%)
        right .13rem
        font-size .14rem
        &.check
          color black
      .decrible
        margin-bottom .24rem
        line-height .2rem
        color #999999
        > span
          color $green
    .pwd_login_content
      display flex
      flex-direction column
      justify-content space-between
      .input_wrap
        height .48rem
        font-size .14rem
        margin-bottom .16rem
        position gin-bottom .16rem
        position relative
        .pic_captcha
          position absolute
          top 50%
          right 0
          transform translateY(-50%)
        .input
          width 100%
          height 100%
          padding-left 10px
          padding-top .03rem
          box-sizing border-box
          border 1px solid #ddd
          border-radius 4px
          &:focus
            border-color #02a774
        .switch
          position absolute
          top 50%
          transform translateY(-50%)
          right .05rem
  .login_button
    margin 0 .4rem 0
    height .42rem
    // line-height .42rem
    .btn
      text-align center 
      font-size .15rem
      display block
      color white
      border-radius .05rem
      background #4cd96f
      width 100%
      height 100%
  .about_user
    line-height .5rem
    color #999999
    font-size .11rem
</style>