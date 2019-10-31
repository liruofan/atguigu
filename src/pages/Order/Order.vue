<template>
  <div class="order">
		<NavHeader title="订单列表"/>
		<star :size="24" :starLength="5" :score="2"></star><br>
		<star :size="24" :starLength="7" :score="4.5"></star><br>
		<star :size="36" :starLength="5" :score="3"></star><br>
		<star :size="36" :starLength="7" :score="5.5"></star><br>
		<star :size="48" :starLength="5" :score="4.5"></star><br>
		<star :size="48" :starLength="7" :score="6.5"></star><br>
   </div>
</template>

<script>
import NavHeader from '../../components/NavHeader/NavHeader.vue'
import star from '../../components/star/star.vue'
export default {
  components: {
	NavHeader,
	star
	},
  props: {},
  data() {
	return {

	};
  },
  created() {},
  mounted() {},
  methods: {

  },
  computed: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
