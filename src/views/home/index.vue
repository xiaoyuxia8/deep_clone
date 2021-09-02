<template>
  <div class="">
    <h1>这是首页1</h1>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-button round block type="info" @click="getData">获取商品任务列表</van-button>
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
import {getShopTaskList} from '../../../common/js/request/apiMyHome.js'
  export default {
    components: {},
    data() {
      return {
        value: "",
      };
    },
    created() {
      this.$message('这是一条消息提示');
      console.log(this.$xyx_node());
      console.log(this.$xyx_deep_clone());
    },
    mounted() {
            // this.$message('success',5000)
      console.log(this,222);
      console.log("这是首页", this);
    },
    computed: {},
    watch: {},
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
      // 获取商品列表
      getData(){
        let fileds = {startTime:"",endTime:"",state:"",taskName:"",pageNo:1,pageSize:10,token:'pc_aa66411369ea4e6d9d3ca2ce492d9c03'}
        getShopTaskList(fileds).then(res => {
          console.log(res);
        })
      }
    },
  };
</script>
<style lang='scss' scoped>
</style>