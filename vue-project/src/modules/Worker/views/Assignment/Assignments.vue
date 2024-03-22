<template>
  <div>
    <AssignCard/>
  </div>
</template>

<script>
  import AssignCard from '../../components/Assignment/AssignCard.vue';

  export default {
    data () {
      return {
        rol: false
      }
    },
    components: {
      AssignCard
    }
  }
</script>

<style scoped></style>
