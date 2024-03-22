<template>
    <div>
        <div class="d-flex justify-content-center align-items-center text-center px-5 arreglo">
            <div class="col-principal">
                <div class="card mb-3">
                    <img loading="lazy" src="../../../../assets/img/local_mall_icon.png"/>
                    <div class="subt">Asignaciones Pendientes</div>
                    <div class="text">Aquí podras ver todos tus pedidos que tienes pendientes en entregar</div>
                    <b-button variant="success" type="submit" class="mb-2 r-button w-50 but" to="/trabajador/asignaciones">Ver</b-button>
                </div>
                <div class="card mt-5">
                    <img loading="lazy" src="../../../../assets/img/work_history_icon.png"/>
                    <div class="subt">Historial de trabajos</div>
                    <div class="text">Aquí podras ver todos tus pedidos que has entregado</div>
                    <b-button variant="success" type="submit" class="mb-2 r-button w-50 but" to="/trabajador/asignaciones">Ver</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .arreglo {
        font-size: 20px;
        font-weight: 700;
    }

    .col-principal {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        display: flex;
        width: 570px;
        max-width: 100%;
        flex-direction: column;
        padding: 50px 71px;
    }

    .card {
        border-radius: 15px;
        border: 1px solid #b9b9b9;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        display: flex;
        margin-top: 22px;
        flex-direction: column;
        align-items: center;
        padding: 27px 32px 46px;
    }

    .subt {
        font-family: Inter, sans-serif;
        margin-top: 32px;
    }

    .text {
        font-family: Inter, sans-serif;
        font-weight: 400;
        align-self: stretch;
        margin-top: 38px;
    }

    .but {
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #ed8003;
        margin-top: 35px;
        width: 185px;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        color: #fff;
        white-space: nowrap;
        padding: 13px 60px;
        font: 16px Inter, sans-serif;
    }
</style>