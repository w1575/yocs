<template>
      <component :is="currentLayout"></component>
</template>

<script>

export default {
    name: "App.vue",
    computed: {
        isUserGuest() {
            return true;
        },
        currentLayout() {
            return this.isUserGuest
                ? 'PublicLayout'
                : 'MainLayout'
        }
    },
}


</script>

<style scoped>

</style>
