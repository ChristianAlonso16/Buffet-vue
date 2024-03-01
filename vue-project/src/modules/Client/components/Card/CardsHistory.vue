<template>
    <div class="hc-card border border-1">
        <b-container>
            <b-row class="p-3">
                <b-col cols="12" sm="12" md="3" lg="3" xl="3" class="mt-3 mb-3">
                    <img src="https://media.istockphoto.com/id/650655146/es/foto/mesa-de-eventos-de-bodas-de-alimentos-de-catering.jpg?s=612x612&w=0&k=20&c=70CS4YhBmjx7UUt1tKcu8XDiNHrMBZUHoAfHLSVEMFE="
                        class="hc-img" alt="...">
                </b-col>
                <b-col cols="12" sm="12" md="9" lg="6" xl="6" class="mt-3 mb-3">
                    <p class="hc-text-status">Entregado</p>
                    <p class="hc-text-date">Llega el 8 de enero del 2024</p>
                    <p class="hc-text-description">Servicio de alimentos para a 3 tiempos para 50 personas.</p>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3" class="mt-3 mb-3">
                    <b-row>
                        <b-col class="text-end">
                            <router-link :to="to">
                                <b-button type="submit" class="mb-3 r-button w-100">Ver compra</b-button>
                            </router-link>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="text-end">
                            <b-button type="submit" class="r-button w-100">Volver a comprar</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            to: '',
        }
    },
    mounted() {
        this.to = "/seguimiento/" + this.id.toString();
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    }
}
</script>

<style></style>