<template lang="">
    <b-container class="text-start mt-3 p-0">
        <b-row class="mt-3 mb-3">
            <b-col>
                <h1>Historial</h1>
            </b-col>
        </b-row>
        <b-row class="mt-3 mb-3">
            <b-col cols="12" sm="12" md="6" lg="4" xl="3">
                <div class="group">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                        <g>
                        <path
                            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                        ></path>
                        </g>
                    </svg>
                    <input class="input" type="search" v-model="search" placeholder="Search" @input="searchFilter(search)"/>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" class="mb-4" v-for="history in historys" :key="history.id">
                <Card 
                    :id="history.numOrder"
                    :data="history"
                />
            </b-col>
            <b-col cols="12" class="mb-4" v-show="state">
                <div class="text-center">
                    <b-icon icon="box-seam" aria-hidden="true" class="w-25 h-25"></b-icon>
                    <h1>No se encontro ningun paquete</h1>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import Card from "../../components/Card/CardsHistory.vue";
import Historial from "../../../../services/Historial";

export default {
    components: {
        Card,
    },
    mounted() {
        this.getAllHistory();
    },
    methods: {
        searchFilter(search) {
            console.log(search);
            const result = this.filters.filter(data => data.servicePackage.packageName.toLowerCase().includes(search.toLowerCase()));        
            this.historys = result;
            if (this.historys.length !== 0) {
                this.state = true;
                return
            };
            this.state = false;
            return
        },
        async getAllHistory() {
            const response = await Historial.getAllOrders();
            this.historys = response.data
            this.filters = response.data
        }
    },
    data() {
        return {
            search: '',
            state: false,
            historys: [],
            filters: [],
        };
    },
};
</script>
<style>
.group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 100%;
}

.input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
}

.input::placeholder {
    color: #9e9ea7;
}

.input:focus,
input:hover {
    outline: none;
    border-color: rgba(247, 127, 0, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(247 127 0 / 10%);
}

.icon {
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
}
</style>