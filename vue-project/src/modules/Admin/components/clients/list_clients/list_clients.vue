<template>
    <div>
        <div class="mt-4">
            <h1>Gestión de clientes</h1>
            <h5>Lista de clientes</h5>
        </div>
        <div class="mt-5 row  text-center">
            <div v-if="items.length === 0" class="col-12 text-center">
                <p>No hay registros disponibles.</p>
            </div>
            <div v-if="items.length > 0">
                <b-table label-sort-asc label-sort-desc bordered responsive class="shadow rounded text-center" striped hover :items="items" :fields="fields"
                :per-page="perPage" :current-page="currentPage">
                    <template v-slot:cell(fkStatus.statusName)="data">
                        <td
                            :class="{ 'badge text-bg-success': data.value === 'enable', 'badge text-bg-danger': data.value !== 'enable' }">
                            {{ data.value === 'enable' ? 'Activo' : 'Inactivo' }}
                        </td>
                        <td>
                        </td>
                    </template>

                    <template v-slot:cell(actions)="data" >
                        <td class="d-flex justify-content-center">
                            <b-button @click="updateStatus(data.item.email, data.item.fkStatus.statusName)" class="w-100">
                                <b-icon-arrow-repeat></b-icon-arrow-repeat>
                                {{ data.item.fkStatus.statusName === 'enable' ? 'Desactivar' : 'Activar' }}
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
import AdminServices from '../../../../../services/AdminService';
import Alerts from '../../../../../services/Alerts';
import Loading from '../../../../../components/Loading/loading.vue';

export default {
    components: {
        Loading
    },
    data() {
        return {
            perPage: 10,
            currentPage: 1,
            showLoading: false,
            items: [],
            fields: [
                { key: "email", label: "Correo", sortable: true },
                { key: "fkUserInfo.name", label: "Nombre", sortable: true },
                { key: "fkUserInfo.lastname", label: "Apellido", sortable: true },
                { key: "fkUserInfo.phone", label: "Telefono", sortable: true },
                { key: "fkUserInfo.createdAt", label: "Fecha de registro", sortable: true },
                { key: "fkStatus.statusName", label: "Estatus", sortable: true },
                { key: 'actions', label: 'Acciones', sortable: true }
            ]
        };
    },

    mounted() {
        this.showLoading = true;
        this.getClients();
    },

    computed: {
      rows() {
        return this.items.length
      }
    },

    methods: {
        async updateStatus(email, currentStatus) {
            try {
                let status = currentStatus == 'enable' ? 'disabled' : 'enable';
                const data = await AdminServices.updateStatusUser(email, status);
                if (data.statusCode === 200) {
                    Alerts.showMessageSuccess(data.message != "" ? data.message : "Actualizado", "success");
                    this.getClients();
                } else {
                    Alerts.showMessageSuccess(data.message != "" ? data.message : "Error", "error");

                }
            } catch (error) {

            }
        },
        async getClients() {
            try {
                const data = await AdminServices.getClients();
                if (data.statusCode === 200) {
                    this.items = [...data.data]
                    this.showLoading = false;
                } else {
                    Alerts.showMessageSuccess("Error al traer clientes", "error");
                    this.showLoading = false;
                }

            } catch (error) {
                Alerts.showMessageSuccess("Error al traer clientes", "error");
                this.showLoading = false;
            }
        },
    },
};
</script>

