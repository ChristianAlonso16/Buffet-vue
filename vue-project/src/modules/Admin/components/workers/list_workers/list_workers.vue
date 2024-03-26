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
                <b-table label-sort-asc label-sort-desc bordered responsive class="shadow rounded" striped hover :items="items" :fields="fields">
                    <template v-slot:cell(fkStatus.statusName)="data">
                        <td
                            :class="{ 'badge text-bg-success': data.value === 'enable', 'badge text-bg-danger': data.value !== 'enable' }">
                            {{ data.value === 'enable' ? 'Activo' : 'Inactivo' }}
                        </td>
                    </template>
                    <template v-slot:cell(actions)="data">
                        <td class="d-flex justify-content-center">

                            <b-button @click="updateStatus(data.item.email, data.item.fkStatus.statusName)" class="w-100">
                                <b-icon-arrow-repeat></b-icon-arrow-repeat>
                                {{ data.item.fkStatus.statusName === 'enable' ? 'Desabilitar' : 'Habilitar' }}
                            </b-button>
                        </td>
                    </template>
                </b-table>
            </div>
        </div>
        <Loading v-if="showLoading" />
    </div>
</template>

<script>
import AdminServices from '../../../../../services/AdminService';
import Alerts from '../../../../../services/Alerts';
import addWorkerModal from './addWorkerModal.vue';
import Loading from '../../../../../components/Loading/loading.vue';

export default {
    data() {
        return {
            showLoading: false,
            items: [],
            fields: [
                { key: "email", label: "Correo", sortable: true },
                { key: "fkUserInfo.name", label: "Nombre", sortable: true },
                { key: "fkUserInfo.lastname", label: "Apellido", sortable: true },
                { key: "fkUserInfo.phone", label: "Teléfono", sortable: true },
                { key: "fkUserInfo.createdAt", label: "Fecha de registro", sortable: true },
                { key: "fkStatus.statusName", label: "Estatus", sortable: true },
                { key: 'actions', label: 'Acciones', sortable: true }

            ]
        };
    },

    mounted() {
        this.showLoading = true;
        this.getWorkers();
    },

    methods: {
        async updateStatus(email, currentStatus) {
            try {
                let status = currentStatus == 'enable' ? 'disabled' : 'enable';
                const data = await AdminServices.updateStatus(email, status);
                if (data.statusCode === 200) {
                    Alerts.showMessageSuccess(data.message != "" ? data.message : "Actualizado", "success");
                    this.getWorkers();
                } else {
                    Alerts.showMessageSuccess(data.message != "" ? data.message : "Error", "error");

                }
            } catch (error) {

            }
        },
        async getWorkers() {
            try {
                const data = await AdminServices.getWorkers();
                if (data.statusCode === 200) {
                    this.showLoading = false;
                    this.items = [...data.data]
                }
            } catch (error) {
                this.showLoading = false;
                Alerts.showMessageSuccess("Error al traer trabajadores", "error");
            }
        }
    },
    components: {
        addWorkerModal,
        Loading
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
