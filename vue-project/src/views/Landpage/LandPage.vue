<template>
  <div>
    <b-container>
      <div class="lp-image">
        <div class="lp-overlay"></div>
        <h1 class="fw-bold lp-tittle">Buffet</h1>
      </div>

      <b-row class="mt-5" v-if="showTitlePackages">
        <h1 class="lp-subtitle fw-bold">Paquetes</h1>
      </b-row>

      <b-row class="mt-5">
        <b-col
          v-for="(pkg, id) in packageList"
          :key="id"
          cols="12"
          sm="12"
          md="4"
          class="mb-5"
        >
          <Card :packet="pkg" />
        </b-col>
      </b-row>

      <b-row class="m-1 mb-5" v-if="showMore">
        <b-button block class="r-button" to="/paquetes">Ver más</b-button>
      </b-row>

      <b-row>
        <b-col cols="12" sm="12" md="6" class="mb-5">
          <b-card>
            <h1 class="mt-4 mb-4">Calidad</h1>
            <span class="lp-line"></span>
            <p class="m-5 text-start">
              Nos destacamos en la creación de eventos, donde cada detalle se
              adapta a sus necesidades y supera sus expectativas. Cumplimos con
              sus deseos en cada aspecto.
            </p>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="6" class="mb-5">
          <b-card class="lp-img-container">
            <div class="lp-image-quality"></div>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="12" md="6" class="mb-5">
          <b-card class="lp-img-container">
            <div class="lp-image-personalization"></div>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="6" class="mb-5">
          <b-card>
            <h1 class="mt-4 mb-4">Personalización</h1>
            <span class="lp-line"></span>
            <p class="m-5 text-start">
              Realizamos un paquetes con todos los servicios y amenidades
              incluidas de acuerdo a tus gustos y necesidades.
            </p>
          </b-card>
        </b-col>
      </b-row>

      <h1 class="mt-5 lp-subtitle fw-bold">Nuestros eventos</h1>

      <b-row class="mt-5">
        <b-col
          v-for="(event, id) in eventImages"
          :key="id"
          cols="12"
          sm="6"
          md="3"
          class="mb-5"
        >
          <div>
            <b-img :src="event.image" fluid rounded :alt="event.alt"></b-img>
          </div>
        </b-col>
      </b-row>
      <Loading v-if="showLoading" />
    </b-container>
  </div>
</template>

<script>
import packageService from "../../services/Packages";
import Card from "../../modules/Client/components/Card/Card.vue";
import Loading from "../../components/Loading/loading.vue";
import event1 from "../../assets/img/our-events-1.jpg";
import event2 from "../../assets/img/our-events-2.jpeg";
import event3 from "../../assets/img/our-events-3.jpg";
import event4 from "../../assets/img/our-events-4.jpeg";
import Alerts from "../../services/Alerts";

export default {
  components: {
    Card,
    Loading,
  },
  data() {
    return {
      showMore: false,
      showTitlePackages: false,
      showLoading: true,
      eventImages: [
        {
          image: event1,
          alt: "Nuestros-eventos-1",
        },
        {
          image: event2,
          alt: "Nuestros-eventos-2",
        },
        {
          image: event3,
          alt: "Nuestros-eventos-3",
        },
        {
          image: event4,
          alt: "Nuestros-eventos-4",
        },
      ],
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
          if (data.data.length > 0) {
            this.packageList = data.data.slice(0, 6);
            this.showTitlePackages = true;
          } else {
            this.showTitlePackages = false;
          }
          if (data.data.length > 6) {
            this.showMore = true;
          }
        }
        this.showLoading = false;
      } catch (error) {
        Alerts.showMessageSuccess("Error al traer los paquetes", "error");
        this.showLoading = false;
      }
    },
  },
};
</script>

<style>
</style>
