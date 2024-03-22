<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="7">
          <b-form @submit="onSubmit">
            <b-form-group
              clase="spacetop"
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
              <p class="text-danger" v-show="errorDescription">
                Máximo 300 caracteres
              </p>
            </b-form-group>

            <b-form-group class="spacetop" label="Capacidad de personas">
              <b-input
                v-model="form.ability"
                type="number"
                min="1"
                max="9999"
                class="r-input"
                required
              ></b-input>
            </b-form-group>
            <b-form-group class="spacetop" label="Seleccione una categoria:">
              <b-form-select
                required
                v-model="form.category"
                :options="categorias"
              ></b-form-select>
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
                      max="99999.99"
                      step="0.01"
                      placeholder="00.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="group_btn">
              <b-button type="submit" class="r-button">Registrar</b-button>
              <b-button @click="closeModal">Cancelar</b-button>
            </div>
          </b-form>
        </b-col>
        <b-col cols="5">
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
          </b-row>
          <b-row class="inputstyle">
            <b-form-group id="fgimage">
              <b-form-file
                v-model="form.image"
                placeholder="Escoje un archivo"
                accept="image/jpeg, image/png, image/WebP"
                @change="onFileChange"
                required
              ></b-form-file>
              <p v-if="fileSizeError" class="text-danger">
                {{ fileSizeError }}
              </p>
              <p v-if="!form.image" class="text-danger">
                La imagen es requerida.
              </p>
            </b-form-group>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Alerts from "../../../../services/Alerts";
import Categories from "../../../../services/Categories";
import Packages from "../../../../services/Packages";
export default {
  props: {
    closeModal: {
      type: Function,
    },
    fetchData: {
      type: Function,
    },
  },
  data() {
    return {
      form: {
        packageName: null,
        packageDescription: null,
        price: null,
        discount: null,
        image:
          "https://www.webempresa.com/foro/wp-content/uploads/wpforo/attachments/3200/318277=80538-Sin_imagen_disponible.jpg",
        ability: null,
        category: null,
      },
      categorias: [],
      fileSizeError: null,
      errorName: false,
      errorDescription: false,
    };
  },
  methods: {
    async getcategory() {
      this.categorias = await Categories.getCategories();
      this.categorias = this.categorias.data;
      this.categorias = this.categorias.map(
        (category) => category.categoryName
      );
    },
    async onSubmit(event) {
      event.preventDefault();
      try {
        
        let res = Packages.validateSizeDescriptionPackage(
          this.form.packageDescription
        );
        if (!res) {
          this.errorDescription = true;
        } else {
          this.errorDescription = false;
          const response = await Packages.addPackage(this.form);
          console.log("respuesta",response);
          if (response.statusCode === 201) {
            Alerts.showMessageSuccess(response.message, "success");
            await this.fetchData();
            await this.closeModal();
          } else if (response.response.status===400) {
            if (response.response.data) {
              Alerts.showMessageSuccess(
                response.response.data.message,
                "error"
              );
            } else {
              Alerts.showMessageSuccess(
                "El nombre del paquete ya ha sido registrado",
                "error"
              );
            }
          }else if(response.statusCode!=201 && response.statusCode!=400){
            Alerts.showMessageSuccess("Error en el servidor",response)
          }
        }
      } catch (error) {
        console.log("error en onsubmit", error);
        await this.closeModal();
      }
    },
    onFileChange(e) {
      const reader = new FileReader();
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        if (file.size <= 3000000) {
          reader.onload = () => {
            this.form.image = reader.result;
          };
          reader.readAsDataURL(file);
          this.fileSizeError = null;
        } else {
          this.form.image = null;
          this.fileSizeError =
            "El tamaño del archivo debe ser menor o igual a 3MB";
        }
      } else {
        this.form.image = null;
        this.fileSizeError =
          "Por favor, selecciona un archivo de imagen válido (jpg, png, webp)";
      }
    },
  },
  mounted() {
    this.getcategory();
  },
};
</script>

<style>
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
  width: auto;
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

.inputstyle {
  text-align: center;
}
</style>