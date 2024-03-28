<template>
  <div>
    <footer
      class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top"
    >
      <b-col cols="12" sm="6" md="2">
        <div class="d-flex justify-content-center">
          <b-img :src="logo" alt="Logo" class="img-fluid" rounded />
        </div>
      </b-col>
      <b-col class="mt-3" cols="12" sm="6" md="4">
        <h5>Contáctanos</h5>
        <ul class="nav flex-column">
          <li class="nav-item mt-4">
            <a class="nav-link p-0 text-body-secondary">
              <b-icon-telephone-fill /> +52 123 456 789</a
            >
          </li>
          <li class="nav-item mt-4">
            <a class="nav-link p-0 text-body-secondary">
              <b-icon-envelope-fill /> arlindobuffet@gmail.com</a
            >
          </li>
        </ul>
      </b-col>
      <b-col class="mt-3" cols="12" sm="6" md="2">
        <h5>Encuéntranos</h5>
        <ul class="nav flex-column">
          <li class="nav-item mt-4">
            <a class="nav-link p-0 text-body-secondary">
              <b-icon-geo-fill />
              Avenida Palmira #34, Col. Palmira, Cuernavaca, Morelos CP 62490
            </a>
          </li>
        </ul>
      </b-col>
      <b-col class="mt-3" cols="12" sm="6" md="4">
        <h5>Síguenos</h5>
        <ul class="nav flex-column">
          <li class="nav-item mt-4">
            <a href="#" class="nav-link p-0 text-body-secondary">
              <b-icon-facebook />
              arlindobuffet
            </a>
          </li>
          <li class="nav-item mt-4">
            <a class="nav-link p-0 text-body-secondary">
              <b-icon-instagram />
              arlindobuffet
            </a>
          </li>
        </ul>
      </b-col>
    </footer>
  </div>
</template>

<script>
import Logo from "../../assets/img/Logo.jpg";
export default {
  name: "Footer",
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style></style>