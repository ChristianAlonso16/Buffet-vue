<template>
    <b-container class="w-75 mt-5">
        <b-row class="border border-1 rounded-4 r-container">
            <b-col class="text-start p-5">
                <b-container>
                    <b-form @submit="addWorker" v-if="show">
                        <h3 class="mt-4 mb-5 text-center">Registrar empleado</h3>
                        <b-row>
                            <b-col>
                                <b-form-group id="fieldset-name" label="Nombre(s)" label-for="name">
                                    <b-form-input class="mb-5 r-input" id="name" v-model="name" required></b-form-input>
                                </b-form-group>
                                <b-form-group id="fieldset-lastname" label="Apellido(s)" label-for="lastname">
                                    <b-form-input class="mb-5 r-input" id="lastname" v-model="lastname"
                                        required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="fieldset-password" label="Contraseña" label-for="password">
                                    <b-form-input class="mb-5 r-input" type="password" id="password" v-model="password"
                                        required></b-form-input>
                                </b-form-group>
                                <b-form-group id="fieldset-phone" label="Telefono" label-for="phone">
                                    <b-form-input class="mb-5 r-input" id="phone" v-model="phone"
                                        required></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-form-group id="fieldset-email" label="Correo" label-for="email">
                                <b-form-input class="mb-5 r-input" id="email" v-model="email" required
                                    type="email"></b-form-input>
                            </b-form-group>
                        </b-row>
                        <b-row align-h="center">
                            <b-button class="w-50 r-button" type="submit">Registrar</b-button>
                        </b-row>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import addWorker from "../../../../services/AddWorker";
import Alerts from "../../../../services/Alerts";

export default {
    data() {
        return {
            show: true,
            email: null,
            password: null,
            name: null,
            lastname: null,
            phone: null
        }
    },
    methods: {
        async addWorker(event) {
            event.preventDefault()
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;

            if(!this.name || !this.lastname || !this.email || !this.password){
                return;
            }
            if(!regex.test(this.password)){
                return;
            }

            try{
                const message = await addWorker(this.email, this.password, this.name, this.lastname)

                if(message.statusCode==201){
                    return Alerts.showMessageSuccess("Personal de trabajo registrado correctamente", "success");
                }
                return Alerts.showMessageSuccess("Información inválida pero no es interna", "error")
            }catch(error){
                Alerts.showMessageSuccess("Información inválida","error");
            }
        }
    }
}
</script>

<style></style>