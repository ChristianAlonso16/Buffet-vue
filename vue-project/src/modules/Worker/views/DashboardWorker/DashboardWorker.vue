<template>
    <div class="div">
        <div class="div-9">
            <div class="div-10">
                <div class="div-11">
                    <img loading="lazy" src="../../../../assets/img/local_mall_icon.png" class="img-5"
                    />
                    <div class="div-12">Asignaciones Pendientes</div>
                    <div class="div-13">Aquí podras ver todos tus pedidos que tienes pendientes en entregar</div>
                    <b-button variant="success" type="submit" class="mb-2 r-button w-50 div-14" to="/trabajador/asignaciones">Ver</b-button>
                </div>
                <div class="div-15">
                    <img loading="lazy" src="../../../../assets/img/work_history_icon.png" class="img-6"
                    />
                    <div class="div-16">Historial de trabajos</div>
                    <div class="div-17">Aquí podras ver todos tus pedidos que has entregado</div>
                    <b-button variant="success" type="submit" class="mb-2 r-button w-50 div-18" to="/trabajador/asignaciones">Ver</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .div {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    }
    
    .div-9 {
        border: 3px solid #d9d9d9;
        background-color: #f5f5f7;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: 700;
        text-align: center;
        padding: 0 60px;
    }

    @media (max-width: 991px) {
        .div-9 {
            max-width: 100%;
            padding: 0 20px;
        }
    }

    .div-10 {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        display: flex;
        width: 570px;
        max-width: 100%;
        flex-direction: column;
        padding: 50px 71px;
    }

    @media (max-width: 991px) {
        .div-10 {
            padding: 0 20px;
        }
    }
    .div-11 {
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

    @media (max-width: 991px) {
        .div-11 {
            max-width: 100%;
            padding: 0 20px;
        }
    }

    .img-5 {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 77px;
    }

    .div-12 {
        font-family: Inter, sans-serif;
        margin-top: 32px;
    }

    .div-13 {
        font-family: Inter, sans-serif;
        font-weight: 400;
        align-self: stretch;
        margin-top: 38px;
    }

    .div-14 {
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

    @media (max-width: 991px) {
        .div-14 {
            white-space: initial;
            padding: 0 20px;
        }
    }

    .div-15 {
        border-radius: 15px;
        border: 1px solid #b9b9b9;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 63px 0 39px;
        padding: 27px 32px 46px;
    }

    @media (max-width: 991px) {
        .div-15 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
        }
    }

    .img-6 {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 77px;
    }

    .div-16 {
        font-family: Inter, sans-serif;
        margin-top: 32px;
    }

    .div-17 {
        font-family: Inter, sans-serif;
        font-weight: 400;
        align-self: stretch;
        margin-top: 38px;
    }

    .div-18 {
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

    @media (max-width: 991px) {
        .div-18 {
            white-space: initial;
            padding: 0 20px;
        }
    }
</style>