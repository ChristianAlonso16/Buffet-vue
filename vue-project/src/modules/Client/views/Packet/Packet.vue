<template>
  <div>
    <b-container class="w-75 mt-5">
      <b-card
        no-body
        class="overflow-hidden border border-1 rounded-4 r-container p-4"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://picsum.photos/200/300"
              alt="Image"
              rounded
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h1 class="mb-3 lp-subtitle">{{ packageName }}</h1>
              <p class="mb-3 text-start">Descripción</p>
              <b-card-text class="p-description-text">
                {{ packageDescription }}
              </b-card-text>
              <h4 class="mb-4 lp-subtitle text-end">$ {{ price }}</h4>
              <b-button variant="success" to="/" class="mb-3 r-button w-50"
                >Comprar</b-button
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>


<script>
import Alerts from "../../../../services/Alerts";
import packageService from "../../../../services/Packages";
export default {
  data() {
    return {
      packageName: "",
      packageDescription: "",
      image: "",
      price: 0,
      discount: 0,
    };
  },
  mounted() {
    this.getPackage();
  },
  methods: {
    async getPackage() {
      try {
        const id = this.$route.params.id;
        const data = await packageService.getPackage(id);
        if (data.statusCode === 200) {
          this.packageName = data.data.packageName;
          this.packageDescription = data.data.packageDescription;
          this.image = data.data.image;
          this.price = data.data.price;
          this.discount = data.data.discount;
        }
      } catch (error) {
        Alerts.showMessageSuccess("Error al traer los paquetes", "error");
      }
    },
  },
};
</script>

<style>
.p-description-text {
  text-align: justify;
  text-justify: inter-word;
}
</style>