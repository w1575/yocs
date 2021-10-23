export const USER_ROLE_GUEST = 'guest'
export const USER_ROLE_ADMIN = 'admin'
export const USER_ROLE_MODERATOR = 'moderator'
export const USER_ROLE_MANAGER = 'manager'

export const userModule = {
    state: () => {
        return {
            token: null,
            username: null,
            role: USER_ROLE_GUEST,
            firstName: null,
            lastName: null,
            middleName: null,
            avatarData: null,
        }
    },

    getters: {
        token: () => {
            return localStorage.getItem('token')
        },
        locale: () => {
            let locale = localStorage.getItem('locale');
            console.log('locale', locale)
            if (locale === null) {
                localStorage.setItem('locale', 'en')
                locale = 'en'
            }
            return locale;
        },
        userName: state => state.userName,
        role: state => state.role,
        firstName: state => state.firstName,
        lastName: state => state.lastName,
        middleName: state => state.middleName,
        avatarData: state => state.avatarData,
        isUserGuest: () => {
            const token = localStorage.getItem('token')
            return token === null || token === ""
        },
        allAvailableRoles: () => {
            return [
                USER_ROLE_GUEST,
                USER_ROLE_ADMIN,
                USER_ROLE_MODERATOR,
                USER_ROLE_MANAGER,
            ];
        },
        homepage: (state, getters) => {
            const locale = getters.locale
            if (getters.isUserGuest) {
                return  "/" + locale + "/login"
            }

            return "/" + locale + "/index"
        }
    },

    mutations: {
        SET_TOKEN(state, payload) {
            localStorage.setItem('token', payload)
        },
        SET_USERNAME(state, payload) {
            state.token = payload
        },
        SET_ROLE(state, payload) {
            state.userName = payload
        },
        SET_FIRST_NAME(state, payload) {
            state.role = payload
        },
        SET_LAST_NAME(state, payload) {
            state.firstName = payload
        },
        SET_MIDDLE_NAME(state, payload) {
            state.lastName = payload
        },
        SET_AVATAR_DATA(state, payload) {
            state.middleName = payload
        },
        SET_LOCALE(state, payload) {
            localStorage.setItem('locale', payload)
        }},

    actions: {
        setLocale(context, locale) {
            context.commit('SET_LOCALE', locale)
        },
        setToken(context, token) {
            context.commit('SET_TOKEN', token)
        },
    },

}
