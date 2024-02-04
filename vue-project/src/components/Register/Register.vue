<template lang="">
    <b-container class="w-75">
        <b-row class="border border-1 rounded-4 r-container">
            <b-col cols="6" class="p-0 d-none d-lg-block col-md-5 col-lg-5 col-xl-5">
                <b-img class="r-image rounded-start-4 w-100 h-100" src="https://weezevent.com/wp-content/uploads/2023/08/30164935/organizar-un-banquete.jpg" alt="imagen-registro"></b-img>
            </b-col>
            <b-col class="text-start p-5">
                <b-container>
                    <b-form @submit="onRegister" v-if="show">
                        <h3 class="mt-4 mb-5 text-center">Registro</h3>
                        <label for="" class="r-text-inter" >Nombre(s)</label>
                        <b-form-input class="mb-3 r-input" type="text" v-modal="name" required></b-form-input>
                        <label for="" class="r-text-inter">Apellido(s)</label>
                        <b-form-input class="mb-3 r-input" type="text" v-modal="lastname" required></b-form-input>
                        <label for="" class="r-text-inter">Correo electronico</label>
                        <b-form-input class="mb-5 r-input" type="email" v-modal="email" required></b-form-input>
                        <div class="text-center mb-5">
                            <b-button variant="success" type="submit" class="mb-2 r-button w-50">Registrarte</b-button>
                            <p>¿Ya tienes una cuenta con nostros?<a href=""> inicia sesion</a></p>
                        </div>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            show: true,
            name: '',
            lastname: '',
            email: '',
        }
    },
    methods: {
        onRegister(event) {
            event.preventDefault();
            const emailRegex = /^(?=.*[@])(?=.*(gmail\.com|hotmail\.com))[\S]+$/;
            
            if (!emailRegex.test(this.email)) {
                console.error("Correo electrónico no válido. Solo se permiten Gmail y Hotmail.");
                return;
            }

            console.log("Nombre:", this.name);
            console.log("Apellido:", this.lastname);
            console.log("Correo electrónico:", this.email);
        }
    },
}
</script>
<style lang="">
    
</style>