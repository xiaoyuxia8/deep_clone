<template>
  <div class=''>
      <h1>根页面</h1>
      <router-view></router-view>
     <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabBar/index'
export default {
  components: {TabBar},
  data () {
    return {

    }
  },
  created () {
console.log('这是layout根vue',this.$router);
  },
  mounted () {

  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script>
<style lang='scss' scoped>
</style>