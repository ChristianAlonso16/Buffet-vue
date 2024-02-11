import Category from "../modules/Admin/views/Category/Category.vue"
import NewWorker from "../modules/Admin/views/newWorker/NewWork.vue"

export default [
    {
        path: 'categorias',
        name: 'categorias',
        component: Category,
        meta: {
            title:'Categorias'
        }
    },
    {
        path: 'nuevoTrabajador',
        name: 'nuevoTrabajador',
        component: NewWorker,
        meta:{
            title: 'nuevoTrabajador'
        }
    }
    //resto de paths de admin
]