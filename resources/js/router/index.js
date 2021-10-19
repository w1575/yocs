import {createWebHistory, createRouter} from 'vue-router'

const history = createWebHistory();

import IndexPage from "../views/pages/IndexPage.vue"
import LoginPage from "../views/auth/login"
import RegisterPage from  "../views/auth/register"

const localesList = {
    en: 'en',
    ru: 'ru'
};

const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: IndexPage,
            redirect: () => {

            },
        },
        {
            path: '/:locale',
            name: 'locale',
            component: {
                template:  "<router-view />",
            },
            redirect: {
                name: "login"
            },
            children: [
                {
                    name: 'login',
                    path: 'login',
                    component: LoginPage,
                    meta: {
                        requiresAuth: false,
                    }
                },
                {
                    name: "registerPage",
                    path: 'register',
                    component: RegisterPage,
                    meta: {
                        requiresAuth: false,
                    }
                },
                {
                    name: 'indexPage',
                    path: "index",
                    component: IndexPage,
                    meta: {
                        requiresAuth: true,
                    }
                }
            ],
        },
    ],
});

router.beforeEach((to, from, next ) => {
    let currentLocale = to.params.locale;
    if (localesList[currentLocale] === undefined) {
        router.push('/')
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log('Пользователь должен быть залогинен')
        next()
    } else {
        console.log('Пользователь должен быть гостем')
        next()
    }
})


export default router
