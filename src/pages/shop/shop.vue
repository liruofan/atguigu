<template>
	<div>
		<shopHeader/>
			<div class="tab_wrap">
				<div class="tab_item">
					<router-link :to="`/shop/goods?id=${$route.query.id}`"  replace class="tab_item_text">点餐</router-link>
				</div>
				<div class="tab_item">
					<router-link :to="`/shop/rating?id=${$route.query.id}`" replace class="tab_item_text">评价</router-link>
				</div>
				<div class="tab_item">
					<router-link :to="`/shop/info?id=${$route.query.id}`" replace class="tab_item_text">商家</router-link>
				</div>
			</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
			
	</div>
</template>

<script>
import shopHeader from '../../components/ShopHeader/ShopHeader.vue'

export default {
	components: {
		shopHeader,
	},
	props: {},
	data() {
		return {
     
		};
	},
	created() {},
	mounted() {
		this.$store.dispatch('getShopInfo')
		
	},
	methods: {

	},
	computed: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/styles//mixins.styl'
  .tab_wrap
    box-sizing border-box
    display flex
    height .4rem
    border-bottom 1px solid #f2f3f3
    .tab_item
      flex 1
      line-height .42rem
      font-size .15rem
      color #7e8c8d
      text-align center
      .tab_item_text
        color #b6bebf
        height 100%
        width .38rem
        display inline-block
        box-sizing border-box
        &.active
          color $green
          border-bottom 2px solid $green 
</style>
