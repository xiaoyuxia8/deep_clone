import devConfig from './app.dev.json'
import hctestConfig from './app.hctest.json'
import hczscConfig from './app.hczsc.json'
import testConfig from './app.aliyun-test.json'
import prodConfig from './app.aliyun-prod.json'
let appConfig
// 开发环境
if(process.env.VUE_APP_ENV === 'development'){
  appConfig = devConfig
}
// g1环境
if(process.env.VUE_APP_ENV === 'hctest'){
  appConfig = hctestConfig
}
// g2环境
if(process.env.VUE_APP_ENV === 'hczsc'){
  appConfig = hczscConfig
}
// aliyun-test环境
if(process.env.VUE_APP_ENV === 'test'){
  appConfig = testConfig
}
// 准生产环境
if(process.env.VUE_APP_ENV === 'production'){
  appConfig = prodConfig
}
export default appConfig