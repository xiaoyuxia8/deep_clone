<!--
 * @Author: your name
 * @Date: 2021-08-12 11:25:10
 * @LastEditTime: 2021-08-13 11:14:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_vant\src\views\element_demo\index.vue
-->
<template>
  <div class="element-contain">
      <el-input v-model="myVal" placeholder="这是一个组件cjk"></el-input>
      <el-button type="primary" style="margin-top:20px" @click="submit">xyx-cjk</el-button>
  </div>
</template>

<script>
  export default {
    name: 'xyx-form',
    components: {},
    props: [],
    data() {
      return {
        myVal:''
      }
    },

    created() {},

    mounted() {},

    computed: {},

    watch: {},

    methods: {
      submit(){
        if(!this.myVal){
          this.$message.warning('留下点什么吧!')
        }else{
          this.$message.success('提交成功!')
        }
      }
    },
  };
</script>
<style lang='scss' scoped>
.element-contain {
  margin: 0 30px;
}
.el-table {
  margin-top: 30px;
}
.el-tooltip {
  margin-top: 20px;
}
</style>