require('./bootstrap');

require('alpinejs');

require('./router/index')

import router from "./router";
import App from "./App.vue";
import 'bootstrap';

// const { I18n } = require('i18n')
//
// const i18n = new I18n({
//     locales: ['en', 'de'],
//     directory: path.join(__dirname, 'locales')
// })

const { createApp, h } = Vue

const YocsApp = createApp({
        render: () => h(App),
        watch: {
            $route(to, from) {
                // react to route changes...
                let params = to.params;
                if (params.locale !== undefined) {
                    this.redirectToHome()
                }

            }
        },
        methods: {
            isGuest() {
                console.log('Проверяем залогинился ли пользователь');
                return true;
            },
            redirectToHome() {
                console.log('Редиректим на главную страницу');
                let currentLanguage = this.getCurrentLanguage()
                if (this.isGuest()) {
                    this.$router.push({
                        path : "/" + currentLanguage +  "/login"
                    })
                } else {
                    this.$router.push({
                        path: "/" + currentLanguage + "/index"
                    })
                }
            },
            getCurrentLanguage() {
                return localesList.en;
            }
        }
    })
    .use(router)
;





const localesList = {
    en: 'en',
    ru: 'ru'
};

YocsApp.component('MainLayout', require('./layouts/MainLayout.vue').default)
YocsApp.component('PublicLayout', require('./layouts/PublicLayout.vue').default)

YocsApp.mount(
    '#app'
)


