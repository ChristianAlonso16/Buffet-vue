<template>
    <div class="hc-card border border-1">
        <b-container>
            <b-row class="p-3">
                <b-col cols="12" sm="12" md="3" lg="3" xl="3" class="mt-3 mb-3">
                    <img src="https://media.istockphoto.com/id/650655146/es/foto/mesa-de-eventos-de-bodas-de-alimentos-de-catering.jpg?s=612x612&w=0&k=20&c=70CS4YhBmjx7UUt1tKcu8XDiNHrMBZUHoAfHLSVEMFE="
                        class="hc-img" alt="...">
                </b-col>
                <b-col cols="12" sm="12" md="9" lg="6" xl="6" class="mt-3 mb-3">
                    <p class="hc-text-status">{{ datas.status }}</p>
                    <p class="hc-text-date">{{ dateStructure(datas.date) }}</p>
                    <p class="hc-text-description">{{ datas.description }}</p>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="3" xl="3" class="mt-3 mb-3">
                    <b-row>
                        <b-col class="text-end">
                            <router-link :to="to" :items="datas">
                                <b-button type="submit" class="mb-3 r-button w-100">Ver compra</b-button>
                            </router-link>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="text-end">
                            <b-button type="submit" class="f-button w-100" v-show="statusDeliveri()">Volver acomprar</b-button>
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
            datas: []
        }
    },
    mounted() {
        this.to = "/seguimiento/" + this.id.toString();
        this.datas = this.data;
    },
    methods: {
        statusDeliveri() {
            if (this.datas.status === "Entregado") {
                return true;
            }
            return false;
        },
        dateStructure(dateString) {
            const months = [
                "enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
            ];

            const date = new Date(dateString);
            const day = date.getDate();
            const monthIndex = date.getMonth();
            const year = date.getFullYear();
            return `${day} de ${months[monthIndex]} del ${year}`;
        }
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        data: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style></style>