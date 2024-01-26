<template lang="">
        <b-nav class="navbar navbar-expand-lg shadow">
          <b-container fluid>
            <a class="navbar-brand" href="#">
              <img src="../../assets/img/Logo.jpg" alt="Logo" width="100"  />
            </a>
            <b-button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </b-button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul
                class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style="--bs-scroll-height: 100px"
              >
              
                <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Transporte
                  </a>          
                  </template>
            <b-dropdown-item href="#">Urban</b-dropdown-item>
            <b-dropdown-item href="#">Auto</b-dropdown-item>
          </b-nav-item-dropdown>
                <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Comida
                  </a>          
                  </template>
            <b-dropdown-item href="#">Fiesta infantil</b-dropdown-item>
            <b-dropdown-item href="#">Graduacion</b-dropdown-item>
            <b-dropdown-item href="#">Boda</b-dropdown-item>
          </b-nav-item-dropdown>
 
          </b-nav-item-dropdown>
                <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Utileria
                  </a>          
                  </template>
            <b-dropdown-item href="#">Mesas</b-dropdown-item>
            <b-dropdown-item href="#">Sillas</b-dropdown-item>
            <b-dropdown-item href="#">Renta de sonido</b-dropdown-item>
          </b-nav-item-dropdown>
                </li>
              </ul>
              <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <b-icon
                icon="person" color="black"
              />
            </template>
            <b-dropdown-item href="#" class="d-flex align-items-center">
              Perfil
            </b-dropdown-item>
            <b-dropdown-item href="#" class="d-flex align-items-center">
              Cerrar sesion
            </b-dropdown-item>
          </b-nav-item-dropdown>
            </div>
          </b-container>
        </b-nav>
</template>
<script>
export default {
    name:"HeaderPage"
}
</script>
<style lang="">
    
</style>