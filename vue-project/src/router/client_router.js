import Historial from "../modules/Client/views/History/history_orders.vue"
export default [
   
    {
        path: '',
        name: '',
        component: ()=> import("../layouts/PublicLayout.vue"),
        meta: {
            title:'Cliente'
        },
        children:[
            {
                path: '/historial',
                name: 'historial',
                component: Historial,
                meta: {
                    title:'Historial'
                }
            },
        ]
    },
    //resto de paths de cliente
]