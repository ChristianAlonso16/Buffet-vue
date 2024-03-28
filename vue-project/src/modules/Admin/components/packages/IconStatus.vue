<template>
  <div>
  <b-row>
  <b-col v-show="edit"><b-btn @click="validateStatus">{{status==='enable'?'Deshabilitar':'Habilitar'}}</b-btn></b-col>
  <b-col><p class="h2 mb-2"><b-icon icon="circle-fill" :variant="status==='enable'?'success':'danger'"></b-icon></p></b-col>
  </b-row>
  </div>
</template>

<script>
import Alerts from '../../../../services/Alerts'
import Packages from '../../../../services/Packages'
export default {
  props:{
    statusform:{
      type:String
    },
    packageNameform:{
      type: String
    }
  },
    data(){
        return{
          status: this.statusform,
          name:this.packageNameform,
          edit:false
        }
    },
    methods:{
      async validateStatus(){
        try {
          const response = await Packages.changeStatus(this.name,this.status);
          var newStatus = response.data.data.status.status
          if(response.status===200){
            Alerts.showMessageSuccess(response.data.message,"success");
            this.status=newStatus;
          }else if(response.status!=200){
            Alerts.showMessageSuccess(response.error_message,"danger");
          }
        } catch (error) {
          Alerts.showMessageSuccess(error,"error");
        }
      },
      validateModal(){
        if(this.name!=undefined){
          this.edit=true;
        }
      }
    },
    mounted(){
      this.validateModal()
    }

}
</script>

<style>

</style>