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
    element-ui
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      size="medium"
    >
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">一级按钮</el-button>
        <el-button type="primary" disabled @click="onSubmit"
          >一级按钮禁用</el-button
        >
        <el-button type="primary" plain @click="onSubmit">二级按钮</el-button>
        <el-button type="primary" plain disabled @click="onSubmit"
          >二级禁用</el-button
        >
      </el-form-item>
    </el-form>
    <el-button type="primary" size="small" @click="sure('success')"
      >success</el-button
    >
    <el-button type="primary" size="small" @click="sure('info')"
      >info</el-button
    >
    <el-button type="primary" size="small" @click="sure('warning')"
      >warning</el-button
    >
    <el-button type="primary" size="small" @click="sure('error')"
      >error</el-button
    >
    <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费">
    </el-switch>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-table :data="tableData" style="width: 100%" max-height="300">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="600">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    props: [],
    data() {
      return {
        input: "",
        formInline: {
          user: "",
          region: "",
        },
        value1: true,
        radio: "1",
           tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      };
    },

    created() {},

    mounted() {},

    computed: {},

    watch: {},

    methods: {
      sure(type) {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: type,
          duration: 5000000,
        });
      },
      onSubmit() {
        console.log("submit!");
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
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