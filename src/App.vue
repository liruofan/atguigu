<template>
  <div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<FootGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
import {mapActions} from 'vuex'

export default {
  components: {
    FootGuide
    },
  props: {},
  data() {
    return {

    };
  },
  created() {},
  mounted() {
    this.getAdress()
    this.getShopList()
		this.getUserInfo()
  },
  methods: {
     ...mapActions(['getAdress','getShopList','getUserInfo'])
  },
  computed: {
     
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
