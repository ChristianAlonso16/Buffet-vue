<template>
    <b-container class="mt-5">
        <div class="hc-card border border-1 p-5">
            <b-row class="text-start mb-3">
                <b-col cols="12" sm="12" md="12" lg="4" xl="4">
                    <img src="https://media.istockphoto.com/id/650655146/es/foto/mesa-de-eventos-de-bodas-de-alimentos-de-catering.jpg?s=612x612&w=0&k=20&c=70CS4YhBmjx7UUt1tKcu8XDiNHrMBZUHoAfHLSVEMFE="
                        class="hc-img h-100" alt="...">
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="8" xl="8">
                    <h1>Paquete simple</h1>
                    <h2>Descripción</h2>
                    <p>Mesa ceremonial, con platos de entrada para hasta 80 personas. Este paquete es muy complementario
                        para la degustación de niños y adultos</p>
                </b-col>
            </b-row>
            <b-row class="mb-3 p-1">
                <b-col cols="12" sm="12" md="12" lg="4" xl="4">
                    <div class="lineatemp">
                        <div class="fila">
                            <div class="disco">
                                <div></div>
                            </div>
                            <div>
                                <div class="text1">En proceso</div>
                                <div class="p-description">Pedido esta en preparación ya la espera del envio.</div>
                            </div>
                        </div>
                        <div class="fila">
                            <div class="disco">
                                <div></div>
                            </div>
                            <div>
                                <div class="text1">En Camino</div>
                                <div>Tu pedio ya se encuentra al lugar de tu evento.</div>
                            </div>
                        </div>
                        <div class="fila">
                            <div class="disco">
                                <div></div>
                            </div>
                            <div>
                                <div class="text2">Entregado</div>
                                <div>Se a entregado el pedido.</div>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="8" xl="8" class="align-self-end">
                    <b-row class="mb-5 text-end">
                        <b-col cols="12">Total</b-col>
                        <b-col cols="12">$133,531</b-col>
                    </b-row>
                    <b-row class="d-flex justify-content-end">
                        <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                            <b-button class="r-button w-100">Vermás</b-button>
                        </b-col>
                        <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                            <b-button class="r-button w-100">Volver a comprar</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            id: ''
        }
    },
    methods: {

    },
    mounted() {
        this.id = this.$route.params.id;
    },
}
</script>
<style>
.lineatemp {
    position: relative;
    margin: 0 auto;
    border-radius: 10px;
}

.fila {
    display: flex;
    justify-content: start;
    position: relative;
}

.text1{
    color: #BFC1C0;
}

.text2{
    font-weight: bold;
    color: #ed8003;
}

.fila .disco {
    width: 40px;
    height: 36px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
}

.fila .disco:after {
    content: '';
    position: absolute;
    top: 0;
    left: calc(505 - 3px);
    height: 100px;
    width: 3px;
    background: #ed8003;
    z-index: 1;
}

.fila:first-child .disco:after {
    height: 100px;
    top: 25%;
}

.fila:last-child .disco:after {
    bottom: 100px;
    height: 0px;
}

.fila .disco>div {
    width: 50%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #ed8003;
    box-sizing: border-box;
}

.fila div:nth-of-type(2) {
    width: 100%;
    padding: 4px;
    display: flex;
    align-items: start;
    flex-direction: column;
    text-align: start;
}
</style>