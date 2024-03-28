<template>
  <div>
    <b-container>
        <b-row>
            <h1>Inicio</h1>
            <h5>Bienvenido</h5>
        </b-row>
        <b-row class="">
            <b-card-group>
                <b-card class="rounded-0 m-3" style="max-width: 20rem" bg-variant="primary" text-variant="white">
                    <b-card-text style="font-size:20px;"><b>Total de clientes</b></b-card-text>
                    <h3 class="space">{{customers}}</h3>
                </b-card>
                <b-card class="rounded-0 m-3" bg-variant="warning" style="max-width: 20rem" text-variant="white">
                    <b-card-text style="font-size:20px;"><b>Total de paquetes</b></b-card-text>
                    <h3 class="space">{{packages}}</h3>
                </b-card>
                <b-card style="max-width: 20rem" class="rounded-0 m-3" bg-variant="danger"  text-variant="white">
                    <b-card-text style="font-size:20px;"><b>Total de solicitudes</b></b-card-text>
                    <h3 class="space">{{requests}}</h3>
                </b-card>
                <b-card style="max-width: 20rem" class="rounded-0 m-3" bg-variant="success" text-variant="white">
                    <b-card-text style="font-size:20px;"><b>Total de trabajadores</b></b-card-text>
                    <h3 class="space">{{employees}}</h3>
                </b-card>
            </b-card-group>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import { Alert } from 'bootstrap';
import Alerts from '../../../../services/Alerts';
import Dashboard from '../../../../services/Dashboard';
export default {
    data(){
        return{
            customers:0,
            packages:0,
            requests:0,
            employees:0
        }
    },
    methods:{
        async calculate(){
            try {
                const response = await Dashboard.calculateClients();
                if (response instanceof Error) {
                    Alerts.showMessageSuccess("Error al obtener los clientes", "error");
                    console.log("Error en clientes calculate");
                    this.customers=0
                    return;
                }else{
                    this.customers = response;
                }
            } catch (error) {
                console.log("f");
                Alerts.showMessageSuccess("Error al cargar los datos de los clientes","error");
                this.customers=0
            }

            try {
                const response = await Dashboard.calculateWorkers();
                if (response instanceof Error) {
                    Alerts.showMessageSuccess("Error al obtener a los trabajadores", "error");
                    console.log("Error en trabajadores calculate");
                    this.employees=0
                    return;
                }else{
                    this.employees=response;
                }
            } catch (error) {
                Alerts.showMessageSuccess("Erro al cargar los datos de los trabajadores","error");
                this.employees=0
            }
            try {
                const response = await Dashboard.calculatePackages();
                if (response instanceof Error) {
                    Alerts.showMessageSuccess("Error al obtener los paquetes", "error");
                    console.log("Error en paquetes calculate");
                    this.packages=0;
                    return;
                }else{
                    this.packages=response;
                }
            } catch (error) {
                Alerts.showMessageSuccess("Error al cargar los datos de los paquetes","error");
                this.packages=0;
            }
            try {
                const response = await Dashboard.calculateOrders();
                if (response instanceof Error) {
                    Alerts.showMessageSuccess("Error al obtener los solicitudes", "error");
                    console.log("Error en soli calculate");
                    this.requests=0;
                    return;
                }else{
                    this.requests=response;
                }
            } catch (error) {
                Alerts.showMessageSuccess("Error al cargar los datos de los pedidos","error");
                this.requests=0;
            }
        }        
    },
    mounted(){
        this.calculate();
    }
}
</script>

<style>
.space{
    text-align: center;
}

.tittlestyle{
    margin-top: 20px;
}


</style>