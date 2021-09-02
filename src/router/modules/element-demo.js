import Layout from '@/layout' //公共部分
const homeRouters = {
    path: '/home',
    component: Layout,
    redirect: '/home/home-index',
    children: [{
        path: 'element-demo',
        component: () =>
            import ('@/views/element_demo/index.vue')
    }]

}
export default homeRouters