<template lang="">
    <div>
        <HeaderAdmin/>
        <router-view/>
    </div>
</template>
<script>
import HeaderAdmin from '../components/HeaderAdmin/headeradmin.vue';
export default {
    components:{
        HeaderAdmin
    }
}
</script>
<style lang="">
    
</style>