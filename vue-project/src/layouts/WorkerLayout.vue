<template>
    <div>
        <HeaderWorker/>
        <router-view/>
    </div>
</template>

<script>
    import HeaderWorker from '@/components/HeaderWorker/HeaderWorker.vue';

    export default {
        components: {
            HeaderWorker
        }
    }
</script>

<style></style>