<template>
    <div>
        <div class="d-flex justify-content-center align-items-center px-5">
            <div class="columna-principal">
                <h1 class="titulo">Asignaciones</h1>
                <b-form-input class="mr-sm-2 buscar w-50" placeholder="Buscar"></b-form-input>
                <div v-if="assignments.length === 0" class="mt-5 col-12 text-center">
                    <p>No hay asignaciones disponibles.</p>
                </div>
                <div v-for="assign in assignments" :key="assign.key" class="pre-card">
                    <div class="ajuste-card">
                        <b-col class="col-img p-0 d-none d-lg-block col-md-4 col-lg-5 col-xl-5">
                            <img src="../../../../assets/img/asig.jpg" class="img-asign r-image rounded-start-4 w-100 h-100"/>
                        </b-col>
                        <b-col class="col-text">
                            <b-container fluid class="mt-3">
                                <h4 class="nom-paq">{{ assign.assignPackageName }}</h4>
                                <p class="text-paq">Entregar {{ assign.assignOrderDate }}</p>
                                <b-link to="/trabajador/detalles">Ver más</b-link>
                            </b-container>
                        </b-col>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WorkerAssign from '../../../../services/WorkerAssign';
    import Alerts from '../../../../services/Alerts';

    export default {
        data() {
            return {
                assignments: [],
            }
        },
        mounted() {
            this.getAssignments();
        },
        methods: {
            async getAssignments() {
                try {
                    const data = await WorkerAssign.getWorkerAssign();
                    if(data.statusCode === 200) {
                        this.assignments = data.data.map(assign => ({
                            assignPackageName: assign.packageOrder.servicePackage.packageName,
                            assignOrderDate: assign.packageOrder.orderDate,
                        }));
                    }
                } catch (error) {
                    Alerts.showMessageSuccess("Error al obtener las asignaciones", "error");
                }
            },
        }
    }
</script>

<style scoped>
    .columna-principal {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        display: flex;
        width: 570px;
        max-width: 100%;
        flex-direction: column;
        padding: 50px 35px;
        bottom: 0;
    }

    .titulo {
        color: #000;
        text-align: center;
        align-self: start;
        margin-left: 10px;
        font: 400 30px Inter, sans-serif;
    }

    .buscar {
        border-radius: 15px;
        background-color: rgba(191, 193, 192, 0.5);
        align-self: start;
        display: flex;
        margin-top: 16px;
        gap: 4px;
        padding: 9px 12px;
    }

    .pre-card {
        border-radius: 15px;
        border: 1px solid #b9b9b9;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        margin-top: 29px;
        padding-right: 23px;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
    }

    .pre-card:hover {
        transform: scale(1.05);
    }

    .ajuste-card {
        gap: 20px;
        display: flex;
    }

    .col-img {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 34%;
        margin-left: 0px;
    }

    .img-asign {
        aspect-ratio: 0.81;
        object-fit: auto;
        object-position: center;
        width: 156px;
        max-width: 100%;
        flex-grow: 1;
    }

    .col-text {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 66%;
        margin-left: 20px;
    }

    .nom-paq {
        color: #ed8003;
        white-space: nowrap;
        font: 700 25px Mukta, sans-serif;
    }

    .text-paq {
        color: #000;
        margin-top: 22px;
        font: 400 16px Inter, sans-serif;
    }
</style>
