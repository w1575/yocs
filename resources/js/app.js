require('./bootstrap');

require('alpinejs');

require('./router/index')

import router from "./router";
import App from "./App.vue";

const { createApp } = Vue

const YocsApp = createApp(App)
    .use(router)


YocsApp.component('MainLayout', require('./layouts/MainLayout.vue').default)
YocsApp.component('PublicLayout', require('./layouts/PublicLayout.vue').default)


YocsApp.mount('#app')


