<template>
  <div id="app">
    <router-view></router-view>
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
  },
  methods: {
     ...mapActions(['getAdress'])
  },
  computed: {
     
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
