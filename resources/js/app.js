require('./bootstrap');

require('alpinejs');

require('./router/index')

import router from "./router";
import App from "./App.vue";
import 'bootstrap';
import { store } from './store/index'

const { createApp, h } = Vue

axios.defaults.withCredentials = true;

const YocsApp = createApp({
        render: () => h(App),
        methods: {
            /**
             * Check current locale
             * @param to
             */
            checkLocale(to) {
                let params = to.params;
                if (params.locale !== undefined) {
                    this.redirectToHome()
                }
            },
            /**
             * Checks if the user is guest
             * @returns {boolean}
             */
            isGuest() {
                console.log('Проверяем залогинился ли пользователь');
                return true;
            },
            /**
             * Redirects user to home page. Depends on whether the user is guest or not.
             */
            redirectToHome() {
                console.log('Редиректим на главную страницу')
                let currentLanguage = this.getCurrentLanguage()
            },
            /**
             * Gets current locale for user
             * @returns {string}
             */
            getCurrentLanguage() {
                return localesList.en
            }
        }
    })
    .use(router)
    .use(store)
;

YocsApp.component('MainLayout', require('./layouts/MainLayout.vue').default)
YocsApp.component('PublicLayout', require('./layouts/PublicLayout.vue').default)
YocsApp.component('Alert', require('./components/Alert').default)
YocsApp.component('SideBar', require('./components/Sidebar').default)

YocsApp.mount(
    '#app'
)


