<template>
    <b-container v-if="paquet" class="w-75u mt-5">
        <b-row class="border border-1 rounded-4 r-container">
            <b-col class="text-start p-5">
                <b-container v-if="step === 1">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-img fluid :src="paquet.image" class="rounded-4" />
                            <h1 class="my-3 lp-subtitle">{{ paquet.packageName }}</h1>
                            <p class="mb-3 text-start fw-semibold">Descripción</p>
                            <b-card-text class="p-justify-text">
                                {{ paquet.packageDescription }}
                            </b-card-text>
                        </b-col>
                        <b-col class="text-center align-items-center">
                            <b-row class="align-items-start" style="padding-top:4%">
                                <ul id="progressbar">
                                    <li class="active">Detalles</li>
                                    <li>Dirección</li>
                                    <li>Pago</li>
                                </ul>
                            </b-row>
                            <b-row class="d-flex justify-content-center mb-5">
                                <b-col cols="9" style="margin-bottom: 1rem;">
                                </b-col>
                            </b-row>
                            <b-row class="ms-5">
                                <b-row class="align-items-end ">
                                    <b-col class="text-start fw-semibold fs-4">Subtotal</b-col>
                                    <b-col class="text-end fs-4 mt-4">${{ paquet.price.toFixed(2) }}</b-col>
                                </b-row>
                                <b-row class="mt-2 line-between">
                                    <b-col class="text-start fw-semibold fs-4 mt-3">Descuento</b-col>
                                    <b-col class="text-end fs-4 mt-3" style="color:red;">${{ paquet.discount.toFixed(2)
                                        }}</b-col>
                                </b-row>
                                <b-row class="mt-3">
                                    <b-col class="text-start fw-semibold fs-4 mt-3">Total</b-col>
                                    <b-col class="text-end fs-4 mt-3">${{ order.orderPrice.toFixed(2) }}</b-col>
                                </b-row>
                            </b-row>
                            <b-row class="d-flex justify-content-end mt-4">
                                <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                                    <b-button class="r-button w-100" @click="increaseStep">Comprar</b-button>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container v-if="step === 2">
                    <b-button @click="backStep">Atras</b-button>
                    <h3 class="lp-subtitle mb-4">Dirección de envío</h3>
                    <div class="text-center mt-2">
                        <ul id="progressbar">
                            <li class="active">Detalles</li>
                            <li class="active">Dirección</li>
                            <li>Pago</li>
                        </ul>
                    </div>
                    <b-row>
                        <b-col>
                            <b-form-group label="Calle">
                                <b-form-input id="input-street" class="r-input" v-model="order.street" />
                            </b-form-group>
                            <b-form-group label="Código Postal" class="mt-4">
                                <b-form-input type="number" id="input-cp" class="r-input" v-model="order.postalCode" />
                            </b-form-group>
                            <b-form-group label="Instrucciones adicionales" class="mt-4">
                                <b-form-input id="input-comments" class="r-input" v-model="order.comments" />
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Colonia">
                                <b-form-input id="input-disctric" class="r-input" v-model="order.disctric" />
                            </b-form-group>
                            <b-form-group label="Ciudad" class="mt-4">
                                <b-form-input id="input-city" class="r-input" v-model="order.city" />
                            </b-form-group>
                            <b-form-group label="Fecha de entrega" class="mt-4">
                                <b-form-datepicker />
                            </b-form-group>
                        </b-col>


                    </b-row>
                    <b-row class="mt-5">
                        <b-button class="r-button" @click="addressValidation">Continuar</b-button>
                    </b-row>
                </b-container>

                <b-container v-if="step === 3">
                    <b-button @click="backStep">Atras</b-button>

                    <h3 style="text-align: center;" class="lp-subtitle">¡Estas a punto de concluir tu compra!</h3>
                    <b-row>
                        <b-col>
                            <b-form-group label="Número de tarjeta" class="mt-5">
                                <b-form-input class="r-input" v-model="payData.creditCard" />
                            </b-form-group>
                            <b-row class="mt-5">
                                <b-col>
                                    <b-form-group label="Fecha expiración">
                                        <b-form-input class="r-input" />
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group label="CVV">
                                        <b-form-input class="r-input" type="number" v-model="payData.cvv" />
                                    </b-form-group>
                                </b-col>
                                <b-form-group label="Nombre del propietario" class="mt-5">
                                    <b-form-input class="r-input" v-model="payData.owner" />
                                </b-form-group>
                            </b-row>
                        </b-col>
                        <b-col class="text-center align-items-center">
                            <b-row class="align-items-start" style="padding-top:4%">
                                <ul id="progressbar">
                                    <li class="active">Detalles</li>
                                    <li>Dirección</li>
                                    <li>Pago</li>
                                </ul>
                            </b-row>
                            <b-row class="d-flex justify-content-center mb-5">
                                <b-col cols="9" style="margin-bottom: 1rem;">
                                </b-col>
                            </b-row>
                            <b-row class="ms-5">
                                <b-row class="align-items-end ">
                                    <b-col class="text-start fw-semibold fs-4">Subtotal</b-col>
                                    <b-col class="text-end fs-4 mt-4">${{ paquet.price.toFixed(2) }}</b-col>
                                </b-row>
                                <b-row class="mt-2 line-between">
                                    <b-col class="text-start fw-semibold fs-4 mt-3">Descuento</b-col>
                                    <b-col class="text-end fs-4 mt-3" style="color:red;">${{ paquet.discount.toFixed(2)
                                        }}</b-col>
                                </b-row>
                                <b-row class="mt-3">
                                    <b-col class="text-start fw-semibold fs-4 mt-3">Total</b-col>
                                    <b-col class="text-end fs-4 mt-3">${{ order.orderPrice.toFixed(2) }}</b-col>
                                </b-row>
                            </b-row>
                            <b-row class="d-flex justify-content-end mt-4">
                                <b-col cols="12" sm="12" md="6" lg="4" xl="4" class="pb-2">
                                    <b-button class="r-button w-100" @click="increaseStep">Comprar</b-button>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <Loading v-if="showLoading" />
    </b-container>
