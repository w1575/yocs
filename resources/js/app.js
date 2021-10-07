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

const { createApp } = Vue

const YocsApp = createApp(App)
    .use(router)


YocsApp.component('MainLayout', require('./layouts/MainLayout.vue').default)
YocsApp.component('PublicLayout', require('./layouts/PublicLayout.vue').default)

YocsApp.mount('#app')


