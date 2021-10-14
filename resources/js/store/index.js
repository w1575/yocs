import { createStore  } from 'vuex'
import { userModule } from './modules/user/index'
import { alertModule } from  './modules/alert/index'

export const store = createStore({
    modules: {
        userModule: userModule,
        alertModule: alertModule,
    }
})

