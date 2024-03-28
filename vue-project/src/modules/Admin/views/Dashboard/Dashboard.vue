<template lang="">
    <div>
        <br/>
        <Cards/>
        <br/>
        <br/>
        <br/>
        <TableOrders/>
    </div>
</template>
<script>
import Cards from '../../components/dashboard/Cards.vue';
import TableOrders from '../../components/dashboard/TableOrders.vue';
export default {
    data(){
        return{
            rol:false
        }
    },
    components:{
        Cards,
        TableOrders
    }
}
</script>
<style>
    
</style>