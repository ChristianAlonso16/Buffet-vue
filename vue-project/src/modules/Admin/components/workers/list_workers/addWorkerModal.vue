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
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="start">Inicio de jornada</label>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <label for="end">Fin de jornada</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="mb-4 d-flex justify-content-center"
          >
            <b-time v-model="startHour" header-tag show-seconds locale="en">
            </b-time>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            class="mb-4 d-flex justify-content-center"
          >
            <b-time
              v-model="endHour"
              header-tag
              show-seconds
              locale="en"
              hours="h23"
            >
            </b-time>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <b-form-invalid-feedback :state="startHourState">
              La hora debe ser menor a la hora de fin o no puede estar vacía
            </b-form-invalid-feedback>
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6" xl="6" class="mb-4">
            <b-form-invalid-feedback :state="endHourState">
              La hora debe ser mayor a la hora de inicio o no puede estar vacía
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
import Alerts from "../../../../../services/Alerts";
import WorkerService from "../../../../../services/WorkerService";
export default {
  data() {
    return {
      numWorker: null,
      password: null,
      name: null,
      lastname: null,
      surname: null,
      phone: null,
      startHour: null,
      endHour: null,
      confirmPassword: null,
      passwordState: null,
      nameState: null,
      lastnameState: null,
      surnameState: null,
      phoneState: null,
      confirmPasswordState: null,
      startHourState: null,
      endHourState: null,
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
    validateHours() {
      if (this.startHour === null || this.endHour === null) {
        return false;
      }
      if (this.startHour.trim() !== "" && this.endHour.trim() !== "") {
        if (this.startHour < this.endHour) {
          return true;
        }
      }
      return false;
    },
    validateEndHour() {
      if (this.startHour === null || this.endHour === null) {
        return false;
      }
      if (this.endHour.trim() !== "") {
        if (this.endHour > this.startHour) {
          return true;
        }
      }
      return false;
    },
    async addWorker(event) {
      event.preventDefault();
      this.nameState = this.validateLetters(this.name) ? true : false;
      this.lastnameState = this.validateLetters(this.lastname) ? true : false;
      this.surnameState = this.validateLetters(this.surname) ? true : false;
      this.passwordState = this.validatePassword() ? true : false;
      this.phoneState = this.validatePhone() ? true : false;
      this.confirmPasswordState = this.validateSamePassword() ? true : false;
      this.startHourState = this.validateHours() ? true : false;
      this.endHourState = this.validateEndHour() ? true : false;
      if (
        !this.nameState ||
        !this.lastnameState ||
        !this.surnameState ||
        !this.passwordState ||
        !this.phoneState ||
        !this.confirmPasswordState ||
        !this.startHourState ||
        !this.endHourState
      ) {
        return;
      }
      this.numWorker = this.generateNumberWorker();
      console.log(this.numWorker);
      console.log(this.startHour, this.endHour);
      try {
        const message = await WorkerService.addWorker(
          this.numWorker,
          this.password,
          this.name,
          this.surname,
          this.lastname,
          this.phone,
          this.startHour,
          this.endHour
        );

        if (message.statusCode === 201) {
          this.$bvModal.hide("workerModal");
          this.onReset(event);

          this.$emit("update-users");

          Alerts.showMessageSuccess(
            "Personal de trabajo registrado correctamente",
            "success"
          );
        } else {
          Alerts.showMessageSuccess(
            "Información inválida. Inténtelo más tarde",
            "error"
          );
        }
      } catch (error) {
        Alerts.showMessageSuccess(
          "Error interno. Inténtelo más tarde",
          "error"
        );
        throw error;
      }
    },
    generateNumberWorker() {
      const letter = "W";
      const number = Math.floor(Math.random() * 900) + 100;
      return letter + number;
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
      this.startHour = null;
      this.endHour = null;
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
