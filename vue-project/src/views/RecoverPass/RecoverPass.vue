<template>
    <b-container class="w-50 mt-5">
        <b-row class="border border-1 rounded-4 r-container px-5 d-inline-flex justify-content-center">
            <b-col cols="10">
                <h5 class="mt-5 mb-5 text-center">¿Tienes problemas para iniciar sesión?</h5>
                <p class="mb-5 text-center">Ingresa tu correo electronico asociado a tu cuenta</p>
                <b-form-input class="mb-4" type="email" v-model="email" placeholder="Correo electronico" required autocomplete="current-email"></b-form-input>
                <div class="text-center mb-5">
                    <b-button variant="success" type="submit" class="mb-4 r-button w-100">Siguiente</b-button>
                    <div class="mb-4 linea_punto"></div>
                    <p>Crear cuenta nueva<b-link :to="{ name: 'register' }"> Registraté</b-link></p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script></script>

<style>
    .linea_punto {
        margin: 0 auto;
        max-width: 290px;
        width: 100%;
        height: 2px;
        background-color: #ed8003;
        position: relative;
    }

    .linea_punto::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #ed8003;
        border: 8px solid #fff;
        left: 50%;
        top: -10px;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-clip: padding-box;
        box-sizing: content-box;
    }
</style>