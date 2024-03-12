<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="12" md="12">
          <div class="info-container">
            <p >Ultima modificación: {{ form.modifiedAt }}</p>
            <IconStatus :statusform="form.status.status" :packageNameform="form.packageName"/>
        </div>
      </b-col>
      </b-row>

      <b-row>
        <b-col cols="7">
          <b-form @submit="onSubmit">
            <b-form-group
              class="spacetop"
              label="Nombre del paquete"
              label-for="lbname"
            >
              <b-input
                id="ipname"
                class="r-input"
                type="text"
                placeholder="Ingrese el nombre del paquete"
                required
                v-model="form.packageName"
              ></b-input>
            </b-form-group>

            <b-form-group
              class="spacetop"
              label="Descripción del paquete"
              label-for="lbdescription"
            >
              <b-form-textarea
                id="textarea-small"
                class="r-input"
                size="sm"
                v-model="form.packageDescription"
                placeholder="Describe el contenido del paquete"
                required
              ></b-form-textarea>
            </b-form-group>

            <b-form-group class="spacetop" label="Capacidad de personas">
              <b-input class="r-input" v-model="form.ability"> </b-input>
            </b-form-group>
            <b-form-group class="spacetop" label="Categoria">
              <b-input class="r-input" disabled v-model="form.category.categoryName"></b-input>
            </b-form-group>
            <b-row>
              <b-col>
                <b-form-group class="spacetop" label="Precio">
                  <b-input-group prepend="$">
                    <b-form-input
                      v-model="form.price"
                      required
                      id="ipprice"
                      type="number"
                      min="1"
                      max="99999.99"
                      step="0.01"
                      placeholder="00.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group class="spacetop" label="Descuento">
                  <b-input-group prepend="$">
                    <b-form-input
                      v-model="form.discount"
                      prepend="$"
                      id="ipdiscount"
                      type="number"
                      min="0"
                      max="99999.99"
                      step="0.01"
                      placeholder="00.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="group_btn">
              <b-button type="submit" class="r-button">Submit</b-button>
              <b-button @click="closeModal">Cancelar</b-button>
            </div>
          </b-form>
        </b-col>
        <b-col cols="5" class="colsty">
          <b-row>
            <div v-if="form.image" class="imageShow">
              <b-img
                :src="form.image"
                v-model="form.image"
                fluid
                :alt="form.packageName"
                rounded
                center
                class="imgsize"
              ></b-img>
            </div>
            <div v-else class="imageShow">
              <div class="imgsizenone"><p>No hay imagen disponible</p></div>
            </div>
          
            <b-form-group id="fgimage">
              <b-form-file 
                class="p-5"
                v-model="form.image"
                placeholder="Escoje un archivo o arrastralo aquí..."
                drop-placeholder="Suelte el archivo aquí..."
                accept="image/jpeg, image/png, image/WebP"
                @change="onFileChange"
              ></b-form-file>
              <p v-if="fileSizeError" class="text-danger">
                {{ fileSizeError }}
              </p>
            </b-form-group>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Alerts from '../../../../services/Alerts';
import Packages from '../../../../services/Packages';
import IconStatus from './IconStatus.vue';
export default {
  props: {
    data: {
      type: Object,
    },
    closeModal: {
      type: Function,
    },
    fetchData:{
      type:Function
    }
  },
  data() {
    return {
      form: {
        ...this.data,
      },
      image: null,
      fileSizeError: null
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      try {
        console.log("formulario",this.form);
        const {ability,category:{categoryName},discount,image,packageName,packageDescription,price,status:{status}}=this.form;
        const category = categoryName
        const response = await Packages.updatePackage({ability,category,discount,image,packageDescription,packageName,price,status});
        if(response.statusCode===201){
          Alerts.showMessageSuccess(response.message,"success");
          await this.fetchData();
        }else{
          Alerts.showMessageSuccess("error al actualizar","error");
        }     
      } catch (error) {
        Alerts.showMessageSuccess("Hubo un error en el servidor","error");
        console.log("Error",error);
      }
      this.closeModal();
    },
    onFileChange(e) {
      const reader = new FileReader();
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        if (file.size <= 3000000) {
          reader.onload = () => {
            this.form.image=reader.result;
          };
          reader.readAsDataURL(file);
          this.fileSizeError= null;
        } else {
          this.form.image=null
          this.fileSizeError="El tamaño del archivo debe ser menor o igual a 3MB";
        }
      } else {
        this.form.image=null
        this.fileSizeError="Por favor, selecciona un archivo de imagen válido (jpg, png, webp)";
      }
    },
  },
  components:{
    IconStatus
  }
};
</script>

<style>
.colsty{
  justify-content: center;
  align-items: center;
  display: grid;
}
.imgsize {
  height: 150px;
  width: 280px;
}

.imgsizenone {
  justify-content: center;
  display: flex;
  align-content: center;
  align-items: center;
  height: 150px;
  width: 280px;
  background-color: #c4c4c4;
  border-radius: 3%;
}
.group_btn {
  margin-top: 40px;
  justify-content: space-around;
  display: flex;
}

#fgimage {
  margin-top: 20px;
}

.spacetop {
  margin-top: 15px;
}

.imageShow {
  margin-top: 10px;
}
</style>
