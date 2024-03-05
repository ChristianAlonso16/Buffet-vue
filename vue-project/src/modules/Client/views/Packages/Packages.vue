<template>
  <div>
    <b-container class="mt-5">
      <h1 class="lp-subtitle fw-bold">Paquetes</h1>
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
      showLoading: true,
    };
  },
  mounted() {
    this.getPackages();
  },
  methods: {
    async getPackages() {
      try {
        const data = await packageService.getPackages();
        if (data.statusCode === 200) {
          if (data.data.length > 0) {
            this.packageList = data.data;
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
  },
};
</script>

<style>
</style>