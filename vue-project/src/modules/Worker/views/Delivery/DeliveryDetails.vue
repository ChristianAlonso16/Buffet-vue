<template>
    <div>
        <div class="d-flex justify-content-center align-items-center px-5">
            <div class="col-principal">
                <h1 class="tit-paq">Paquete Simple</h1>
                <img src="../../../../assets/img/asig.jpg" class="img-paq mt-4 mb-2 rounded-4"/>
                <h4 class="subt-datos mt-5">Datos del cliente</h4>
                <div class="linea"/>
                <div class="mt-3">
                    <div class="d-flex justify-content-between">
                        <div>
                            <img src="../../../../assets/img/iconoCliente.png"/>
                        </div>
                        <div class="d-flex flex-column column">
                            <div class="pre-dat">
                                <p class="dat">Victor Noe Flores Toledo</p>
                                <p class="dat">+527773602709</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="subt-dir">Dirección</h4>
                <p class="dir">
                    Entregar a las 16:47 hs en La Cañada Nº exterior 9, Degollado,
                    Cuernavaca, Morelos.
                </p>
                <h4 class="subt-est">Estado del pedido</h4>
                <div class="linea"/>
                <div class="position-relative m-4 mt-5">
                    <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
                        <div class="progress-bar prog" style="width: 50%"></div>
                    </div>
                    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm prog rounded-pill" style="width: 2rem; height: 2rem"></button>
                    <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm prog rounded-pill" style="width: 2rem; height: 2rem"></button>
                    <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm prog-des rounded-pill" style="width: 2rem; height: 2rem"></button>
                    <p class="pt-5 position-absolute top-0 start-0 translate-middle">En preparación</p>
                    <p class="pt-5 position-absolute top-0 start-50 translate-middle">En camino</p>
                    <p class="pt-5 position-absolute top-0 start-100 translate-middle">Entregado</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <b-button variant="success" type="submit" class="mb-2 r-button but" to="/trabajador/detalles">En camino</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .col-principal {
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        display: flex;
        width: 570px;
        max-width: 100%;
        flex-direction: column;
        padding: 50px 55px;
    }

    .tit-paq {
        color: #ed8003;
        margin-top: 10px;
        font: 700 30px Mukta, sans-serif;
    }

    .img-paq {
        aspect-ratio: 1.89;
        object-fit: auto;
        object-position: center;
        width: 100%;
    }

    .subt-datos {
        color: #ed8003;
        font: 400 24px Inter, sans-serif;
    }

    .linea {
        background-color: #bfc1c0;
        margin-top: 16px;
        height: 1px;
    }

    .subt-dir {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        font-size: 24px;
        color: #ed8003;
        font-weight: 400;
        white-space: nowrap;
    }

    .subt-dir {
        color: #ed8003;
        font-family: Inter, sans-serif;
        margin-top: 31px;
    }

    .column {
        line-height: normal;
        width: 72%;
        margin-left: 20px;
    }

    .pre-dat {
        display: flex;
        margin-top: 18px;
        flex-direction: column;
        font-size: 24px;
        color: #000;
        font-weight: 400;
        white-space: nowrap;
    }

    .dat {
        font-family: Inter, sans-serif;
    }

    .dir {
        color: #000;
        margin-top: 24px;
        font: 400 24px Inter, sans-serif;
    }

    .subt-est {
        color: #ed8003;
        margin-top: 65px;
        font: 400 24px Inter, sans-serif;
    }

    .prog {
        background-color: #ed8003;
    }

    .prog-des {
        background-color: #edbb99;
    }

    .but {
        font-family: Inter, sans-serif;
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        background-color: #ed8003;
        align-self: stretch;
        margin-top: 71px;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        padding: 13px 53px;
    }
</style>
