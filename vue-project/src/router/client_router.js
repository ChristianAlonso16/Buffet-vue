import Historial from "../modules/Client/views/History/history_orders.vue";
import AllPackets from "../modules/Client/views/AllPackets/AllPackets.vue";
import Paque from "../modules/Client/views/Packet/Pack.vue";
import HistorialId from "../modules/Client/views/Follow-up/FollowUp.vue";
import Purchase from "../modules/Client/views/Purcharse/Purchase.vue";
import SuccessPayment from "../modules/Client/views/payment/payment-success/SuccessPayment.vue"
import CancelPayment from "../modules/Client/views/payment/payment-cancel/CancelPayment.vue"
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
        component: AllPackets,
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
      },
      {
        path:"/s",
        name:"pago",
        component: SuccessPayment,
        meta: {
          title: "Pago realizado"
        }
      },
      {
        path:"/cancelarPago",
        name:"cancelar",
        component: CancelPayment,
        meta: {
          title: "Pago cancelado"
        }
      }
    ],
  },
];
