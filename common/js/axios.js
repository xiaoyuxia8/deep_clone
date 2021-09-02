import axios from "axios";
// import router from "../router";
import Vue from 'vue'
// import { messages } from '../assets/js/common'  ===>这里不能使用相对路径
// import { messages } from '@/assets/js/common'
// 本地会自动走vue.config.js里的代理地址，不需要配置baseUrl。否则代理会失效
// if (process.env.VUE_APP_ENV === 'test') {
//   axios.defaults.baseURL = '/agency'
// }
// axios.defaults.baseURL = '/agency'
axios.defaults.timeout = 60000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed'
    // http request 拦截器
axios.interceptors.request.use(
    config => {
        if (window.localStorage.getItem("token")) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = "JWT " + window.localStorage.getItem("token");
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
    console.log(axios.defaults,123);
// http response 拦截器
axios.interceptors.response.use(
    undefined,
    error => {
        //断网处理或者请求超时
        if (!error.response) {
            //请求超时
            if (error.message.includes("timeout")) {
                console.log("超时了");
                // messages("error", "请求超时，请检查互联网连接");
            } else {
                //断网，可以展示断网组件
                console.log("断网了");
                // messages("error", "请检查网络是否已连接");
            }
            return;
        }
        let res = error.response;
        switch (res.status) {
            case 401:
                // 返回 401 清除token信息并跳转到登录页面
                // store.commit(types.LOGOUT);
                // messages("error", "登录签证过期,请您重新登录");
                setTimeout(() => {
                        // router.replace({
                        //     path: 'login',
                        // })
                    }, 3000)
                    // console.log('未登录 或者token过期');
                break;
            case 403:
                // messages("error", "您没有执行该操作的权限,请联系管理员添加权限");
                break;
            case 500:
                // messages("error", "服务器错误", 3000);
                break;
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    });
Vue.prototype.$http = axios;