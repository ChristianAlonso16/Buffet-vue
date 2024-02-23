<template>
    <b-container class="w-75 mt-5">
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
                        <label for="" class="r-text-inter">Apellido paterno</label>
                        <b-form-input class="mb-3 r-input" type="text" v-model="lastname" required></b-form-input>
                        <label for="" class="r-text-inter">Apellido materno</label>
                        <b-form-input class="mb-3 r-input" type="text" v-model="surname" required></b-form-input>
                        <label for="" class="r-text-inter">Telefono</label>
                        <b-form-input class="mb-3 r-input" type="number" v-model="phone" required></b-form-input>
                        <label for="" class="r-text-inter">Correo electronico</label>
                        <b-form-input class="mb-3 r-input" type="email" v-model="email" required autocomplete="current-email"></b-form-input>
                        <label for="input-live" class="r-text-inter">Contraseña</label>
                        <b-form-input class="mb-5 r-input" type="password" v-model="password" minlength="8" maxlength="15" required autocomplete="current-password"></b-form-input>
                        <div class="text-center mb-5">
                            <b-button variant="success" type="submit" class="mb-2 r-button w-50">Registrarte</b-button>
                            <p>¿Ya tienes una cuenta con nostros?<b-link :to="{ name: 'login' }"> Inicia Sesión</b-link></p>
                        </div>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import registerServices from "../../services/Register";
    import Alerts from "../../services/Alerts";
    export default {
        data() {
            return {
                show: true,
                name: null,
                lastname: null,
                surname:null,
                phone:0,
                email: null,
                password: null,
            }
        },
        methods: {
            async onRegister(event) {
                event.preventDefault();
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;
                if (!this.name || !this.lastname|| !this.phone || !this.surname || !this.email || !this.password) {
                    return;
                }
                if (!regex.test(this.password)) {
                    return;
                }
                try {
                    const message = await registerServices.registerUser(
                        this.name,
                        this.lastname,
                        this.surname,
                        this.phone,
                        this.email,
                        this.password,
                    )
                    if(message.statusCode==201){
                        Alerts.showMessageSuccess("Usuario registrado","success");
                        this.$router.back(-1);

                    }else{
                        Alerts.showMessageSuccess("Informacion invalida","error");
                    }
                    console.log(message);
                } catch (error) {
                    console.log(error);
                    Alerts.showMessageSuccess("Informacion invalida","error");
                }
            }
        },
    }
</script>

<style></style>