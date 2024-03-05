<template>
    <div class="div">
        <div class="div-9">
            <div class="div-10">
                <h1 class="div-11">Paquete Simple</h1>
                <img src="../../../../assets/img/asig.jpg" class="img-5 rounded-4"/>
                <h4 class="div-12">Datos del cliente</h4>
                <div class="div-13"></div>
                <div class="div-14">
                    <div class="div-15">
                        <div class="column">
                            <div class="div-16">
                                <img src="../../../../assets/img/iconoCliente.png" class="img-6"/>
                                <h2 class="div-17">Direccion</h2>
                            </div>
                        </div>
                        <div class="column-2">
                            <div class="div-18">
                                <p class="div-19">Victor Noe Flores Toledo</p>
                                <p class="div-20">+527773602709</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="div-21">
                    Entregar a las 16:47 hs en La Cañada Nº exterior 9, Degollado,
                    Cuernavaca, Morelos.
                </p>
                <h4 class="div-22">Estado del pedido</h4>
                <div class="div-23"></div>
                <div class="position-relative m-4 mt-5">
                    <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
                        <div class="progress-bar prog" style="width: 50%"></div>
                    </div>
                    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm prog rounded-pill" style="width: 2rem; height:2rem;"></button>
                    <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm prog rounded-pill" style="width: 2rem; height:2rem;"></button>
                    <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm prog-des rounded-pill" style="width: 2rem; height:2rem;"></button>
                    <p class="pt-5 position-absolute top-0 start-0 translate-middle">En preparación</p>
                    <p class="pt-5 position-absolute top-0 start-50 translate-middle">En camino</p>
                    <p class="pt-5 position-absolute top-0 start-100 translate-middle">Entregado</p>
                </div>
                <div class="div-33">
                    <b-button variant="success" type="submit" class="mb-2 r-button div-36" to="/trabajador/detalles">En camino</b-button>
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
        padding: 50px 55px;
    }

    @media (max-width: 991px) {
        .div-10 {
            padding: 0 20px;
        }
    }

    .div-11 {
        color: #ed8003;
        margin-top: 10px;
        font: 700 30px Mukta, sans-serif;
    }

    @media (max-width: 991px) {
        .div-11 {
            max-width: 100%;
        }
    }

    .img-5 {
        aspect-ratio: 1.89;
        object-fit: auto;
        object-position: center;
        width: 100%;
        margin-top: 31px;
    }

    @media (max-width: 991px) {
        .img-5 {
            max-width: 100%;
            margin-right: 6px;
        }
    }

    .div-12 {
        color: #ed8003;
        margin-top: 59px;
        font: 400 24px Inter, sans-serif;
    }

    @media (max-width: 991px) {
        .div-12 {
            max-width: 100%;
            margin-top: 40px;
        }
    }

    .div-13 {
        background-color: #bfc1c0;
        margin-top: 16px;
        height: 1px;
    }

    @media (max-width: 991px) {
        .div-13 {
            max-width: 100%;
        }
    }

    .div-14 {
        margin-top: 16px;
    }

    @media (max-width: 991px) {
        .div-14 {
            max-width: 100%;
        }
    }

    .div-15 {
        gap: 20px;
        display: flex;
    }

    @media (max-width: 991px) {
        .div-15 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
        }
    }

    .column {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 28%;
        margin-left: 0px;
    }

    @media (max-width: 991px) {
        .column {
            width: 100%;
        }
    }

    .div-16 {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        font-size: 24px;
        color: #ed8003;
        font-weight: 400;
        white-space: nowrap;
    }

    @media (max-width: 991px) {
        .div-16 {
            margin-top: 4px;
            white-space: initial;
        }
    }

    .img-6 {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 94px;
    }

    .div-17 {
        font-family: Inter, sans-serif;
        margin-top: 31px;
    }

    .column-2 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 72%;
        margin-left: 20px;
    }

    @media (max-width: 991px) {
        .column-2 {
            width: 100%;
        }
    }

    .div-18 {
        display: flex;
        margin-top: 18px;
        flex-direction: column;
        font-size: 24px;
        color: #000;
        font-weight: 400;
        white-space: nowrap;
    }

    @media (max-width: 991px) {
        .div-18 {
            margin-top: 22px;
            white-space: initial;
        }
    }

    .div-19 {
        font-family: Inter, sans-serif;
    }

    @media (max-width: 991px) {
        .div-19 {
            white-space: initial;
        }
    }

    .div-20 {
        font-family: Inter, sans-serif;
        margin-top: 35px;
    }

    .div-21 {
        color: #000;
        margin-top: 24px;
        font: 400 24px Inter, sans-serif;
    }

    @media (max-width: 991px) {
        .div-21 {
            max-width: 100%;
        }
    }

    .div-22 {
        color: #ed8003;
        margin-top: 65px;
        font: 400 24px Inter, sans-serif;
    }

    @media (max-width: 991px) {
        .div-22 {
            max-width: 100%;
            margin-top: 40px;
        }
    }

    .div-23 {
        background-color: #bfc1c0;
        margin-top: 12px;
        height: 1px;
    }

    @media (max-width: 991px) {
        .div-23 {
            max-width: 100%;
        }
    }

    .div-33 {
        display: flex;
        flex-grow: 1;
        flex-basis: 0%;
        flex-direction: column;
        align-items: center;
    }

    .prog {
        background-color: #ed8003;
    }

    .prog-des {
        background-color: #EDBB99;
    }

    .div-36 {
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
    
    @media (max-width: 991px) {
        .div-36 {
            margin-top: 40px;
            padding: 0 20px;
        }
    }
</style>
