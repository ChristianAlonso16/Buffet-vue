import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "inicio",
    component: () => import("../views/Inicio.vue"),
    children: [
 
    ],
  },
  {
    path: "*",
    component: () => import("../views/ErrorPage/Error404.vue"),
  },
];
const router = new VueRouter({ routes });
export default router;
