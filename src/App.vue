<template>
  <div id="app">
    <router-view></router-view>
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'

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
  mounted() {},
  methods: {

  },
  computed: {
    
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
