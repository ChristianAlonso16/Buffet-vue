<template>
    <b-container class="w-75 mt-5">
        <Loading v-if="show"/>
        <b-row class="border border-1 rounded-4 r-container">
            <b-col cols="6" class="p-0 d-none d-lg-block" sm="5" md="5" lg="5" xl="5">
                <b-img class="r-image rounded-start-4 w-100 h-100"
                    :src="image"
                    alt="imagen-registro"></b-img>
            </b-col>
            <b-col class="text-start p-5">
                <b-container>
                    <b-form @submit="onRegister">
                        <b-row>
                            <h3 class="mt-4 mb-5 text-center">Registro</h3>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-3">
                                <label for="name" class="r-text-inter">Nombre(s)</label>
                                <b-form-input id="name" class="r-input" type="text" v-model="name" required
                                    :state="nameState"></b-form-input>
                                <b-form-invalid-feedback :state="nameState">
                                    Solo debe contener letras
                                </b-form-invalid-feedback>
                            </b-col>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-3">
                                <label for="lastname" class="r-text-inter">Apellido paterno</label>
                                <b-form-input id="lastname" class="r-input" type="text" v-model="lastname" required
                                    :state="lastnameState"></b-form-input>
                                <b-form-invalid-feedback :state="lastnameState">
                                    Solo debe contener letras
                                </b-form-invalid-feedback>
                            </b-col>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-3">
                                <label for="surname" class="r-text-inter">Apellido materno</label>
                                <b-form-input id="surname" class="r-input" type="text" v-model="surname" required
                                    :state="surnameState"></b-form-input>
                                <b-form-invalid-feedback :state="surnameState">
                                    Solo debe contener letras
                                </b-form-invalid-feedback>
                            </b-col>
                            <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-3">
                                <label for="phone" class="r-text-inter">Telefono</label>
                                <b-form-input id="phone" class="r-input" type="tel" v-model="phone" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" minlength="10" maxlength="10" placeholder="(777)-111-1111" required
                                    :state="phoneState"></b-form-input>
                                <b-form-invalid-feedback :state="phoneState">
                                    El telefono solo debe ser 10 digitos
                                </b-form-invalid-feedback>
                            </b-col>
                            <b-col cols="12" class="mb-3">
                                <label for="email" class="r-text-inter">Correo electronico</label>
                                <b-form-input id="email" class="r-input" type="email" v-model="email" required :state="emailState"
                                    autocomplete="current-email"></b-form-input>
                                <b-form-invalid-feedback :state="emailState">
                                    El correo solo debe ser gmail o hotmail
                                </b-form-invalid-feedback>
                            </b-col>
                            <b-col cols="12" class="mb-5">
                                <label for="password" class="r-text-inter">Contraseña</label>
                                <b-form-input id="password" class="r-input" type="password" v-model="password" minlength="8" maxlength="15"
                                    :state="passwordState" required
                                    autocomplete="current-password"></b-form-input>
                                <b-form-invalid-feedback :state="passwordState">
                                    La contraseña debe contener almenos una mayúscula,una minúscula, un número y un caracter especial.
                                </b-form-invalid-feedback>
                            </b-col>
                            <b-col cols="12" class="text-center mb-5">
                                <b-button variant="success" type="submit" class="mb-2 r-button w-50">Registrarte</b-button>
                                <p>¿Ya tienes una cuenta con nostros?<b-link :to="{ name: 'login' }"> Inicia Sesión</b-link>
                                </p>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import registerServices from "../../services/Register";
import Alerts from "../../services/Alerts";
import Loading from "../../components/Loading/loading.vue";
import imageRegister from "../../assets/img/r-img.jpg"
export default {
    data() {
        return {
            image: imageRegister,
            show: false,
            name: null,
            lastname: null,
            surname: null,
            phone: null,
            email: null,
            password: null,
            nameState: null,
            lastnameState: null,
            surnameState: null,
            phoneState: null,
            emailState: null,
            passwordState: null,
        }
    },
    components: {
        Loading,
    },
    methods: {
        validatePassword() { 
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&]).+$/;
            if (regex.test(this.password) && this.password.trim() !== '') {
                return true;
            }
            return false;
        },
        validateEmail() {
            if (this.email.trim().endsWith('@gmail.com') || this.email.trim().endsWith('@hotmail.com') && this.email.trim() !== '') {
                return true;
            }
            return false;
        },
        validateLetters(string){
            const regex = /^([a-zA-Z ]{2,254})+$/;
            if(regex.test(string) && string.trim() !== ''){
                return true;
            }
            return false;
        },
        validatePhone() {
            const regex = /^\d{10,10}$/;
            if(regex.test(this.phone) && this.phone.trim() !== ""){
                return true;
            }
            return false;
        },
        async onRegister(event) {
            event.preventDefault();
            this.nameState = this.validateLetters(this.name) ? true : false;
            this.lastnameState = this.validateLetters(this.lastname) ? true : false;
            this.surnameState = this.validateLetters(this.surname) ? true : false;
            this.phoneState = this.validatePhone() ? true : false;
            this.emailState = this.validateEmail() ? true : false;
            this.passwordState = this.validatePassword() ? true : false;

            if (!this.nameState || !this.lastnameState || !this.surnameState || !this.phoneState || !this.emailState || !this.passwordState) {
                return;
            }

            try {
                this.show = true;
                const message = await registerServices.registerUser(this.name,this.lastname,this.surname,this.phone,this.email,this.password)
                if (message.statusCode == 201) {
                    Alerts.showMessageSuccess("Usuario registrado", "success");
                    this.$router.back(-1);
                } else {
                    Alerts.showMessageSuccess("Informacion invalida", "error");
                }
            } catch (error) {
                Alerts.showMessageSuccess("Informacion invalida", "error");
            }finally{
                this.show = false;
            }
        }
    },
}
</script>

<style></style>