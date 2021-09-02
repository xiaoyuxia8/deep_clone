<template>
  <div class=''>
      <iframe :src="urlInfo.path" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  components: {},
  props:{
      urlInfo:{
          type:Object,
          default:function(){
            return {}
          },
          require:true
      }
  },
  data () {
    return {
      msg:'https://baidu.com'
    }
  },
  created () {
    console.log(this.urlInfo);
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