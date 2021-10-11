<template>
      <component :is="currentLayout"></component>
</template>

<script>
import 'bootstrap';
export default {
    name: "App.vue",
    computed: {

        currentLayout() {
            return this.$root.isGuest()
                ? 'PublicLayout'
                : 'MainLayout'
        }
    },
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         if (! vm.isGuest()) {
    //             vm.redirectToHome()
    //         }
    //     })
    //
    // },
}


</script>

<style scoped>

</style>
