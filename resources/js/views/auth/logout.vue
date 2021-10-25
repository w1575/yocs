<template>
    <div class="">Logout</div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {
    name: "logout",
    computed: {
      ...mapGetters([
            'isUserGuest'
      ])
    },
    created() {
        this.logout();
        this.$router.go(0);
    },
    methods: {
        ...mapActions(['logout'])
    },
    watch: {

    }
}
</script>

<style scoped>

</style>
