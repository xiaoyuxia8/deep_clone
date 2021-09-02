import Vue from 'vue'
import prodConfig from '../../config/app.aliyun-prod.json'
import testConfig from '../../config/app.aliyun-test.json'
if(process.env.VUE_APP_ENV === 'development'){
  Object.keys(prodConfig).forEach(k => Vue.prototype['$'+ k] = prodConfig[k]) 
}
if(process.env.VUE_APP_ENV === 'production'){
  Object.keys(testConfig).forEach(k => Vue.prototype['$'+ k] = testConfig[k]) 
}
  