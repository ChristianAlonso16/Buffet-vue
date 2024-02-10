<template lang="">
        <b-container>
            <Table/> 
        </b-container>
       
</template>
<script>
import Table from '../../components/list_category/Table.vue';
export default {
    data() {
    return {
      rol: false
    }
  }, 
    components:{
        Table
    }
}
</script>
<style>
    
</style>