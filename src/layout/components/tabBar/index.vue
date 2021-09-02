<template>
  <div class="">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  created() {
    console.log(this.list);
    console.log(this.$router);
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>