import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/views/layout/Layout.vue'),
        redirect: '/index',

        children: [{
            path: '/index',
            name: 'Index',
            component: () => import('@/views/index/Index.vue'),
            meta: {
                title: '首页'
            }
        }, {
            path: '/companyDetail',
            name: 'companyDetail',
            component: () => import('@/views/company/companyDetail.vue'),
            meta: {
                title: '公司详情'
            }
        },

        ]
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/Index.vue'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/sort',
        name: 'Sort',
        component: () => import('@/views/sort/Sort.vue'),
        meta: {
            title: '类别'
        }
    }, {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/mine/Mine.vue'),
        meta: {
            title: '我的'
        }
    },{
        path: '/usertellist',
        name: 'usertellist',
        component: () => import('@/views/mine/usertelList.vue'),
        meta: {
            title: '客户信息'
        }
    },{
        path: '/collection',
        name: 'collection',
        component: () => import('@/views/mine/collection.vue'),
        meta: {
            title: '我的收藏'
        }
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由守卫
router.beforeEach((to, from, next) => {
    console.log(to)
    document.title = to.meta.title
    next()
})

// // 在刷新页面的时候重置当前路由
// activeRouter()
//
// function activeRouter() {
//     const permissions = sessionStorage.getItem("permissions")
//     if (permissions) {
//         const permission = JSON.parse(permissions)
//         let root = {
//             path: '/',
//             name: 'Layout',
//             component: Layout,
//             redirect: "/echart",
//             children: []
//         }
//         permission.forEach(p => {
//             let obj = {
//                 path: p.path,
//                 name: p.name,
//                 component: () => import("@/views/" + p.name)
//             };
//             root.children.push(obj)
//         })
//         if (router) {
//             router.addRoute(root)
//         }
//     }
// }

//路由守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login' || to.path === '/register') {
//         next()
//         return
//     }
//     let permissions = sessionStorage.getItem("permissions") ? JSON.parse(sessionStorage.getItem("permissions")) : {}
//     if (!permissions || !permissions.length) {
//         next('/login')
//     } else if (!permissions.find(p => p.path === to.path)) {
//         next('/login')
//     } else {
//         next()
//     }
// })



export default router
