import Layout from '@/layout' //公共部分
const homeRouters = {
    path: '/home',
    component: Layout,
    redirect: '/home/home-index',
    children: [{
        path: 'home-index',
        component: () =>
            import ('@/views/home/index')
    }]

}
export default homeRouters