import Historial from "../modules/Client/views/History/history_orders.vue";
import Paquetes from "../modules/Client/views/Packages/packages.vue";
import Paque from "../modules/Client/views/Packet/packet.vue";
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
        path: "/paquete" + "/:id",
        name: "paquete",
        component: Paque,
        meta: {
          title: "Paquete",
        },
      },
    ],
  },
  //resto de paths de cliente
];
