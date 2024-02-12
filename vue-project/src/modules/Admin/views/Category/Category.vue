<template lang="">
        <b-container>
            <Cards/> 
        </b-container>
       
</template>
<script>
import Cards from '../../components/category/list_category/Cards.vue';
export default {
    data() {
    return {
      rol: false
    }
  }, 
    components:{
      Cards
    }
}
</script>
<style>
    
</style>