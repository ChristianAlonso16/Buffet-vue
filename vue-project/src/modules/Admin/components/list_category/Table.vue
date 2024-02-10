<template>
  <div class="pt-4">
    <div class="linea_punto"></div>
    <h4 class="open_sans">
      Categorias
    </h4>
    <div class="row mb-3">
      <div class="d-md-flex justify-content-md-end">
        <b-button @click="openModal" class="mb-2 r-button">Agregar Categoría</b-button>
      </div>
    </div>
    <div class="row">
      <div v-if="categories.length === 0" class="col-12 text-center">
        <p>No hay registros disponibles.</p>
      </div>
      <div v-for="category in categories" :key="category.key" class="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-4">
        <div class="card rounded shadow">
          <div class="card-body">
            <h6 class="card-title">{{ category.categoryName }}</h6>
          </div>

        </div>
      </div>
    </div>

    <b-modal v-model="modalShow" title="Agregar Categoría" hide-footer>
      <b-form @submit="registerCategory" v-show="show">
        <b-form-group label="Nombre" invalid-feedback="Name is required">
          <b-form-input id="name" v-model="name" required></b-form-input>
        </b-form-group>
        <div class="mt-2 d-md-flex justify-content-md-end">
          <b-button variant="primary" size="md" class="m-1" @click="modalShow = false">
            Close
          </b-button>
          <b-button variant="primary" size="md" class="m-1" type="submit" block>
            Guardar
          </b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Categories from '../../../../services/Categories';
import Alerts from '../../../../services/Alerts';

export default {
  name: "Table",

  data() {
    return {
      items: [],
      categories: [],
      modalShow: false,
      name: "",
      show: true,
    };
  },

  mounted() {
    this.getCategories();
  },

  methods: {
    async getCategories() {
      try {
        const data = await Categories.getCategories();
        if (data.statusCode === 200) {
          this.categories = data.data.map(category => ({
            categoryName: category.categoryName,
          }));
        }

      } catch (error) {
        Alerts.showMessageSuccess("Error al traer categorias", "error");
      }
    },
    async registerCategory(event) {
      event.preventDefault();
      if (!this.name) {
        return;
      }
      try {
        const message = await Categories.registerCategory(
          this.name,
        )
        if (message.statusCode == 201) {
          Alerts.showMessageSuccess(message.message, "success");
          this.modalShow = false;
          this.getCategories();
        } else {
          Alerts.showMessageSuccess("Informacion invalida", "error");
        }
      } catch (error) {
        Alerts.showMessageSuccess("Error al registrar", "error");
      }
    },
    openModal() {
      this.modalShow = true;
    },
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

}

.card:hover {
  transform: scale(1.05);
}

.b-modal-content {
  max-width: 400px;
}

.b-modal-body {
  padding: 20px;
}

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
  background-color: #ED8003;
  position: relative;
}

.linea_punto::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #ED8003;
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
