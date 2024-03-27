<template>
  <div>
    <div class="mt-4">
      <h1>Gestión de categorías</h1>
      <h5>Lista de categorías</h5>
    </div>
    <div class="row mb-3 text-center">
      <div class="d-flex justify-content-end">
        <b-button @click="openModal" class="mb-4">
          <b-icon-plus></b-icon-plus>
          Agregar Categoría</b-button
        >
      </div>
    </div>
    <div class="row text-center">
      <div v-if="categories.length === 0" class="col-12">
        <p>No hay registros disponibles.</p>
      </div>
      <div
        v-for="category in categories"
        :key="category.key"
        class="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-4"
      >
        <div class="card rounded shadow">
          <div class="card-body">
            <h6 class="card-title">{{ category.categoryName }}</h6>
          </div>
        </div>
      </div>
    </div>

    <Loading v-if="showLoading" />

    <b-modal v-model="modalShow" title="Agregar Categoría" hide-footer>
      <b-form @submit="registerCategory" v-show="show">
        <b-row>
          <b-col>
            <label for="name">Nombre</label>
            <b-form-input
              id="name"
              class="r-input"
              type="text"
              v-model="name"
              required
              :state="nameState"
            ></b-form-input>
            <b-form-invalid-feedback :state="nameState">
              Solo debe contener letras y ser más de 1 caracter
            </b-form-invalid-feedback>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <div class="d-flex justify-content-end">
            <b-button @click="modalShow = false" class="me-3">
              <b-icon-x></b-icon-x>
              Cancelar
            </b-button>
            <b-button type="submit" block>
              <b-icon-check></b-icon-check>
              Guardar</b-button
            >
          </div>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Categories from "../../../../../services/Categories";
import Alerts from "../../../../../services/Alerts";
import Loading from "../../../../../components/Loading/loading.vue";
export default {
  name: "Table",
  components: {
    Loading,
  },
  data() {
    return {
      showLoading: false,
      items: [],
      categories: [],
      modalShow: false,
      name: null,
      nameState: null,
      show: true,
    };
  },
  mounted() {
    this.showLoading = true;
    this.getCategories();
  },

  methods: {
    validateLetters(string) {
      const regex = /^([a-zA-Z ]{2,254})+$/;
      if (regex.test(string) && string.trim() !== "") {
        return true;
      }
      return false;
    },
    async getCategories() {
      try {
        const data = await Categories.getCategories();
        if (data.statusCode === 200) {
          this.showLoading = false;
          this.categories = data.data.map((category) => ({
            categoryName: category.categoryName,
          }));
        }
      } catch (error) {
        this.showLoading = false;
        Alerts.showMessageSuccess("Error al traer categorias", "error");
      }
    },
    async registerCategory(event) {
      event.preventDefault();
      this.nameState = this.validateLetters(this.name) ? true : false;

      if (!this.nameState) {
        return;
      }

      try {
        const message = await Categories.registerCategory(this.name);
        if (message.statusCode == 201) {
          Alerts.showMessageSuccess(message.message, "success");
          this.modalShow = false;
          this.getCategories();
        } else {
          Alerts.showMessageSuccess(message, "error");
        }
      } catch (error) {
        this.onReset();
        this.modalShow = false;
        Alerts.showMessageSuccess("Error al registrar", "error");
      }
    },
    openModal() {
      this.onReset();

      this.modalShow = true;
    },
    onReset() {
      this.name = null;
      this.nameState = null;
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
</style>
