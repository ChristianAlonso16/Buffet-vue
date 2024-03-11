<template>
    <b-container>
        <Cards/>
    </b-container>
</template>

<script>
import Cards from '../../components/packages/Cards.vue';
export default {
    data(){
        return{
            rol:false
        }
    },
    components:{
        Cards
    }
}
</script>

<style>

</style>