<template>
  <div>
    <b-container>
      <b-row>
        <h1>Inicio</h1>
        <h5>Bienvenido</h5>
      </b-row>
      <b-row class="">
        <b-col cols="12" sm="6" md="3">
          <b-card class="m-3" bg-variant="primary" text-variant="white">
            <b-card-text class="fs-5"><b>Total de clientes</b></b-card-text>
            <h3 class="text-center">{{ customers }}</h3>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" md="3">
          <b-card class="m-3" bg-variant="warning" text-variant="white">
            <b-card-text class="fs-5"><b>Total de paquetes</b></b-card-text>
            <h3 class="text-center">{{ packages }}</h3>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" md="3">
          <b-card class="m-3" bg-variant="danger" text-variant="white">
            <b-card-text class="fs-5"><b>Total de solicitudes</b></b-card-text>
            <h3 class="text-center">{{ requests }}</h3>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" md="3">
          <b-card class="m-3" bg-variant="success" text-variant="white">
            <b-card-text class="fs-5"><b>Total de trabajadores</b></b-card-text>
            <h3 <h3 class="text-center">{{ employees }}</h3>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Alert } from "bootstrap";
import Alerts from "../../../../services/Alerts";
import Dashboard from "../../../../services/Dashboard";
export default {
  data() {
    return {
      customers: 0,
      packages: 0,
      requests: 0,
      employees: 0,
    };
  },
  methods: {
    async calculate() {
      try {
        const response = await Dashboard.calculateClients();
        if (response instanceof Error) {
          Alerts.showMessageSuccess("Error al obtener los clientes", "error");
          this.customers = 0;
          return;
        } else {
          this.customers = response;
        }
      } catch (error) {
        Alerts.showMessageSuccess(
          "Error al cargar los datos de los clientes",
          "error"
        );
        this.customers = 0;
      }

      try {
        const response = await Dashboard.calculateWorkers();
        if (response instanceof Error) {
          Alerts.showMessageSuccess(
            "Error al obtener a los trabajadores",
            "error"
          );
          this.employees = 0;
          return;
        } else {
          this.employees = response;
        }
      } catch (error) {
        Alerts.showMessageSuccess(
          "Erro al cargar los datos de los trabajadores",
          "error"
        );
        this.employees = 0;
      }
      try {
        const response = await Dashboard.calculatePackages();
        if (response instanceof Error) {
          Alerts.showMessageSuccess("Error al obtener los paquetes", "error");
          this.packages = 0;
          return;
        } else {
          this.packages = response;
        }
      } catch (error) {
        Alerts.showMessageSuccess(
          "Error al cargar los datos de los paquetes",
          "error"
        );
        this.packages = 0;
      }
      try {
        const response = await Dashboard.calculateOrders();
        if (response instanceof Error) {
          Alerts.showMessageSuccess(
            "Error al obtener los solicitudes",
            "error"
          );
          this.requests = 0;
          return;
        } else {
          this.requests = response;
        }
      } catch (error) {
        Alerts.showMessageSuccess(
          "Error al cargar los datos de los pedidos",
          "error"
        );
        this.requests = 0;
      }
    },
  },
  mounted() {
    this.calculate();
  },
};
</script>

<style>
.tittlestyle {
  margin-top: 20px;
}
</style>