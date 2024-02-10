<template>
  <b-container fluid>
    <b-row class="row">
      <HeaderPage/>
    </b-row>
    <div class="d-flex flex-column text-center">
      <b-col class="col">
        <div class="container">
          <router-view></router-view>
        </div>
      </b-col>
      <b-col class="col-12">
        <b-container fluid>
          <FooterPage/>
        </b-container>
      </b-col>
    </div>
  </b-container>
</template>

<script>
  import FooterPage from "../components/Footer/Footer.vue";
  import HeaderPage from"../components/Header/Header.vue";
  import CarouselPage from "../views/Landpage/LandPage.vue";
  export default {
    methods:{},
    data:()=>({}),
    components:{
      FooterPage,HeaderPage,CarouselPage
    }
  }
</script>

<style></style>