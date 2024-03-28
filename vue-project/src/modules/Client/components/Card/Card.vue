<template>
  <div>
    <router-link
      :to="{ name: 'paquete', params: { packageName: packet.packageName } }"
    >
      <div class="c-container">
        <div>
          <b-img
            :src="packet.image"
            alt="Imagen de paquete"
            fluid
            class="card-image"
            rounded
          />
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
.c-container {
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card-image {
  width: 100% !important;
  height: 300px !important;
  object-fit: cover !important;
}
@media screen and (max-width: 1400px) {
  .card-image {
    height: 170px !important;
  }
}
@media screen and (max-width: 768px) {
  .card-image {
    height: 100% !important;
  }
}
</style>