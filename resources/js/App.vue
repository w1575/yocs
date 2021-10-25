<template>
    <Alert></Alert>
    <component :is="currentLayout"></component>
</template>

<script>
import 'bootstrap';
import PublicLayout from './layouts/PublicLayout'
import MainLayout from  './layouts/MainLayout'

import { mapGetters } from 'vuex'
export default {
    name: "App.vue",
    computed: {
        ...mapGetters([
            'isUserGuest'
        ]),
        currentLayout() {
            console.log('test', this.isUserGuest)
            return this.isUserGuest
                ? PublicLayout
                : MainLayout
        },
    },

    setup({isUserGuest}, context) {

    }


}


</script>

<style scoped>

</style>
