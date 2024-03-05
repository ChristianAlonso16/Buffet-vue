<template>
  <div>
    <router-link
      :to="{ name: 'paquete', params: { packageName: packet.packageName } }"
    >
      <div class="c-container">
        <div class="c-image-container">
          <img :src="packet.image" alt="Imagen de paquete" class="c-image" />
        </div>
        <div class="c-overlay">
          <p class="lp-subtitle fw-bold c-title">{{ packet.packageName }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
<script>
export default {
  props: {
    packet: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
<style>
</style>