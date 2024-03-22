<template>
    <b-nav class="navbar navbar-expand-lg shadow" type="dark">
        <b-container fluid class="div-3">
            <b-navbar-brand to="dashboard">
                <img src="../../assets/img/Logo.jpg" alt="Logo" width="74" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px"></ul>
                <b-navbar-nav class="div-4">
                    <b-nav-item to="dashboard" class="div-5">Transporte</b-nav-item>
                    <b-nav-item to="dashboard" class="div-6">Comida</b-nav-item>
                    <b-nav-item to="dashboard" class="div-7">Utileria</b-nav-item>
                </b-navbar-nav>
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px"></ul>
                <b-navbar-nav class="div-8">
                    <b-nav-item to="/login" class="d-flex align-items-center">Iniciar<br>sesión</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-nav>
</template>

<script>
export default {
    name: "HeaderWorker",
};
</script>

<style>
    .div-3 {
        display: flex;
        width: 100%;
        max-width: 1189px;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    @media (max-width: 991px) {
        .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
        }
    }

    .div-4 {
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        gap: 9px;
        font-size: 22px;
        color: rgba(60, 60, 60, 0.98);
        font-weight: 500;
        margin: auto 0;
    }

    .div-5 {
        font-family: Inter, sans-serif;
        flex-grow: 1;
    }

    .div-6 {
        font-family: Inter, sans-serif;
        margin: auto 0;
    }

    .div-7 {
        font-family: Inter, sans-serif;
    }

    .div-8 {
        color: #000;
        text-align: center;
        align-self: stretch;
        margin: auto 0;
        font: 400 20px Inter, sans-serif;
    }
</style>
