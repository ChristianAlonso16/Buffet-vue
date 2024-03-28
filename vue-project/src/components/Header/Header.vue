<template>
  <b-nav class="navbar navbar-expand-lg shadow">
    <b-container fluid>
      <b-link class="navbar-brand" :to="{ name: 'home' }">
        <img src="../../assets/img/Logo.jpg" alt="Logo" width="74"  />
      </b-link>
      <b-button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </b-button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <b-navbar-nav>
        <b-nav-item to="home">Inicio</b-nav-item>
        <b-nav-item to="paquetes">Paquetes</b-nav-item>
      </b-navbar-nav>
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
        </ul>
        <b-nav-item-dropdown right no-caret>
          <template #button-content>
            <b-icon icon="person" color="black"/>
          </template>
          <b-dropdown-item to="" class="d-flex align-items-center">
            Perfil
          </b-dropdown-item>
          <b-dropdown-item to="login" class="d-flex align-items-center">
            Cerrar sesion
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
    </b-container>
  </b-nav>
</template>

<script>
  export default {
      name:"Header"
  }
</script>

<style></style>