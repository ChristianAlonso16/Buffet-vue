<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          class="d-flex justify-content-center"
        >
          <b-card class="hc-card border border-1">
            <h1 class="lp-subtitle fw-bold">Paquetes</h1>
            <b-row class="mx-5 text-start">
              <b-col>
                <p class="mb-2 fw-semibold">Filtro de búsqueda</p>
                <select v-model="selected" class="form-select">
                  <option
                    v-for="option in options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </b-col>
            </b-row>

            <b-row v-if="selected === '3'" class="mx-5 mt-3 text-start">
              <b-col cols="12" sm="12" md="6" lg="6">
                <b-form-datepicker
                  v-model="dateInitial"
                  placeholder="Fecha inicial"
                  class="mb-2"
                ></b-form-datepicker>
              </b-col>
              <b-col cols="12" sm="12" md="6" lg="6">
                <b-form-datepicker
                  v-model="dateFinal"
                  placeholder="Fecha final"
                  class="mb-2"
                ></b-form-datepicker>
              </b-col>
            </b-row>

            <b-row v-if="selected === '4'" class="mx-5 mt-3">
              <b-col>
                <select
                  v-model="selectedCategory"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option
                    v-for="category in categories"
                    :value="category.categoryName"
                    :key="category.categoryName"
                  >
                    {{ category.categoryName }}
                  </option>
                </select>
              </b-col>
            </b-row>

            <b-row>
              <b-col v-if="selected !== null" class="mx-5 my-3">
                <b-button @click="search" class="r-button w-50 fw-bold">
                  Buscar
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col
          v-for="(pkg, id) in packageList"
          :key="id"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          class="mb-5"
        >
          <Card :packet="pkg" />
        </b-col>
      </b-row>
      <Loading v-if="showLoading" />
    </b-container>
  </div>
</template>

<script>
import Alerts from "../../../../services/Alerts";
import packageService from "../../../../services/Packages";
import categoriesService from "../../../../services/Categories";
import Card from "../../components/Card/Card.vue";
import Loading from "../../../../components/Loading/loading.vue";

export default {
  components: {
    Card,
    Loading,
  },
  data() {
    return {
      packageList: [],
      provitionalPackageList: [],
      showLoading: true,
      options: [
        { value: null, text: "Seleccione un filtro" },
        { value: "1", text: "Menor precio" },
        { value: "2", text: "Mayor precio" },
        { value: "3", text: "Rango de fechas" },
        { value: "4", text: "Categoría" },
      ],
      categories: [],
      selectedCategory: null,
      selected: null,
      dateInitial: null,
      dateFinal: null,
    };
  },
  mounted() {
    this.getPackages();
    this.getCategories();
  },
  methods: {
    async getPackages() {
      try {
        const data = await packageService.getPackages();
        if (data.statusCode === 200) {
          if (data.data.length > 0) {
            this.packageList = data.data;
            this.provitionalPackageList = data.data;
          } else {
            Alerts.showMessageSuccess("No hay paquetes disponibles", "info");
            this.$router.push({ name: "home" });
          }
        }
        this.showLoading = false;
      } catch (error) {
        Alerts.showMessageSuccess("Error al traer los paquetes", "error");
        this.showLoading = false;
        this.$router.push({ name: "home" });
      }
    },
    async getCategories() {
      try {
        const data = await categoriesService.getCategories();
        if (data.statusCode === 200) {
          if (data.data.length > 0) {
            this.categories = data.data;
            this.selectedCategory = this.categories[0].categoryName;
          }
        }
      } catch (error) {
        Alerts.showMessageSuccess("Error al traer las categorías", "error");
      }
    },
    search() {
      this.packageList = [...this.provitionalPackageList];

      switch (this.selected) {
        case "1":
          this.packageList.sort((a, b) => a.price - b.price);
          break;
        case "2":
          this.packageList.sort((a, b) => b.price - a.price);
          break;
        case "4":
          this.packageList = this.packageList.filter(
            (pkg) => pkg.category.categoryName === this.selectedCategory
          );
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
</style>