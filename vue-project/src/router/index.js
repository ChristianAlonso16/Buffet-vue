import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from "../router/public_router";
import adminRouter from "../router/admin_router";
import clientRouter from "../router/client_router";
import workerRouter from "../router/worker_router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: {
            render (c){
                return c("router-view")
            }
        },
        children:[
            ...publicRoutes.map(route => {
                route.meta.requireAuth = false;
                return { ...route };
              }),
            ...adminRouter.map(route => {
                route.meta.requireAuth = false
                return {...route}
            }),
            ...clientRouter.map(route => {
              route.meta.requireAuth = false
              return {...route}
          }),
          ...workerRouter.map(route => {
            route.meta.requireAuth = false
            return {...route}
        })
        ]
    },
    {
        path: '/*',
        name: '404',
        component: ()=> import('../views/ErrorPage/Error404.vue')
    },
    
]

const router = new VueRouter({
    mode: 'history',routes
})

router.beforeEach((to, from, next)=>{
    //let permission = false;
    //if (!to.matched.some((noAuth) => noAuth.meta.requireAuth)) {
    //  next();
    //} else {
    //  next({ name: "login" });
    //}
    next()
})

export default router