import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "inicio",
    component: () => import("../views/Inicio.vue"),
    children: [
      {
        path: "/register",
        name: "register",
        component: () => import("../components/Register/Register.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../components/Login/Login.vue"),
      }
    ],
  },
  {
    path: "*",
    component: () => import("../views/ErrorPage/Error404.vue"),
  },
];
const router = new VueRouter({ mode: 'history', routes });
export default router;
