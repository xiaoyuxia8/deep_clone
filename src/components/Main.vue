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
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'yyl-npm-practice',
    components: {},
    props: [],
    data() {
      return {
      }
    },

    created() {},

    mounted() {},

    computed: {},

    watch: {},

    methods: {
   
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