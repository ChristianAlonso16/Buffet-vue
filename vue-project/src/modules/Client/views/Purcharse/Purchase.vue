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
                                <b-form-input id="input-street" class="r-input" v-model="order.street"
                                    :state="states.streetState" />
                                <b-form-invalid-feedback :state="states.streetState">
                                    El campo no debe de contener caracteres especiales
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group label="Código Postal" class="mt-4">
                                <b-form-input id="input-cp" class="r-input" pattern="\([0-9]{5}\)" minlength="5"
                                    maxlength="5" v-model="order.postalCode" :state="states.postalCodeState" />
                                <b-form-invalid-feedback :state="states.postalCodeState">
                                    Únicamente ingresa 5 dígitos
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group label="Instrucciones adicionales" class="mt-4">
                                <b-form-input id="input-comments" class="r-input" v-model="order.comments"
                                    :state="states.commentsState" />
                                <b-form-invalid-feedback :state="states.commentsState">
                                    El campo no debe de contener caracteres especiales
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Colonia">
                                <b-form-input id="input-disctric" class="r-input" v-model="order.disctric"
                                    :state="states.disctricState" />
                                <b-form-invalid-feedback :state="states.disctricState">
                                    El campo no debe de contener caracteres especiales
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group label="Ciudad" class="mt-4">
                                <b-form-input id="input-city" class="r-input" v-model="order.city"
                                    :state="states.cityState" />
                                <b-form-invalid-feedback :state="states.cityState">
                                    El campo no debe de contener caracteres especiales
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group label="Fecha de entrega" class="mt-4">
                                <b-form-datepicker v-model="date" :state="states.dateState" />
                                <b-form-invalid-feedback :state="states.dateState">
                                    Seleccionar una fecha posterior a 1 semana de la fecha actual
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-col>


                    </b-row>
                    <b-row class="mt-5">
                        <b-button class="r-button w-100" @click="addressValidation">Continuar</b-button>
                    </b-row>
                </b-container>

                <b-container v-if="step === 3">
                    <b-button @click="backStep">Atras</b-button>

                    <h3 style="text-align: center;" class="lp-subtitle">¡Estas a punto de concluir tu compra!</h3>
                    <b-row>
                        <b-col>
                            <b-form-group label="Número de tarjeta" class="mt-5">
                                <b-form-input class="r-input" v-model="payData.creditCard" pattern="\([0-9]{12}\)"
                                    minlength="12" maxlength="12" :state="states.creditCardState" />
                                <b-form-invalid-feedback :state="states.creditCardState">
                                    El campo debe de contener únicamente números
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-row class="mt-5">
                                <b-col>
                                    <b-form-group label="Fecha expiración">
                                        <b-form-input class="r-input" pattern="\([0-9]{4}\)" minlength="5" maxlength="5"
                                            :state="states.expirationDate" />
                                        <b-form-invalid-feedback :state="states.expirationDate">
                                            Campo obligatorio
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group label="CVV">
                                        <b-form-input class="r-input" v-model="payData.cvv" pattern="\([0-9]{3}\)/"
                                            minlength="3" maxlength="3" :state="states.cvvState" />
                                        <b-form-invalid-feedback :state="states.cvvState">
                                            Campo obligatorio
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-form-group label="Nombre del propietario" class="mt-5">
                                    <b-form-input class="r-input" v-model="payData.owner" :state="states.ownerState" />
                                    <b-form-invalid-feedback :state="states.ownerState">
                                        El campo no debe de contener caracteres especiales
                                    </b-form-invalid-feedback>
                                </b-form-group>
                            </b-row>
                        </b-col>
                        <b-col class="text-center align-items-center">
                            <b-row class="align-items-start" style="padding-top:4%">
                                <ul id="progressbar">
                                    <li class="active">Detalles</li>
                                    <li class="active">Dirección</li>
                                    <li class="active">Pago</li>
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
                                    <b-button class="r-button w-100" @click="generateOrder">Comprar</b-button>
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
            },
            date: null,
            image: "",
            paquet: null,
            payData: {
                creditCard: "",
                expirationDate: "",
                cvv: "",
                owner: ""
            },
            states: {
                streetState: null,
                disctricState: null,
                postalCodeState: null,
                cityState: null,
                commentsState: null,
                dateState: null,
                creditCardState: null,
                expirationDateState: null,
                cvvState: null,
                ownerState: null
            }
        };
    },
    methods: {
        validateLetters(string) {
            const regex = /^([a-zA-Z ]{2,252})+$/;
            if (regex.test(string) && string.trim() !== '') {
                return true;
            }
            return false;
        },

        validateCP() {
            const regex = /^\d{5,5}$/;
            if (regex.test(this.order.postalCode) && this.order.postalCode.trim() !== "") {
                return true;
            }
            return false;
        },

        validateSelectedDate(selectedDate) {
            if (!selectedDate) {
                return false;
            }
            const currentDate = new Date();
            const selectedDateTime = new Date(selectedDate);

            const oneWeekLater = new Date(currentDate);
            oneWeekLater.setDate(oneWeekLater.getDate() + 7);

            return selectedDateTime > currentDate && selectedDateTime > oneWeekLater;
        },

        validateCard() {
            const regex = /^\d{12,12}$/;
            if (regex.test(this.payData.creditCard) && this.payData.creditCard.trim() !== "") {
                return true;
            }
            return false;
        },

        validateCvv() {
            const regex = /^([0-9]{1,3})+$/;
            if (regex.test(this.payData.cvv) && this.payData.cvv.trim() !== "") {
                return true;
            }
            return false;
        },

        validateExpiration() {
            const regex = /^([0-9]{1,5})+$/;
            if (regex.test(this.payData.expirationDate) && this.payData.expirationDate.trim() !== "") {
                return true;
            }
            return false;
        },


        increaseStep() {
            this.step++;
        },
        backStep() {
            this.step--;
        },
        addressValidation(ev) {
            ev.preventDefault();
            this.states.streetState = this.validateLetters(this.order.street) ? true : false;
            this.states.disctricState = this.validateLetters(this.order.disctric) ? true : false;
            this.states.cityState = this.validateLetters(this.order.city) ? true : false;
            this.states.commentsState = this.validateLetters(this.order.comments) ? true : false;
            this.states.postalCodeState = this.validateCP() ? true : false;
            this.states.dateState = this.validateSelectedDate(this.date) ? true : false;

            if (!this.states.streetState || !this.states.disctricState || !this.states.cityState || !this.states.commentsState || !this.states.postalCodeState || !this.states.dateState) {
                Alerts.showMessageSuccess("Complete todos los campos antes de continuar", "info");
                return;
            } else {
                this.step++;
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

        async generateOrder(ev) {
            ev.preventDefault();
            this.states.creditCardState = this.validateCard() ? true : false;
            this.states.cvvState = this.validateCvv() ? true : false;
            this.states.ownerState = this.validateLetters(this.payData.owner) ? true : false;
            this.states.expirationDateState = this.validateExpiration() ? true : false;

            if (!this.states.creditCardState || !this.states.cvvState || !this.states.ownerState) {
                Alerts.showMessageSuccess("Llene todos los campos antes de continuar", "info");
                return;
            }
            try {
                this.showLoading = true;
                const message = await Orders.addOrder(this.order);
                console.log(message);
                if (message.statusCode === 201) {
                    Alerts.showMessageSuccess("Compra registrada exitosamente", "success");
                    this.$router.push("/home");
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
