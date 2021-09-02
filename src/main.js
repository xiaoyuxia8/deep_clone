import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
import { Toast } from 'vant';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../common/css/element-scss/element-variables.scss'
import xyx_node from 'xyx_node'
import xyx_deep_clone from'../node_modules/xyx_deep_clone/app.js'
// 引入axios请求和配置文件
import '../common/js/axios'
import config from '../common/js/request'
Vue.prototype.$http = axios
Vue.prototype.$config = config
Vue.use(Vant);
Vue.use(Toast);
Vue.use(Element)
Vue.prototype.$xyx_node = xyx_node
Vue.prototype.$xyx_deep_clone = xyx_deep_clone
Vue.prototype.$toast = Toast
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')