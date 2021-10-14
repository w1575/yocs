<template>
      <component :is="currentLayout"></component>
</template>

<script>
import 'bootstrap';
import { mapGetters } from 'vuex'
export default {
    name: "App.vue",
    computed: {
        ...mapGetters([
            'isUserGuest'
        ]),
        currentLayout() {
            return this.isUserGuest
                ? 'PublicLayout'
                : 'MainLayout'
        },
    },
}


</script>

<style scoped>

</style>
