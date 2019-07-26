<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>  
    <FootGuide/>
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
    this.getFoodCategory()
    this.getShopList()
  },
  methods: {
     ...mapActions(['getAdress','getFoodCategory','getShopList'])
  },
  computed: {
     
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
