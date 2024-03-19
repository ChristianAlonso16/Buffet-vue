<template>
  <div>
    <b-container>
      <b-modal id="modalAssign" size="xl" title="Asignar trabajadores">
        <p class="my-4">{{selectedOrder}}</p>
      </b-modal>
      <b-row class="text-center">
        <h5><b>Lista de solicitudes pendientes</b></h5>
      </b-row>
      <br/>
        <b-row>
            <b-table class="shadow rounded" :items="items" :fields="fields">
              <template v-slot:cell(actions)="items">
                <td>
                  <b-btn v-b-modal.modalAssign @click="setSelectedOrder(items)">Asignar</b-btn>
                </td>
              </template>
            </b-table>
            <b-row>
              <div v-if="items.length===0" class="col-12 text-center">
                <p>No hay registros disponibles</p>
              </div>
            </b-row>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Dashboard from '../../../../services/Dashboard';
import Alerts from '../../../../services/Alerts';
export default {
  data(){
    return{
      items:[],
      fields: [
                { key: "numOrder", label: "N° Solicitud", sortable: false },
                { key: "userAccount.fkUserInfo.name", label: "Cliente", sortable: false },
                { key: "orderDate", label: "Fecha", sortable: false },
                { key: "servicePackage.packageName", label: "Paquete", sortable: false },
                { key: 'actions', label: 'Acciones', sortable: false }
              ],
      selectedOrder:null,
    }
  },
  methods:{
    async getOrders(){
      try {
        const data = await  Dashboard.getOrders();
        if(data.statusCode === 200){
          this.items=[...data.data]
          console.log(this.items);
        }
        if(data.code==='ERR_NETWORK'){
          // Alerts.showMessageSuccess("Error al obtener las ordenes","error")
        }
      } catch (error) {
        // Alerts.showMessageSuccess("Error al obtener las ordenes","error");
      }
    },
    setSelectedOrder(number){
      this.selectedOrder=number;
    }
  },
  mounted(){
    this.getOrders();
  }
}
</script>

<style>
</style>