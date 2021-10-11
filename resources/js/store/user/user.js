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
        token: state => state.token,
        userName: state => state.userName,
        role: state => state.role,
        firstName: state => state.firstName,
        lastName: state => state.lastName,
        middleName: state => state.middleName,
        avatarData: state => state.avatarData,
    },

    mutations: {
        SET_TOKEN() {

        }
    }
}
