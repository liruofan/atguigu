<template>
  <div class="search">
     <NavHeader title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <ul class="search_ul" v-if="!noSearchShops">
     <router-link :to="{path:'/shop',query:{id:item.id}}" class="search_item" tag="li" v-for="item in searchShops" :key="item.id">
			 <img class="port_pic" :src="imgBaseUrl + item.image_path">
			<div class="shop_name">{{item.name}}</div>
			 <div class="month_sale">月销 {{item.month_sales||item.recent_order_num}} 单</div>
			 <div class="delivery_price">{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</div>
			</router-link>
    </ul>
		<div class="search_none" v-else>很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import NavHeader from '../../components/NavHeader/NavHeader.vue'
import {mapState} from 'vuex'
export default {
  components: {
	NavHeader
  },
  props: {},
  data() {
	return {
		keyword:'',
		imgBaseUrl: 'http://cangdu.org:8001/img/',
		noSearchShops:false
	};
  },
  created() {},
  mounted() {
		console.log(this.searchShops)
	},
  methods: {
   search () {
		 const keyword = this.keyword.trim()
    if (keyword) {
			this.noSearchShops = false
			this.$store.dispatch('searchShops',keyword)
			
		}
	 }
  },
  computed: {
		...mapState(['searchShops'])
	},
	watch: {
		searchShops (value) {
			if(!value.length) { // 没有数据
          this.noSearchShops = true
        }
		}
	} 
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
  .search
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    overflow hidden
    background-color #f2f2f2
  .search_form
    display flex
    align-items center
    background-color white
    height .55rem
    padding 0 .08rem 0
    .search_input
      flex 1
      overflow hidden
      background-color #f2f2f2 
      height .37rem 
      border-radius .03rem
      font-size .14rem
      box-sizing border-box
      -moz-box-sizing border-box
      -ms--moz-box-sizing border-box
      padding-left .08rem
      outline none
    input::-webkit-input-placeholder
      transform translateY(.01rem)
    input::-webkit-search-cancel-button
      display: none
    .search_submit
      height .37rem
      flex 0 0 .65rem
      width .65rem
      background-color $green
      margin-left .1rem
      text-align center
      line-height .39rem
      font-size .16rem
      color white
      border-radius .03rem
      font-weight 700
  .search_item
    width 100%
    height .7rem
    box-sizing border-box
    padding .1rem
    background-color white
    font-size .12rem
    .port_pic
      width .5rem
      height .5rem
      float left
      margin-right .1rem
    .shop_name
      line-height .15rem
    .month_sale
      line-height .22rem
    .delivery_price
      line-height .14rem
  .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      font-size .16rem
</style>
