<template>
    <b-container class="w-75">
        <b-row class="border border-1 rounded-4 r-container">
            <b-col class="text-start p-5">
                <b-container>
                    <b-form @submit="onLogin" v-if="show">
                        <h3 class="mt-4 mb-5 text-center">Iniciar Sesión</h3>
                        <label for="" class="r-text-inter">Correo electronico</label>
                        <b-form-input class="mb-5 r-input" type="email" v-modal="email" required></b-form-input>
                        <label for="" class="r-text-inter">Contraseña</label>
                        <b-form-input class="mb-3 r-input" type="password" v-modal="password" minlength="8" maxlength="15" required></b-form-input>
                        <div class="text-center mb-5">
                            <b-button variant="success" type="submit" class="mb-2 r-button w-50">Entrar</b-button>
                            <p>¿Aún no tienes una cuenta?<b-link :to="{ name: 'register' }"> Registraté</b-link></p>
                        </div>
                    </b-form>
                </b-container>
            </b-col>
            <b-col cols="6" class="p-0 d-none d-lg-block col-md-5 col-lg-5 col-xl-5">
                <b-img class="r-image rounded-end-4 w-100 h-100" src="http://fitfoodsmexico.com/wp-content/uploads/2022/08/IMAGEN-1-1-1024x683.jpg" alt="imagen-registro"></b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import loginServices from "../../services/Login";

    export default {
        data() {
            return {
                show: true,
                email: null,
                password: null,
            }
        },
        methods: {
            async onLogin(event) {
                event.preventDefault();
                const emailRegex = /^(?=.*[@])(?=.*(gmail\.com|hotmail\.com))[\S]+$/;
                const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;

                if (!this.email) {
                    console.log("El correo electrónico es obligatorio");
                    return;
                }else if (!emailRegex.test(this.email)) {
                    console.error("Correo electrónico no válido. Solo se permiten Gmail y Hotmail.");
                    return;
                }

                if (!this.password) {
                    console.log("La contraseña es obligatoria");
                    return;
                }else if (!passRegex.test(this.password)) {
                    console.error("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial.");
                    return;
                }

                try {
                    const message = await loginServices.loginUser(
                        this.email,
                        this.password,
                    )
                } catch (error) {
                    console.log(error);
                }
            }
        },
    }
</script>

<style></style>