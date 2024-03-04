<template>
    <div>
        <b-button @click="$bvModal.show('workerModal')" class="buttonAdd">Agregar trabajador</b-button>
        <b-modal id="workerModal" title="Agregar trabajador" hide-footer>
            <template #modal-header="{ close }">    
                <h5>Registrar Trabajador</h5>
                <p @click="close()" class="close-tag">X</p>
            </template>
            <b-form @submit="addWorker" v-if="show">
                <b-row>
                    <b-col>
                        <b-form-group
                            id="fieldset-name"
                            label="Nombre(s)"
                            label-for="input-name"
                        >
                            <b-form-input
                                class="mb-5 r-input"
                                id="input-name"
                                v-model="name"
                                required
                            />
                        </b-form-group>
                        <b-form-group
                            id="fieldset-lastname"
                            label="Apellido paterno"
                            label-for="input-lastname"
                        >
                            <b-form-input
                                class="mb-5 r-input"
                                id="input-lastname"
                                v-model="lastname"
                                required
                            />
                        </b-form-group>
                        <b-form-group
                            id="fieldset-email"
                            label="Correo"
                            label-for="input-email"
                        >
                            <b-form-input
                                class="mb-5 r-input"
                                id="input-email"
                                v-model="email"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            id="fieldset-phone"
                            label="Teléfono"
                            label-for="input-phone"
                        >
                            <b-form-input
                                class="mb-5 r-input"
                                id="input-phone"
                                v-model="phone"
                                required
                            />
                        </b-form-group>
                        <b-form-group
                            id="fieldset-surname"
                            label="Apellido materno"
                            label-for="input-surname"
                        >
                            <b-form-input
                                class="mb-5 r-input"
                                id="input-surname"
                                v-model="surname"
                                required
                            />
                        </b-form-group>
                        <b-form-group
                            id="fieldset-password"
                            label="Contraseña"
                            label-for="input-password"
                        >
                            <b-form-input
                                class="mb-5 r-input"
                                id="input-password"
                                v-model="password"
                                required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-button class="w-50 buttonAdd" type="submit">Registrar</b-button>
                </b-row>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import addWorker from '../../../../../services/AddWorker';
import showMessageSuccess from '../../../../../services/Alerts';

export default {
    data() {
        return {
            show: true,
            email: null,
            password: null,
            name: null,
            lastname: null,
            surname: null,
            phone: null
        };
    },
    methods: {
        async addWorker(ev) {
            ev.preventDefault();

            if (!this.name || !this.lastname || !this.email || !this.password || !this.phone || !this.surname) { 
                return;
            }

            try {
                const message = await addWorker(this.email, this.password, this.name, this.surname, this.lastname, this.phone);

                if (message.statusCode === 201) {
                    this.$bvModal.hide('workerModal');

                    this.email = null;
                    this.password = null;
                    this.name = null;
                    this.lastname = null;
                    this.surname = null;
                    this.phone = null;

                    this.$emit('update-users');

                    return showMessageSuccess("Personal de trabajo registrado correctamente", "success");
                }
                return showMessageSuccess("Información inválida. Inténtelo más tarde","error");
            } catch (error) {
                showMessageSuccess("Error interno. Inténtelo más tarde","error");
                throw error;
            }
        }
    }
};
</script>

<style>
.close-tag{
    cursor: pointer;
    font-size: large;
    font-weight: bold;
    color: #404e67;
}
.buttonAdd {
    background-color: #404e67;
  border-color: #404e67;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
