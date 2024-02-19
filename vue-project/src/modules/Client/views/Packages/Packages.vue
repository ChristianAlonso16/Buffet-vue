<template>
  <div>
    <b-container class="mt-5">
      <h1 class="lp-subtitle fw-bold">Paquetes</h1>
      <b-row class="mt-5">
        <b-col
          v-for="(pkg, index) in packageList"
          :key="index"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          class="mb-5"
        >
          <Card :image="pkg.image" :name="pkg.packageName" :to="pkg.to" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import packageService from "../../../../services/Packages";
import Card from "../../components/Card/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      packageList: [],
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
          this.packageList = data.data.map((packages) => ({
            packageName: packages.packageName,
            image: packages.image,
            packageDescription: packages.packageDescription,
            price: packages.price,
            discount: packages.discount,
            to: "/paquete/" + packages.id.toString(),
          }));
        }
      } catch (error) {
        Alerts.showMessageSuccess("Error al traer los paquetes", "error");
      }
    },
  },
};
</script>

<style>
</style>