<template lang="">
    <b-container class="text-start mt-3 p-0">
        <b-row class="mt-3 mb-3">
            <b-col>
                <h1>Historial</h1>
            </b-col>
        </b-row>
        <b-row class="mt-3 mb-3">
            <b-col cols="12" sm="6" md="4" lg="3" xl="3">
                <div class="input-group w-100">
                    <button class="btn btn-outline-secondary hc-send-button" type="button">Q</button>
                    <input type="text" class="form-control hc-send-button" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" placeholder="Buscar">
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" class="mb-4" v-for="history in historys">
                <div class="hc-card border border-1" :key="history.id">
                    <b-container>
                        <b-row class="p-3">
                            <b-col cols="12" sm="12" md="3" lg="3" xl="3" class="mt-3 mb-3">
                                <img src="https://media.istockphoto.com/id/650655146/es/foto/mesa-de-eventos-de-bodas-de-alimentos-de-catering.jpg?s=612x612&w=0&k=20&c=70CS4YhBmjx7UUt1tKcu8XDiNHrMBZUHoAfHLSVEMFE=" class="hc-img" alt="...">
                            </b-col>
                            <b-col cols="12" sm="12" md="9" lg="6" xl="6" class="mt-3 mb-3">
                                <p class="hc-text-status">En camino</p>
                                <p class="hc-text-date">Llega el 8 de enero del 2024</p>
                                <p class="hc-text-description">Servicio de alimentos para a 3 tiempos para 50 personas. </p>
                            </b-col>
                            <b-col cols="12" sm="12" md="12" lg="3" xl="3" class="mt-3 mb-3">
                                <b-row>
                                    <b-col class="text-end">
                                        <b-button variant="success" type="submit" class="mb-3 r-button w-100">Ver compra</b-button>                    
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col class="text-end">
                                        <b-button variant="success" type="submit" class="r-button w-100">Volver a comprar</b-button>                    
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            historys: [
                {
                    "id": "1",
                    "photo": "url1",
                    "status": "In preparation",
                    "description": "dish1",
                    "date": "2021-01-01"
                },
                {
                    "id": "2",
                    "photo": "url2",
                    "status": "On the way",
                    "description": "dish2",
                    "date": "2021-01-02"
                },
                {
                    "id": "3",
                    "photo": "url3",
                    "status": "Delivered",
                    "description": "dish3",
                    "date": "2021-01-03"
                },
                {
                    "id": "4",
                    "photo": "url4",
                    "status": "In preparation",
                    "description": "dish4",
                    "date": "2021-01-04"
                },
                {
                    "id": "5",
                    "photo": "url5",
                    "status": "On the way",
                    "description": "dish5",
                    "date": "2021-01-05"
                }
            ],
        }
    },
    methods: {

    },
}
</script>
<style lang="">
    
</style>