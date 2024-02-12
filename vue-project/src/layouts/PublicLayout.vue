<template>
    <div id="app">
      <b-container fluid>
        <b-row class="row">
          <Header v-if="rol" />
        </b-row>
        <div class="d-flex flex-column text-center">
          <b-col class="col">
            <div class="container">
              <router-view />
            </div>
          </b-col>
          <b-col class="col-12">
            <b-container fluid>
              <Footer v-if="rol" />
            </b-container>
          </b-col>
        </div>
      </b-container>
    </div>
  </template>
  
  <script>
  import Footer from '../components/Footer/Footer.vue';
  import Header from '../components/Header/Header.vue';
  export default {
    data() {
      return {
        rol: true
      }
    }, components: {
      Footer, Header
    }
  }
  </script>
  
  <style></style>