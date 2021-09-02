

let devConfig = require('./config/app.dev.json')
let hctestConfig = require('./config/app.hctest.json')
let hczscConfig = require('./config/app.hczsc.json')
let testConfig = require('./config/app.aliyun-test.json')
let prodConfig = require('./config/app.aliyun-prod.json')
let appConfig = {}
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
// let proxyTable = {}
// for (let key in appConfig) {
//   // proxyTable[api] = {}
//   proxyTable[`/${key}`] = {
//       // 传递给http(s)请求的对象
//       target: appConfig[key],
//       // 是否将主机头的源更改为目标URL
//       changeOrigin: true,
//       // 是否代理websocket
//       ws: true,
//       // 是否验证SSL证书
//       secure: false,
//       // 重写set-cookie标头的域，删除域名
//       cookieDomainRewrite: '',
//       // 重写目标的url路径
//       pathRewrite: {
//           [`^/${key}`]: ''
//       }
//     }
// }
// console.log(proxyTable);
// let path = require('path')
// const NODE_ENV = process.env.NODE_ENV
module.exports = {
    // 配置跨域代理
    devServer: {
        // Paths
        host: 'localhost', // cmd--> ipconfig--->拿到IPv4地址 192.168.1.6  可以在同一个局域网访问  localhost为默认
        port:8080,
        // https: false,// https协议才设置
        open: true,
        // proxy:proxyTable   //多个服务的配置
      // 下面是单个服务的配置
      // 本地环境需要处理跨域时  在apiLogin.js 里需要将 /shopSaleTask 前面的变量域名 appConfig.crmreport 去掉  使用target
        proxy: {
          '/shopSaleTask': { // 匹配所有以 '/'开头的请求路径
              target: 'https://cjk-crm-service.g1.cunjk.com', // 代理目标的基础路径
              secure: true,// 如果是https接口，需要配置这个参数为true
              changeOrigin: true, // 支持跨域
              pathRewrite: {
                // 路径重写
                '^/shopSaleTask': '' // 这个意思就是以路径 / 开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
                //'^/api': '/api'   // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
                //'^/api': '/' 这种接口配置出来     http://XX.XX.XX.XX:8083/login
              }
          }
      },
    },
    publicPath: './',
    // path:path.resolve(__dirname,'./dist'),
    // entry: NODE_ENV == 'development' ? './src/main.js' : './index.js',
    // output:{
    //   path:path.resolve(__dirname,'./dist'),
    //   publicPath:'/dist/',
    //   filename:'xyx-form.js',
    //   library:'xyx-form',//使用require时的模块名
    //   libraryTarget:'umd', //指定输出格式
    //   umNamedDefine:true //  umd 构建中的模块命名  否则使用匿名 define
    // },
    configureWebpack: (config) => {
      if (process.env.VUE_APP_ENV === 'production') {
        config.entry = './index.js'
      } else {
        config.entry = './src/main.js'
      }
      // config.output = {
      //   filename:'xyx-form.js',
      //   library:'xyx-form',//使用require时的模块名
      //   libraryTarget:'umd', //指定输出格式
      //   umNamedDefine:true //  umd 构建中的模块命名  否则使用匿名 define
      // }
    }
}