<template lang="">
    <b-container>
        <b-row class="mt-4">
            <Cards/>
        </b-row>
        <b-row class="mt-4">
            <TableOrders/>
        </b-row>
    </b-container>
</template>
<script>
import Cards from "../../components/dashboard/Cards.vue";
import TableOrders from "../../components/dashboard/TableOrders.vue";
export default {
  data() {
    return {
      rol: false,
    };
  },
  components: {
    Cards,
    TableOrders,
  },
};
</script>
<style>
</style>