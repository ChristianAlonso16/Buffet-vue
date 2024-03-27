<template>
    <div>
        <div class="mt-4">
            <h1>Gestión de trabajadores</h1>
            <h5>Lista de trabajadores</h5>
        </div>
        <div class="row mb-2 text-center">
            <div class="d-md-flex justify-content-md-end">
                <addWorkerModal @update-users="getWorkers" />
            </div>
        </div>
        <div class="mt-5 row text-center">
            <div v-if="items.length === 0" class="col-12">
                <p>No hay registros disponibles.</p>
            </div>
            <div v-if="items.length > 0">
                <b-table label-sort-asc label-sort-desc bordered responsive class="shadow rounded" striped hover :items="items" :fields="fields" 
                        :per-page="perPage" :current-page="currentPage">
                    <template v-slot:cell(fkStatus.statusName)="data">
                        <td
                            :class="{ 'badge text-bg-success': data.value === 'enable', 'badge text-bg-danger': data.value !== 'enable' }">
                            {{ data.value === 'enable' ? 'Activo' : 'Inactivo' }}
                        </td>
                    </template>
                    <template v-slot:cell(actions)="data">
                        <td class="d-flex justify-content-center">
                            <b-button @click="updateStatus(data.item.numWorker, data.item.fkStatus.statusName)" class="w-100">
                                <b-icon-arrow-repeat></b-icon-arrow-repeat>
                                {{ data.item.fkStatus.statusName === 'enable' ? 'Desabilitar' : 'Habilitar' }}
                            </b-button>
                        </td>
                    </template>
                </b-table>
                <div class="d-flex justify-content-end mt-3" v-if="items.length > 0">
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        class="custom-pagination"
                    ></b-pagination>
                </div>
            </div>
        </div>
        <Loading v-if="showLoading" />
    </div>
</template>

<script>
import Alerts from '../../../../../services/Alerts';
import addWorkerModal from './addWorkerModal.vue';
import Loading from '../../../../../components/Loading/loading.vue';
import WorkerService from '../../../../../services/WorkerService';
export default {
    data() {
        return {
            perPage: 10,
            currentPage: 1,
            showLoading: false,
            items: [],
            fields: [
                { key: "numWorker", label: "Num. Trabajador", sortable: true },
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
        async updateStatus(numWorker, currentStatus) {
            try {
                let status = currentStatus == 'enable' ? 'disabled' : 'enable';
                const data = await WorkerService.updateStatusWorker(numWorker, status);
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
                const data = await WorkerService.getWorkers();
                if (data.statusCode === 200) {
                    this.showLoading = false;
                    this.items = [...data.data]
                } else {
                    this.showLoading = false;
                    Alerts.showMessageSuccess("Error al traer trabajadores", "error");
                }
            } catch (error) {
                this.showLoading = false;
                Alerts.showMessageSuccess("Error al traer trabajadores", "error");
            }
        }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    components: {
        addWorkerModal,
        Loading
    }
};
</script>

<style>

.custom-pagination .page-link {
  color: #ffffff;
  background-color: #272d36;
  border-color: #272d36;
}

.custom-pagination .page-link:hover {
  color: #ffffff;
  background-color: #5a677c;
  border-color: #5a677c;
}

.custom-pagination .page-item.active .page-link {
  background-color: #717d8f;
  border-color: #717d8f;
  outline: none;

  outline-width: 0;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.custom-pagination .page-item.disabled .page-link {
  color: white;
  pointer-events: none;
  background-color: #272d36;
  border-color: #272d36;
}
</style>