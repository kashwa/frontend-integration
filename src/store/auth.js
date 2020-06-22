import axios from 'axios';

export default {
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },

        SET_USER(state, data) {
            state.user = data
        },
    },

    actions: {
        async signIn({ dispatch }, credentials) {
            let res = await axios.post('auth/login', credentials);

            dispatch('attempt', res.data.response.token)
        },

        async attempt({ commit }, token) {
            commit('SET_TOKEN', token)

            try {
                let response = await axios.post('auth/me', null, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

                commit('SET_USER', response.data)
            } catch (error) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
    }
}
