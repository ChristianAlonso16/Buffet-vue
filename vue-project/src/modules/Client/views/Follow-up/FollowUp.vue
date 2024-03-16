<template>
    <b-container class="mt-5">
        <div class="hc-card border border-1 p-5">
            <b-row class="text-start mb-3">
                <b-col cols="12" sm="12" md="12" lg="4" xl="4">
                    <img src="https://media.istockphoto.com/id/650655146/es/foto/mesa-de-eventos-de-bodas-de-alimentos-de-catering.jpg?s=612x612&w=0&k=20&c=70CS4YhBmjx7UUt1tKcu8XDiNHrMBZUHoAfHLSVEMFE="
                        class="hc-img h-100" alt="...">
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="8" xl="8">
                    <div class="col-p">
                        <h1 class="f-title">Paquete simple</h1>
                        <h2 class="f-description">Descripción</h2>
                        <p class="f-description-text">Mesa ceremonial, con platos de entrada para hasta 80 personas. Este paquete es muy complementario
                            para la degustación de niños y adultos</p>
                    </div>
                </b-col>
            </b-row>
            <b-row class="mb-3 p-1">
                <b-col cols="12" sm="12" md="12" lg="4" xl="4">
                    <div class="lineatemp">
                        <div class="fila">
                            <div class="disco">
                                <div v-if="process" class="active"></div>
                                <div v-else></div>
                            </div>
                            <div>
                                <div class="text1">En proceso</div>
                                <div class="p-description">Pedido esta en preparación ya la espera del envio.</div>
                            </div>
                            <div v-if="process" class="test-line active"></div>
                            <div v-else class="test-line"></div>
                        </div>
                        <div class="fila">
                            <div class="disco">
                                <div v-if="onTheWay" class="active"></div>
                                <div v-else></div>
                            </div>
                            <div>
                                <div class="text1">En Camino</div>
                                <div>Tu pedido ya se encuentra al lugar de tu evento.</div>
                            </div>
                            <div v-if="onTheWay" class="test-line active"></div>
                            <div v-else class="test-line"></div>
                        </div>
                        <div class="fila">
                            <div class="disco">
                                <div v-if="delivered" class="active"></div>
                                <div v-else></div>
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
                        <b-col class="f-total-title mb-3" cols="12">Total</b-col>
                        <b-col class="f-total-number" cols="12">$133,531</b-col>
                    </b-row>
                    <b-row class="d-flex justify-content-end">
                        <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                            <b-button class="r-button w-100">Vermás</b-button>
                        </b-col>
                        <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                            <b-button class="f-button w-100">Volver a comprar</b-button>
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
            id: '',
            status: 1,
            process: true,
            onTheWay: false,
            delivered: false,
            data: []
        }
    },
    methods: {
        statusProgress(data){
            if(data.status === "En proceso") {
                this.process = true
            } else if (data.status === "En camino") {
                this.process = true
                this.onTheWay = true
            } else if (data.status === "En camino") {
                this.process = true
                this.onTheWay = true
                this.delivered = true
            }
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.data = this.$route.params.items;
    },
}
</script>
<style>
.test-line {
    width: 5px;
    height: 100%;
    position: absolute;
    top: calc(1% + 15px);
    left: calc(1% + 11px);
    background-color: #838383;
}

.test-line.active {
    background-color: #ed8003;
}

.lineatemp {
    position: relative;
    margin: 0 auto;
    border-radius: 10px;
}

.fila {
    display: flex;
    justify-content: start;
    position: relative;
    height: 100%;
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
    width: 3px;
    background: #ed8003;
}

.fila .disco>div {
    width: 60%;
    aspect-ratio: 1/1;
    border-radius: 60%;
    box-sizing: border-box;
    z-index: 1;
    background-color: #838383;
}

.fila .disco .active {
    background-color: #ed8003;
}

.fila div:nth-of-type(2) {
    width: 100%;
    padding: 4px;
    display: flex;
    align-items: start;
    flex-direction: column;
    text-align: start;
}

.colorStatusOne {
    background-color: #7c7a78;
}

.col-p {
    padding-right: 60px;
    padding-left: 60px;
}

.f-title {
    color: #ed8003;
    font-size: 60px;
    font-style: normal;
}

.f-description {
    color: #ed8003;
    font-size: 26px;
    font-style: normal;
    margin-top: 8%;
}

.f-description-text {
    font-size: 18px;
    font-style: normal;
}

.f-total-title {
    color: #ed8003;
    font-size: 26px;
    font-weight: bold;
    font-style: normal;
}

.f-total-number {
    color: #ed8003;
    font-size: 26px;
    font-weight: bold;
    font-style: normal;
}
</style>