import DetallesEntrega from "../modules/Worker/views/Delivery/DeliveryDetails.vue";
import DashboardWorker from "../modules/Worker/views/DashboardWorker/DashboardWorker.vue";
import Assignments from "../modules/Worker/views/Assignment/Assignments.vue";

export default [
    {
        path: '/trabajador',
        name: 'trabajador',
        redirect: '/trabajador/dashboard',
        component: () => import("../layouts/WorkerLayout.vue"),
        meta: {
            title:'Trabajador'
        },
        children:[
            {
                path: '/trabajador/detalles',
                name: 'detalles',
                component: DetallesEntrega,
                meta: {
                    title:'Detalles de entrega'
                }
            },
            {
                path: '/trabajador/dashboard',
                name: 'dashboard',
                component: DashboardWorker,
                meta: {
                    title:'Dashboard Worker'
                }
            },
            {
                path: '/trabajador/asignaciones',
                name: 'asignaciones',
                component: Assignments,
                meta: {
                    title:'Asignaciones'
                }
            },
        ]
    },
    //resto de paths de trabajador
]