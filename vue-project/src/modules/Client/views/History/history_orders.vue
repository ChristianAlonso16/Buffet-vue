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
            <b-col cols="12" class="mb-4" v-for="history in historys" :key="history.id">
                <Card :id="history.id"/>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import Card from '../../components/Card/CardsHistory.vue';

export default {
    components: {
        Card,
    },
    methods: {
    },
    mounted() {
        
    },
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
    }
}
</script>
<style>
    
</style>