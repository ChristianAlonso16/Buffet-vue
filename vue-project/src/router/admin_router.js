import Category from "../modules/Admin/views/Category/Category.vue"
import Dasboard from "../modules/Admin/views/Dashboard/Dashboard.vue"
import Clients from "../modules/Admin/views/Clients/Clients.vue"
import Workers from "../modules/Admin/views/Workers/Workers.vue"
export default [
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/dashboard',
        component: ()=> import("../layouts/AdminLayout.vue"),
        meta: {
            title:'Admin'
        },
        children:[
            {
                path:'/admin/categorias',
                name: 'categorias',
                component: Category,
                meta:{
                    title:'Categorias'
                }
            },
            {
                path:'/admin/dashboard',
                name: 'dashboard',
                component: Dasboard,
                meta:{
                    title:'Dashboard'
                }
            },
            {
                path:'/admin/clientes',
                name: 'clientes',
                component: Clients,
                meta:{
                    title:'Clientes'
                }
            },
            {
                path:'/admin/trabajadores',
                name: 'trabajadores',
                component: Workers,
                meta:{
                    title:'Trabajadores'
                }
            }
        ]
    },
]