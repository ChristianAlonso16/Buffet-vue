import Asignaciones from "../modules/Worker/views/Assignments/list_assignments.vue"
export default [
 
    {
        path: '/trabajador',
        name: '',
        component: ()=> import("../layouts/WorkerLayout.vue"),
        meta: {
            title:'Trabajador'
        },
        children:[
            {
                path: '/asignaciones',
                name: 'asignaciones',
                component: Asignaciones,
                meta: {
                    title:'Asignaciones'
                }
            },
        ]
    },
    //resto de paths de trabajador
]