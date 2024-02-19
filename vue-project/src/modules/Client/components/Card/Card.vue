<template>
  <div>
    <router-link :to="to">
      <div class="c-container">
        <div class="c-image-container">
          <img :src="image" alt="Imagen de paquete" class="c-image" />
        </div>
        <div class="c-overlay">
          <p
           class="lp-subtitle fw-bold c-title">{{ name }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
<script>
export default {
  props: {
    image: {
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