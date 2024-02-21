import LandPage from "../views/Landpage/LandPage.vue";
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import RecoverPass from "../views/RecoverPass/RecoverPass.vue";
export default [
    {
        path: '/',
        redirect:'/home',
        name: '',
        component: ()=> import("../layouts/PublicLayout.vue"),
        meta: {
            title:'Public'
        },
        children:[
            {
                path: '/home',
                name: 'home',
                component: LandPage,
                meta:{
                    title: 'Inicio'
                }
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta:{
                    title: 'Iniciar sesión'
                }
            },
            {
                path: "/register",
                name: "register",
                component:Register,
                meta:{
                    title:'Registrar cuenta'
                }
            },
            {
                path: "/recoverpass",
                name: "recoverpass",
                component:RecoverPass,
                meta:{
                    title:'Recuperar Contraseña'
                }
            },
        ]
    },
   
]