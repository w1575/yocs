import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory();

import IndexPage from "../views/pages/IndexPage.vue"


const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: IndexPage,
        }
    ]
});



export default router
