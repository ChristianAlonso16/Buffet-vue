<template>
  <div>
    <div class="d-flex justify-content-end mt-3">
      <b-button @click="openModal">Agregar trabajador</b-button>
    </div>
    <b-modal id="workerModal" title="Agregar trabajador" hide-footer size="lg">
      <template #modal-header="{ close }">
        <h5>Registrar Trabajador</h5>
        <p @click="close()" class="close-tag">X</p>
      </template>
      <b-form @submit="addWorker">
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="name">Nombre(s)</label>
            <b-form-input
              id="name"
              class="r-input"
              type="text"
              v-model="name"
              required
              :state="nameState"
            ></b-form-input>
            <b-form-invalid-feedback :state="nameState">
              Solo debe contener letras
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="lastname">Apellido paterno</label>
            <b-form-input
              class="r-input"
              id="lastname"
              type="text"
              v-model="lastname"
              required
              :state="lastnameState"
            />
            <b-form-invalid-feedback :state="lastnameState">
              Solo debe contener letras
            </b-form-invalid-feedback>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="surname">Apellido materno</label>
            <b-form-input
              class="r-input"
              id="surname"
              type="text"
              v-model="surname"
              required
              :state="surnameState"
            />
            <b-form-invalid-feedback :state="surnameState">
              Solo debe contener letras
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="phone">Teléfono</label>
            <b-form-input
              class="r-input"
              id="phone"
              v-model="phone"
              required
              type="number"
              :state="phoneState"
            />
            <b-form-invalid-feedback :state="phoneState">
              El telefono debe ser 10 dígitos
            </b-form-invalid-feedback>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="email">Correo electrónico</label>
            <b-form-input
              class="r-input"
              id="email"
              v-model="email"
              type="email"
              required
              :state="emailState"
            />
            <b-form-invalid-feedback :state="emailState">
              El correo solo debe ser gmail o hotmail
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="password">Contraseña</label>
            <b-form-input
              class="r-input"
              id="password"
              v-model="password"
              required
              type="password"
              :state="passwordState"
            />
            <b-form-invalid-feedback :state="passwordState">
              La contraseña debe contener al menos una mayúscula, una minúscula,
              un número y un caracter especial
            </b-form-invalid-feedback>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="hours-worked">Horas de trabajo</label>
            <b-form-input
              class="r-input"
              id="hours-worked"
              v-model="hours"
              required
              type="number"
              :state="hoursState"
            />
            <b-form-invalid-feedback :state="hoursState">
              Las horas deben ser mayor a 0 y menor a 24
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="confirm-password">Confirmar contraseña</label>
            <b-form-input
              class="r-input"
              id="confirm-password"
              v-model="confirmPassword"
              required
              type="password"
              :state="confirmPasswordState"
            />
            <b-form-invalid-feedback :state="confirmPasswordState">
              Las contraseñas no coinciden
            </b-form-invalid-feedback>
          </b-col>
        </b-row>
        <b-row>
          <div class="d-flex justify-content-end">
            <b-button @click="$bvModal.hide('workerModal')" class="me-3">
              Cancelar
            </b-button>
            <b-button type="submit" block> Guardar</b-button>
          </div>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import addWorker from "../../../../../services/AddWorker";
import showMessageSuccess from "../../../../../services/Alerts";

export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
      lastname: null,
      surname: null,
      phone: null,
      hours: null,
      confirmPassword: null,
      emailState: null,
      passwordState: null,
      nameState: null,
      lastnameState: null,
      surnameState: null,
      phoneState: null,
      hoursState: null,
      confirmPasswordState: null,
    };
  },
  methods: {
    validatePassword() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&]).+$/;
      if (regex.test(this.password) && this.password.trim() !== "") {
        return true;
      }
      return false;
    },
    validateSamePassword() {
      if (this.password === this.confirmPassword) {
        return true;
      }
      return false;
    },
    validateHours() {
      if (this.hours.trim() !== "") {
        if (this.hours > 0 && this.hours < 24) {
          return true;
        }
      }
      return false;
    },
    validateEmail() {
      if (
        this.email.trim().endsWith("@gmail.com") ||
        (this.email.trim().endsWith("@hotmail.com") && this.email.trim() !== "")
      ) {
        return true;
      }
      return false;
    },
    validateLetters(string) {
      const regex = /^([a-zA-Z ]{2,254})+$/;
      if (regex.test(string) && string.trim() !== "") {
        return true;
      }
      return false;
    },
    validatePhone() {
      const regex = /^\d{10,10}$/;
      if (regex.test(this.phone) && this.phone.trim() !== "") {
        return true;
      }
      return false;
    },
    async addWorker(event) {
      event.preventDefault();
      this.nameState = this.validateLetters(this.name) ? true : false;
      this.lastnameState = this.validateLetters(this.lastname) ? true : false;
      this.surnameState = this.validateLetters(this.surname) ? true : false;
      this.emailState = this.validateEmail() ? true : false;
      this.passwordState = this.validatePassword() ? true : false;
      this.phoneState = this.validatePhone() ? true : false;
      this.hoursState = this.validateHours() ? true : false;
      this.confirmPasswordState = this.validateSamePassword() ? true : false;

      if (
        !this.nameState ||
        !this.lastnameState ||
        !this.surnameState ||
        !this.emailState ||
        !this.passwordState ||
        !this.phoneState ||
        !this.hoursState ||
        !this.confirmPasswordState
      ) {
        return;
      }

      try {
        const message = await addWorker(
          this.email,
          this.password,
          this.name,
          this.surname,
          this.lastname,
          this.phone
        );

        if (message.statusCode === 201) {
          this.$bvModal.hide("workerModal");
          this.onReset(event);

          this.$emit("update-users");

          showMessageSuccess(
            "Personal de trabajo registrado correctamente",
            "success"
          );
        }
        showMessageSuccess(
          "Información inválida. Inténtelo más tarde",
          "error"
        );
      } catch (error) {
        showMessageSuccess("Error interno. Inténtelo más tarde", "error");
        throw error;
      }
    },
    openModal() {
      this.onReset();
      this.$bvModal.show("workerModal");
    },
    onReset() {
      this.name = "";
      this.lastname = "";
      this.surname = "";
      this.email = "";
      this.password = "";
      this.phone = "";
      this.hours = "";
      this.confirmPassword = "";
      this.nameState = null;
      this.lastnameState = null;
      this.surnameState = null;
      this.emailState = null;
      this.passwordState = null;
      this.phoneState = null;
      this.hoursState = null;
      this.confirmPasswordState = null;
    },
  },
};
</script>

<style>
.close-tag {
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  color: #404e67;
}
.r-input {
  border-color: #404e67 !important;
}
</style>
