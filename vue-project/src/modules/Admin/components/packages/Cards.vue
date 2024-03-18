<template>
  <div class="mt-5 text-center">
    <div class="linea_punto"></div>
    <h4 class="open_sans">Gestión de paquetes</h4>
    <div class="row mb-3">
      <div class="d-md-flex justify-content-md-end">
        <b-button @click="abrirModalAdd" class="r-button">Agregar</b-button>
      </div>
    </div>
    
    <b-modal size="lg" no-close-on-backdrop v-model="showModalEdit" id="showModalEdit" hide-footer >
      <template #modal-header="{  }">
        <h3>Actualizar paquete</h3>
        <p @click="closeM()" class="close-tag">X</p>
      </template>
        <ModalEdit :data="selectedItem" :fetch-data="fetchData" :close-modal="closeModalEdit" v-show="showModalEdit"/>
    </b-modal>

    <b-modal size="lg" no-close-on-backdrop v-model="showModalDetails" ok-only ok-variant="secondary" >
      <template #modal-header="{ close }">
        <h3>Detalles del paquete</h3>
        <p @click="close()" class="close-tag">X</p>
      </template>
      <ModalDetails :data="selectedItem"/>
    </b-modal>

    <b-modal size="lg" no-close-on-backdrop v-model="showModalAdd" hide-footer>
      <template #modal-header="{ close }">
        <h3>Registrar nuevo paquete</h3>
        <p @click="close()" class="close-tag">X</p>
      </template>
      <ModalAdd class="modalstyle" :close-modal="closeModalAdd" :fetch-data="fetchData"/>
    </b-modal>

    <div class="cards">
      <b-row>
        <div v-for="(item, index) in apiData" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <b-card
            :img-alt="item.packageName"
            :img-src="item.image"
            style="max-width: 20rem"
            class="mb-2"
            img-height="210px"
          >
          <b-card-text>
            <h4 style="text-overflow:ellipsis">{{item.packageName}}</h4>
          </b-card-text>
            <b-card-text>
              CAPACIDAD: {{item.ability}}
              <b-list-group>
              <div v-if="item.discount">
                <p>${{item.discount}} <s>${{item.price}}</s></p>
              </div>
              <div v-else>
                <p>$ {{ item.price }}</p>
              </div>
            </b-list-group>
            </b-card-text>
            
            <b-row class="justify-content-between align-items-center">
              <b-col>
                <b-button class="r-button" @click="abrirModalEdit(index)">Actualizar</b-button>
                </b-col>
              <b-col>
                <b-button @click="abrirModalDetails(index)">Detalles</b-button>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import Packages from '../../../../services/Packages';
import Alerts from "../../../../services/Alerts";
import ModalEdit from "./ModalEdit.vue";
import ModalDetails from './ModalDetails.vue';
import ModalAdd from './ModalAdd.vue';
import ModalEditVue from './ModalEdit.vue';

export default {
  data() {
    return {
      apiData: [],
      showModalEdit: false,
      selectedItem:null,
      showModalDetails:false,
      showModalAdd:false
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.apiData= await Packages.getPackages();
        
        if(this.apiData.message==="Network Error"){
          Alerts.showMessageSuccess("Error al traer los paquetes, intentelo mas tarde o contacte a soporte", "error");
        }
        this.apiData=this.apiData.data; 
      } catch (error) {
        console.log(error);
      }
    },
    abrirModalEdit(index) {
      this.showModalEdit = true;
      this.selectedItem = this.apiData[index];
    },
    closeModalEdit() {
      this.showModalEdit = false;
      this.selectedItem=null
      this.fetchData();
    },
    abrirModalDetails(index){
      this.showModalDetails=true;
      this.selectedItem=this.apiData[index];
    },
    abrirModalAdd(){
      this.showModalAdd=true;
    },
    closeModalAdd(){
      this.showModalAdd=false;
      this.fetchData();
    },
    closeM(){
      this.showModalEdit =false
      this.fetchData();
    }
  },
  components: {
    ModalEdit,
    ModalDetails,
    ModalAdd
  },
};
</script>

<style>
.btn-right {
  float: right;
}
.open_sans {
  font-family: "Open Sans", sans-serif;
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
  content: "";
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

.modalstyle{
  margin-top: 5%
}
.close-tag{
    cursor: pointer;
    font-size: large;
    font-weight: bold;
    color: #404e67;
}
</style>
