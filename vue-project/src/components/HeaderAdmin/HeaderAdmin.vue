<template>
    <b-nav class="navbar navbar-expand-lg shadow navBg" data-bs-theme="dark">
        <b-container fluid>
                <img class="imagen" src="../../assets/img/iconoAdmin.png" alt="Admin" width="74" />
                <div class="vertical"></div>
                <b-navbar-brand class="ms-3">Administrador</b-navbar-brand>
            <b-button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </b-button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <b-navbar-nav>
                    <b-nav-item to="/admin/dashboard">Inicio</b-nav-item>
                    <b-nav-item to="/admin/clientes">Clientes</b-nav-item>
                    <b-nav-item to="/admin/trabajadores">Trabajadores</b-nav-item>
                    <b-nav-item to="/admin/paquetes">Paquetes</b-nav-item>
                    <b-nav-item to="/admin/categorias">Categorias</b-nav-item>
                </b-navbar-nav>
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">

                </ul>
                <b-nav-item-dropdown right no-caret>
                    <template #button-content>
                        <b-icon icon="person" color="white" />
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
    data() {
        return {
            user: {
                name: 'Carsi',
            },
            show: false,
        };
    },
    methods: {
        handleShow() {
            console.log(this.show);
            this.show = !this.show;
        },
        onLogout() {
        },
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
    Background-color: #272d36;
}

.vertical {
    border-left: 2px solid white;
    height: 50px;
}

</style>
  