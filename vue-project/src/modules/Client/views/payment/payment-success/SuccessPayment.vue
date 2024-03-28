<template>
    <b-container class="container">
        <div class="message-container" v-if="paymentSuccess && !showLoading">
            <div class="success-message">
                <h2>¡Pago realizado exitosamente!</h2>
                <p>¡Gracias por su compra!</p>
                <b-button @click="returnHome" class="mt-2" variant="secondary">Volver a comprar</b-button>
            </div>
        </div>
        <div class="message-container" v-else-if="!paymentSuccess && !showLoading">
            <div class="failure-message">
                <h2>¡Error al procesar el pago!</h2>
                <p>Lo sentimos, ha ocurrido un error al procesar su pago.</p>
                <b-button @click="returnHome" class="mt-2" variant="secondary">Volver a comprar</b-button>
            </div>
        </div>
        <loading v-if="showLoading" />
    </b-container>
</template>

<script>
import PaymentService from '../../../../../services/PaymentService';
import Loading from "../../../../../components/Loading/loading.vue";
import Alerts from "../../../../../services/Alerts";
import Orders from "../../../../../services/Orders";

export default {
    data() {
        return {
            showLoading: false,
            paymentSuccess: false,
            order: {
                orderPrice: null,
                street: "",
                disctric: "",
                postalCode: null,
                city: "",
                orderDate: null,
                comments: "",
                userEmail: "k@gmail.com",
                packageName: null,
                idTransaction: "",
                description: "",
                paymentMethod: ""
            },
        };
    },
    components: {
        Loading
    },

    mounted() {

        const params = new URLSearchParams(window.location.search);
        const paymentId = params.get('paymentId');
        const payerId = params.get('PayerID');

        if (paymentId && payerId) {
            this.paySuccess(paymentId, payerId);
        }
    },

    methods: {

        async paySuccess(paymentId, payerId) {
            try {
                this.showLoading = true;
                const response = await PaymentService.paySuccess(paymentId, payerId)
                if (response.status === 200) {
                    const orderFromLocalStorage = JSON.parse(localStorage.getItem("orden"));
                    if (orderFromLocalStorage) {
                        this.order = {
                            ...this.order,
                            orderPrice: orderFromLocalStorage.orderPrice,
                            street: orderFromLocalStorage.street,
                            disctric: orderFromLocalStorage.disctric,
                            postalCode: orderFromLocalStorage.postalCode,
                            city: orderFromLocalStorage.city,
                            orderDate: orderFromLocalStorage.orderDate,
                            comments: orderFromLocalStorage.comments,
                            userEmail: orderFromLocalStorage.userEmail,
                            packageName: orderFromLocalStorage.packageName,
                        };
                    }
                    this.order = {
                        ...this.order,
                        idTransaction: response.data.id,
                        description: response.data.description,
                        paymentMethod: response.data.methodPay
                    };
                    const message = await Orders.addOrder(this.order);
                    if (message.statusCode === 201) {
                        Alerts.showMessageSuccess("Compra registrada exitosamente", "success");
                        localStorage.removeItem("orden");
                    }
                    this.paymentSuccess = true;
                }
            } catch (error) {
                Alerts.showMessageSuccess("Error al procesar solicitud", "error");
                console.log(error);
            } finally {
                this.showLoading = false;
            }
        },
        returnHome() {
            this.$router.push("/")
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.message-container {
    text-align: center;
}

.success-message,
.failure-message {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.success-message:hover,
.failure-message:hover {
    transform: translateY(-5px);
}

.success-message h2,
.failure-message h2 {
    color: #333;
    margin-bottom: 15px;
    font-size: 26px;
}

.success-message p,
.failure-message p {
    color: #666;
    margin-bottom: 0;
}
</style>