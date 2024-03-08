<template>
  <div>
    <b-container class="mt-5">
      <div class="hc-card border border-1 p-5">
        <b-row class="text-start mb-3">
          <b-col cols="12" sm="12" md="12" lg="4" xl="4">
            <img :src="image" class="hc-img h-100" :alt="packageName" />
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="8" xl="8" class="mt-3">
            <h1 class="mb-3 lp-subtitle">{{ packageName }}</h1>
            <span class="badge custom-badge mb-2"> {{ category }}</span>
            <span class="badge custom-badge ms-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1)"
              >
                <path
                  d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
                ></path>
              </svg>
              {{ ability }} personas
            </span>

            <p class="mb-3 text-start fw-semibold">Descripción</p>
            <b-card-text class="p-justify-text">
              {{ packageDescription }}
            </b-card-text>

            <b-row class="mb-5 text-end" v-if="discount <= 0">
              <b-col cols="12" class="fw-semibold">Precio</b-col>
              <b-col cols="12" class="fw-semibold"> $ {{ price }} </b-col>
            </b-row>

            <b-row class="mb-5 text-end" v-if="discount > 0">
              <b-col cols="12" class="fw-semibold">Precio</b-col>
              <b-col cols="12" class="fw-semibold">
                <del>$ {{ price }}</del> &nbsp;
                <span class="discounted-price">$ {{ totalWithDiscount }}</span>
              </b-col>
            </b-row>

            <b-row class="d-flex justify-content-end">
              <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                <router-link :to="{name:'resumenCompra',params:{packageName: packageName}}">
                  <b-button class="r-button w-100">Comprar</b-button>
                </router-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-3" v-if="reviews.length > 0">
          <span class="fw-semibold text-start mb-2"
            >Comentarios de nuestros clientes</span
          >
          <hr />
          <div>
            <div
              v-for="review in displayedReviews"
              :key="review.id_package_has_comment"
            >
              <Review :review="review" />
            </div>
            <b-row v-if="showPagination" class="mt-3">
              <div class="overflow-auto">
                <b-col cols="12" class="d-flex justify-content-center">
                  <b-pagination
                    pills
                    v-model="currentPage"
                    :total-rows="reviews.length"
                    :per-page="itemsPerPage"
                    class="custom-pagination"
                  ></b-pagination>
                </b-col>
              </div>
            </b-row>
          </div>
        </b-row>
      </div>
      <Loading v-if="showLoading" />
    </b-container>
  </div>
</template>


<script>
import Review from "../../components/Review/Review.vue";
import Loading from "../../../../components/Loading/loading.vue";
import packageService from "../../../../services/Packages";
import reviewsService from "../../../../services/PackageComment";
import Alerts from "../../../../services/Alerts";
export default {
  components: {
    Review,
    Loading,
  },
  data() {
    return {
      itemsPerPage: 2,
      currentPage: 1,
      showLoading: true,
      packageName: "Paquete",
      packageDescription: "Descripción del paquete",
      image: "",
      price: 0,
      discount: 0,
      totalWithDiscount: 0,
      ability: 0,
      category: "Categoría",
      reviews: [],
    };
  },
  mounted() {
    const packageName = this.$route.params.packageName;
    this.getPackage(packageName);
    this.getReviews(packageName);
  },

  computed: {
    displayedReviews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.reviews.slice(start, end);
    },
    pages() {
      return Math.ceil(this.reviews.length / this.itemsPerPage);
    },
    showPagination() {
      return this.reviews.length > this.itemsPerPage;
    },
  },

  methods: {
    formatAmount(amount) {
      return amount.toLocaleString("es-MX", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    async getPackage(id) {
      try {
        const data = await packageService.getPackage(id);
        if (data.statusCode === 200) {
          const pack = data.data;
          this.packageName = pack.packageName;
          this.packageDescription = pack.packageDescription;
          this.image = pack.image;
          this.price = this.formatAmount(pack.price);
          this.discount = pack.discount;
          this.ability = pack.ability;
          this.category = pack.category.categoryName;
          this.totalWithDiscount = this.formatAmount(
            pack.price - pack.discount
          );
        } else {
          Alerts.showMessageSuccess("Error al encontrar este paquete", "error");
          this.$router.push({ name: "home" });
        }
        this.showLoading = false;
      } catch (error) {
        Alerts.showMessageSuccess("Error al encontrar este paquete", "error");
        this.$router.push({ name: "home" });
      }
    },
    async getReviews(packageName) {
      try {
        const data = await reviewsService.getReviews(packageName);
        if (data.statusCode === 200) {
          this.reviews = data.data;
        }
      } catch (error) {
        Alerts.showMessageSuccess("Error al encontrar este paquete", "error");
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style >
.p-justify-text {
  text-align: justify;
}
.custom-badge {
  background-color: #875638;
  color: white;
}
.discounted-price {
  color: #ff0000;
  font-size: 18px;
}
.custom-pagination .page-link {
  color: #ffffff;
  background-color: #875638;
  border-color: #875638;
}

.custom-pagination .page-link:hover {
  color: #ffffff;
  background-color: #af7855;
  border-color: #af7855;
}

.custom-pagination .page-item.active .page-link {
  background-color: #af7855;
  border-color: #af7855;
  outline: none;

  outline-width: 0;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.custom-pagination .page-item.disabled .page-link {
  color: rgb(0, 0, 0);
  pointer-events: none;
}
</style>