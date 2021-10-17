<template>
      <component :is="currentLayout"></component>
</template>

<script>
import 'bootstrap';
import { mapGetters } from 'vuex'
const localesList = {
    en: 'en',
    ru: 'ru'
};
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
    // created() {
    //    this.$watch(
    //        () => this.$route.params, (toParams, prevParams) => {
    //            let locale = toParams.locale;
    //            if (locale === undefined || localesList.locale !== undefined) {
    //                console.log('Не тот роут', locale)
    //            }
    //        }
    //    )
    // }

}


</script>

<style scoped>

</style>
