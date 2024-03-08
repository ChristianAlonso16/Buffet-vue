import Historial from "../modules/Client/views/History/history_orders.vue";
import Paquetes from "../modules/Client/views/Packages/packages.vue";
import Paque from "../modules/Client/views/Packet/Pack.vue";
import HistorialId from "../modules/Client/views/Follow-up/FollowUp.vue";
import Purchase from "../modules/Client/views/Purcharse/Purchase.vue";
export default [
  {
    path: "",
    name: "",
    component: () => import("../layouts/PublicLayout.vue"),
    meta: {
      title: "Cliente",
    },
    children: [
      {
        path: "/historial",
        name: "historial",
        component: Historial,
        meta: {
          title: "Historial",
        },
      },
      {
        path: "/paquetes",
        name: "paquetes",
        component: Paquetes,
        meta: {
          title: "Paquetes",
        },
      },
      {
        path: "/paquete/:packageName",
        name: "paquete",
        component: Paque,
        meta: {
          title: "Paquete",
        },
      },
      {
        path: "/seguimiento/:id",
        name: "seguimiento",
        component: HistorialId,
        meta: {
          title: "Seguimiento",
        },
      },
      {
        path:"/paquete/:packageName/comprar",
        name:"resumenCompra",
        component: Purchase,
        meta: {
          title: "Resumen Compra"
        }
      }
    ],
  },
  //resto de paths de cliente
];
