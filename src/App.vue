<template>
  <div id="app">
    <router-view />
    123
    <Main :propData='initData'/>
  </div>
</template>

<script>
import Main from './components/Main'
export default {
  name: "App",
  components: {Main},
  data() {
    return {};
  },
  created(){
    console.log(this.$advsearch);
    console.log(this.$router);
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
