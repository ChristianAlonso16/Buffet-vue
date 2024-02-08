import LandPage from "../views/Landpage/LandPage.vue";
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue"
export default [
    {
        path: 'home',
        name: 'home',
        component: LandPage,
        meta:{
            title: 'Home'
        }
    },
    {
        path: 'login',
        name: 'login',
        component: Login,
        meta:{
            title: 'Iniciar sesión'
        }
    },
    {
        path: "register",
        name: "register",
        component:Register,
        meta:{
            title:'Registrar cuenta'
        }
    },
]