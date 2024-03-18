<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    class="navbar navbar-expand-lg shadow navBg"
  >
    <b-navbar-brand to="/admin/dashboard">
      <img
        class="imagen"
        src="../../assets/img/iconoAdmin.png"
        alt="Admin"
        width="74"
    /></b-navbar-brand>
    <b-navbar-brand class="ms-2">Administrador</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="ms-2">
      <b-navbar-nav>
        <b-nav-item to="/admin/dashboard">Inicio</b-nav-item>
        <b-nav-item to="/admin/clientes">Clientes</b-nav-item>
        <b-nav-item to="/admin/trabajadores">Trabajadores</b-nav-item>
        <b-nav-item to="/admin/paquetes">Paquetes</b-nav-item>
        <b-nav-item to="/admin/categorias">Categorías</b-nav-item>
        <b-nav-item-dropdown right no-caret>
          <template #button-content>
            <b-icon-person-fill color="white" />
          </template>
          <b-dropdown-item to="" class="d-flex align-items-center">
            Perfil
          </b-dropdown-item>
          <b-dropdown-item to="login" class="d-flex align-items-center">
            Cerrar sesion
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
  
<script>
export default {
  data() {
    return {
      user: {
        name: "Carsi",
      },
      show: false,
    };
  },
  methods: {
    handleShow() {
      console.log(this.show);
      this.show = !this.show;
    },
    onLogout() {},
  },
  components: {},
};
</script>
  
  
<style>
.imagen {
  width: auto;
  height: 45px;
}

.navBg {
  background-color: #272d36;
}
</style>
  