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
                        <b-form-input class="mb-3 r-input" type="text" v-model="name" required></b-form-input>
                        
                        <label for="" class="r-text-inter">Apellido(s)</label>
                        <b-form-input class="mb-3 r-input" type="text" v-model="lastname" required></b-form-input>
                        
                        <label for="" class="r-text-inter">Correo electronico</label>
                        <b-form-input class="mb-3 r-input" type="email" v-model="email" required></b-form-input>

                        <label for="input-live" class="r-text-inter">Password</label>
                        <b-form-input class="mb-5 r-input" type="password" v-model="password" minlength="8" maxlength="15" required></b-form-input>
                        
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
import registerServices from "../../services/Register";

export default {
    data() {
        return {
            show: true,
            name: null,
            lastname: null,
            email: null,
            password: null,
        }
    },
    methods: {
        async onRegister(event) {
            event.preventDefault();
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;
            if (!this.name || !this.lastname || !this.email || !this.password) {
                return;
            }
            if (!regex.test(this.password)) {
                return;
            }
            try {
                const message = await registerServices.registerUser(
                    this.name,
                    this.lastname,
                    this.email,
                    this.password,
                )

                console.log(message);
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>
<style lang="">
    
</style>