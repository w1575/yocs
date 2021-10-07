import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory();

import IndexPage from "../views/pages/IndexPage.vue"
import LoginPage from "../views/auth/login"
import RegisterPage from  "../views/auth/register"


const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: IndexPage,
        },
        {
            path: '/:locale',
            component: {
                template:  "<router-view>",
                redirect: {
                    name: "login"
                }
            },
            children: [
                {
                    name: 'login',
                    path: 'login',
                    component: LoginPage,
                },
                {
                    name: "registerPage",
                    path: 'register',
                    component: RegisterPage,
                }
            ]
        },

    ]
});



export default router
