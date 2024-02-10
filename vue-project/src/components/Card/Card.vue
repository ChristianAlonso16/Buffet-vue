<template>
  <div>
    <router-link :to="to">
      <div class="c-container">
        <div class="c-image-container">
          <b-img
            :src="imageUrl"
            alt="Imagen de paquete"
            class="c-image"
            fluid
          ></b-img>
        </div>
        <div class="c-overlay">
          <p class="lp-subtitle">{{ name }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
  
<style>
</style>