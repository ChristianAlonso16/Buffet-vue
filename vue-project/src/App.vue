<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue';
import Header from './components/Header/Header.vue';
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