</template>

<script>
import Alerts from "../../../../services/Alerts";
import packageService from "../../../../services/Packages";
import Orders from "../../../../services/Orders";
import Loading from "../../../../components/Loading/loading.vue";

export default {
    components: {
        Loading
    },
    data() {
        return {
            showLoading: false,
            step: 1,
            order: {
                orderPrice: null,
                street: "",
                disctric: "",
                postalCode: null,
                city: "",
                comments: "",
                userEmail: "k@gmail.com",
                packageName: null,
                date: null
            },
            image: "",
            paquet: null,
            payData: {
                creditCard: "",
                expirationDate: null,
                cvv: 123,
                owner: ""
            }
        };
    },
    methods: {
        increaseStep() {
            this.step++;
        },
        backStep() {
            this.step--;
        },
        addressValidation() {
            if (this.order.street && this.order.disctric && this.order.postalCode && this.order.city && this.order.comments) {
                this.step++;
            } else {
                Alerts.showMessageSuccess("Complete todos los campos antes de continuar", "info");
            }
        },
        async getPackage(id) {
            try {
                this.showLoading = true;
                const data = await packageService.getPackage(id);
                if (data.statusCode === 200) {
                    this.paquet = data.data;
                    this.order.orderPrice = this.paquet.price - this.paquet.discount;
                    this.order.packageName = this.paquet.packageName;
                } else {
                    Alerts.showMessageSuccess("Error al encontrar este paquete", "error");
                }
            } catch (error) {
                Alerts.showMessageSuccess("Error al obtener datos del paquete", "error");
            } finally {
                this.showLoading = false;
            }
        },

        async generateOrder() {
            try {
                this.showLoading = true;
                const message = await Orders.addOrder(this.order);
                console.log(message);
                if (message.statusCode === 201) {
                    Alerts.showMessageSuccess("Compra registrada exitosamente", "success");
                }
            } catch (error) {
                Alerts.showMessageSuccess("Error al registrar orden", "error");
            } finally {
                this.showLoading = false;
            }
        }
    },

    mounted() {
        const packageName = this.$route.params.packageName;
        this.getPackage(packageName);
    }
}
</script>

<style scoped>
.line-between {
    border-bottom: 2px solid #4F4F4F;
}

.p-justify-text {
    text-align: justify;
}

#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    counter-reset: step;
}

#progressbar li {
    list-style-type: none;
    color: #ed8003;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    width: 33.33%;
    float: left;
    position: relative;
    /* letter-spacing: 1px; */
}

#progressbar li::before {
    content: "";
    counter-increment: step;
    width: 50px;
    height: 50px;
    line-height: 26px;
    display: block;
    font-size: 12px;
    color: #333;
    background: #F9B86E;
    border-radius: 25px;
    margin: 0 auto 10px auto;
}

#progressbar li::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #ed8003;
    position: absolute;
    left: -50%;
    top: 30%;
    z-index: -1;
}

#progressbar li:first-child::after {
    content: none;
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: #ed8003;
    color: white;
}
</style>
