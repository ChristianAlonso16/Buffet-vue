<template>
  <div>
    <b-modal id="modalAssign" size="xl" title="Asignar trabajadores">
      <p class="my-4">{{ selectedOrder }}</p>
    </b-modal>
    <div class="text-center mb-4">
      <h5 class="fw-bold">Lista de solicitudes pendientes</h5>
    </div>
    <div class="text-center mb-5" v-if="items.length > 0">
      <b-table
        :items="items"
        :fields="fields"
        label-sort-asc
        label-sort-desc
        bordered
        responsive
        class="rounded shadow"
        striped
        hover
      >
        <template v-slot:cell(actions)="items">
          <td class="d-flex justify-content-center">
            <b-btn
              v-b-modal.modalAssign
              @click="setSelectedOrder(items)"
              class="w-100"
            >
              <b-icon-pin-angle></b-icon-pin-angle>
              Asignar</b-btn
            >
          </td>
        </template>
      </b-table>
    </div>
    <b-row>
      <div v-if="items.length === 0" class="col-12 text-center">
        <p>No hay registros disponibles</p>
      </div>
    </b-row>
  </div>
</template>

<script>
import Dashboard from "../../../../services/Dashboard";
import Alerts from "../../../../services/Alerts";
export default {
  data() {
    return {
      items: [],
      fields: [
        { key: "numOrder", label: "N° Solicitud", sortable: true },
        { key: "userEmail", label: "Cliente", sortable: true },
        { key: "orderDate", label: "Fecha", sortable: true },
        { key: "packageName", label: "Paquete", sortable: true },
        { key: "actions", label: "Acciones", sortable: true },
      ],
      selectedOrder: null,
    };
  },
  methods: {
    async getOrders() {
      try {
        const data = await Dashboard.getOrders();
        if (data.statusCode === 200) {
          this.items = [...data.data];
          this.items.forEach((item) => {
            item.orderDate = this.formatDate(item.orderDate);
          });
          console.log(this.items);
        }
        if (data.code === "ERR_NETWORK") {
          // Alerts.showMessageSuccess("Error al obtener las ordenes","error")
        }
      } catch (error) {
        // Alerts.showMessageSuccess("Error al obtener las ordenes","error");
      }
    },
    setSelectedOrder(number) {
      this.selectedOrder = number;
    },
    formatDate(date) {
      return new Date(date).toISOString().split("T")[0];
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

<style>
</style>