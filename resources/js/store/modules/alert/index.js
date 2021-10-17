export const alertModule = {
    state: () => {
        return {
            messages: Array
        }
    },

    mutations: {
        /**
         * @param state
         * @constructor
         */
        CLEAR_MESSAGES(state) {
            state.messages = []
        },
        /**
         * @param state
         * @param {Object} payload message data
         * @param {string} payload.message
         * @param {string} payload.type
         * @constructor
         */
        ADD_MESSAGE(state, payload) {
            state.messages.push(payload)
        },
        /**
         * Delete one message by given index
         * @param state
         * @param {int} payload index of message
         * @constructor
         */
        REMOVE_MESSAGE_BY_INDEX(state, payload) {
            state.messages = state.messages.splice(payload, 1)
            console.log(state.messages)
        }
    },

    getters: {
        messages: state => state.messages,
    },

    actions: {
        removeMessageByIndex({commit, state}, index) {
            commit('REMOVE_MESSAGE_BY_INDEX', index)

        },
        /**
         *
         * @param commit
         * @param message
         * @param type
         */
        addMessage({commit, state}, message, type="info"){
            commit('ADD_MESSAGE',  {message: message, type: type})
        },
        clearMessages({commit}) {
            commit('CLEAR_MESSAGES')
        }
    }
}
