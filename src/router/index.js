import Vue from 'vue'
import Router from 'vue-router'
import homeRouters from './modules/home.js'
import elementDemoRouters from './modules/element-demo.js'
Vue.use(Router)
const merge = function() {
    return Array.prototype.concat.apply([], arguments);
};
const baseRouters = [{
        path: '/redirect',
        component: () =>
            import ('@/views/login/index')

    },
    {
        path: '/',
        component: () =>
            import ('@/views/login/index')

    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/index')
    }
]
const myRouters = merge(baseRouters, homeRouters,elementDemoRouters)
const router = new Router({
    //mode: "history", // 使用了 history 打包时无法用dist本地打开, 注释掉就可以打开了
    routes: myRouters
});
export default router