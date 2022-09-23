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
        }, {
            path: '/companyProfile',
            name: 'companyProfile',
            component: () => import('@/views/activity/company-detail-activity/companyProfile.vue'),
            meta: {
                title: '公司简介'
            }
        }, {
            path: '/designerExample',
            name: 'designerExample',
            component: () => import('@/views/activity/company-detail-activity/designerExample.vue'),
            meta: {
                title: '设计案例'
            }
        }, {
            path: '/discountActivity',
            name: 'discountActivity',
            component: () => import('@/views/activity/company-detail-activity/discountActivity.vue'),
            meta: {
                title: '优惠活动'
            }
        },
        {
            path: '/lastActivity',
            name: 'lastActivity',
            component: () => import('@/views/activity/company-detail-activity/lastActivity.vue'),
            meta: {
                title: '最近活动'
            }
        }, {
            path: '/installmentActivity',
            name: 'installmentActivity',
            component: () => import('@/views/activity/index-swiper/installmentActivity.vue'),
            meta: {
                title: '分期活动'
            }
        }, {
            path: '/cashBackActivity',
            name: 'cashBackActivity',
            component: () => import('@/views/activity/index-swiper/cashBackActivity.vue'),
            meta: {
                title: '千返百活动'
            }
        }, {
            path: '/scanCodeActivity',
            name: 'scanCodeActivity',
            component: () => import('@/views/activity/index-swiper/scanCodeActivity.vue'),
            meta: {
                title: '社群福利'
            }
        }, {
            path: '/socialActivity',
            name: 'socialActivity',
            component: () => import('@/views/activity/index-swiper/socialActivity.vue'),
            meta: {
                title: '家装社区活动'
            }
        }, {
            path: '/shopAreaActivity',
            name: 'shopAreaActivity',
            component: () => import('@/views/activity/index-swiper/shopAreaActivity.vue'),
            meta: {
                title: '家装商圈活动'
            }
        }, {
            path: '/ticketCenter',
            name: 'ticketCenter',
            component: () => import('@/views/ticket/ticketCenter.vue'),
            meta: {
                title: '领券中心'
            }
        }, {
            path: '/guessFavorite',
            name: 'guessFavorite',
            component: () => import('@/views/favorite/guessFavorite.vue'),
            meta: {
                title: '猜你喜欢'
            }
        }, {
            path: '/collectTicket',
            name: 'collectTicket',
            component: () => import('@/views/ticket/collectTicket.vue'),
            meta: {
                title: '领取奖券'
            }
        }, {
            path: '/wantConsult',
            name: 'wantConsult',
            component: () => import('@/views/consult/wantConsult.vue'),
            meta: {
                title: '我要咨询'
            }
        }, {
            path: '/collection',
            name: 'collection',
            component: () => import('@/views/mine/collection.vue'),
            meta: {
                title: '我的收藏'
            }
        }, {
            path: '/sortSection',
            name: 'sortSection',
            component: () => import('@/views/sort/sortSection.vue'),
            meta: {
                title: '分类板块'
            }
        }, {
            path: '/bandDetail',
            name: 'bandDetail',
            component: () => import('@/views/band/bandDetail.vue'),
            meta: {
                title: '品牌详情'
            }
        },

        ]
    },
    {
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
    }, {
        path: '/usertellist',
        name: 'usertellist',
        component: () => import('@/views/mine/usertelList.vue'),
        meta: {
            title: '客户信息'
        }
    }


]

const router = new VueRouter({
    mode: 'hash',
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
