<template>
  <div>
    <b-container class="mt-5">
      <div class="hc-card border border-1 p-5">
        <b-row class="text-start mb-3">
          <b-col cols="12" sm="12" md="12" lg="4" xl="4">
            <img :src="image" class="hc-img h-100" :alt="packageName" />
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="8" xl="8">
            <h1 class="mb-3 lp-subtitle">{{ packageName }}</h1>

            <p class="mb-3 text-start fw-semibold">Descripción</p>
            <b-card-text class="p-justify-text">
              {{ packageDescription }}
            </b-card-text>
            <b-row class="mb-5 text-end">
              <b-col cols="12" class="fw-semibold">Total</b-col>
              <b-col cols="12" class="fw-semibold">${{ price }}</b-col>
            </b-row>
            <b-row class="d-flex justify-content-end">
              <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                <b-button class="r-button w-100">Comprar</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <span class="fw-semibold text-start mb-2"
            >Comentarios de nuestros clientes</span
          >
          <hr />
          <Review />
        </b-row>
      </div>
    </b-container>
  </div>
</template>


<script>
import Review from "../../components/Review/Review.vue";
export default {
  components: {
    Review,
  },
  data() {
    return {
      packageName: "",
      packageDescription: "",
      image: "https://myplate-prod.azureedge.us/sites/default/files/styles/large/public/2021-11/RoastChicken_527x323.jpg?itok=gN4dZE6O",
      price: 0,
      discount: 0,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style >
.p-justify-text {
  text-align: justify;
}
</style>