<template>
    <b-container class="w-50 mt-5">
        <h1 class="mb-2 cuenta">Cuenta</h1>
        <b-row class="border border-1 rounded-4 r-container">
            <b-col>
                <h3 class="detalles">Detalles de la cuenta</h3>
            </b-col>
        </b-row>
        <b-row class="border border-1 rounded-4 r-container">
            <b-col class="text-start p-5">
                <b-container>
                    <b-form @submit="onProfile" v-if="show">
                        <label for="" class="lab">Nombre(s)</label>
                        <b-form-input class="mb-3" type="text" v-model="name" required></b-form-input>
                        <label for="" class="lab">Correo electronico</label>
                        <b-form-input class="mb-3" type="email" v-model="email" required autocomplete="current-email"></b-form-input>
                        <label for="" class="lab">Telefono</label>
                        <b-form-input class="mb-3" type="number" v-model="phone" required></b-form-input>
                        <label for="input-live" class="lab">Contraseña</label>
                        <b-form-input class="mb-3" type="password" v-model="password" minlength="8" maxlength="15" required autocomplete="current-password"></b-form-input>
                        <div class="text-end mt-3">
                            <b-button variant="success" type="submit" class="mb-2 r-button w-25">Guardar</b-button>
                        </div>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Vue from "vue";
    import Alerts from "../../services/Alerts";

    export default Vue.extend({
        data() {
            return {
                name: null,
                email: null,
                phone: 0,
                password: null,
                show: true,
            };
        },
        methods: {
            async onProfile(event) {
                event.preventDefault();
                const emailRegex = /^(?=.*[@])(?=.*(gmail\.com|hotmail\.com))[\S]+$/;
                const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;
                console.log(this.email);

                if (!this.email) {
                    console.log("El correo electrónico es obligatorio");
                    return;
                } else if (!emailRegex.test(this.email)) {
                    console.error("Correo electrónico no válido. Solo se permiten Gmail y Hotmail.");
                    return;
                }

                if (!this.password) {
                    console.log("La contraseña es obligatoria");
                    return;
                } else if (!passRegex.test(this.password)) {
                    console.error("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial.");
                    return;
                }
            },
        },
    });
</script>

<style scoped>
    .cuenta {
        align-self: start;
        margin-left: 27px;
        font: 30px Inter, sans-serif;
    }

    @media (max-width: 991px) {
        .cuenta {
            margin-left: 10px;
        }
    }

    .detalles {
        justify-content: center;
        align-items: start;
        color: #4f4f4f;
        padding: 23px 60px 23px 28px;
        font: 24px Inter, sans-serif;
    }

    @media (max-width: 991px) {
        .detalles {
            max-width: 100%;
            padding: 0 20px;
        }
    }

    .lab {
        font-size: 20px;
        font-family: Inter, sans-serif;
    }
    
    @media (max-width: 991px) {
        .lab {
            max-width: 100%;
        }
    }
</style>
