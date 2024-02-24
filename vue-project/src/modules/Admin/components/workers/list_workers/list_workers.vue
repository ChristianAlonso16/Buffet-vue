<template>
    <div class="mt-5 text-center">
        <div class="linea_punto"></div>
        <h4 class="open_sans">
            Gestión de trabajadores
        </h4>
        <div class="row mb-3">
            <div class="d-md-flex justify-content-md-end">
                <addWorkerModal @update-users="getWorkers" />
            </div>
        </div>
        <div class="mt-5 row">
            <div v-if="items.length === 0" class="col-12 text-center">
                <p>No hay registros disponibles.</p>
            </div>
            <div>
                <b-table class="shadow rounded" striped hover :items="items" :fields="fields">
                    <template v-slot:cell(fkStatus.status)="data">
                        <td
                            :class="{ 'badge text-bg-success': data.value === 'enable', 'badge text-bg-danger': data.value !== 'enable' }">
                            {{ data.value === 'enable' ? 'Activo' : 'Inactivo' }}
                        </td>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import AdminServices from '../../../../../services/AdminService';
import Alerts from '../../../../../services/Alerts';
import addWorkerModal from './addWorkerModal.vue';

export default {
    data() {
        return {
            items: [],
            fields: [
                { key: "email", label: "Correo", sortable: false },
                { key: "fkUserInfo.name", label: "Nombre", sortable: false },
                { key: "fkUserInfo.lastname", label: "Apellido", sortable: false },
                { key: "fkUserInfo.phone", label: "Teléfono", sortable: false },
                { key: "fkUserInfo.createdAt", label: "Fecha de registro", sortable: false },
                { key: "fkStatus.status", label: "Estado", sortable: false },
            ]
        };
    },

    mounted() {
        this.getWorkers();
    },

    methods: {
        async getWorkers() {
            try {
                const data = await AdminServices.getWorkers();
                if (data.statusCode === 200) {
                    this.items = [...data.data]
                }
            } catch (error) {
                Alerts.showMessageSuccess("Error al traer trabajadores", "error");
            }
        }
    },
    components: {
        addWorkerModal
    }
};
</script>
  
<style scoped>

.open_sans {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 16px;
}

.linea_punto {
    margin: 0 auto;
    max-width: 290px;
    width: 100%;
    height: 2px;
    background-color: #404e67;
    position: relative;
}

.linea_punto::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #404e67;
    border: 8px solid #fff;
    left: 50%;
    top: -10px;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-clip: padding-box;
    box-sizing: content-box;
}
</style>
