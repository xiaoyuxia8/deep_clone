import axios from 'axios';
// import devConfig from '../../../config/app.dev.json'
// import testConfig from '../../../config/app.aliyun-test.json'
// import prodConfig from '../../../config/app.aliyun-prod.json'
// let api 
// if(process.env.VUE_APP_ENV === 'development'){
//   api = devConfig
// }
// if(process.env.VUE_APP_ENV === 'test'){
//   api = testConfig
// }
// if(process.env.VUE_APP_ENV === 'production'){
//   api = prodConfig
// }
// 登录
import appConfig from '../../../config/index'
console.log(appConfig,55555);
export const loginApi = (data) => {
  return axios.request({
    url:appConfig.gateUrl + "/apipc/login/login",
    data,
    method: 'post',
  })
}