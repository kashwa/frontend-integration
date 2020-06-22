import axios from 'axios';

export default {
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user;
        },

        user(state) {
            return state.user
        }
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

            return dispatch('attempt', res.data.response.token)
        },

        async attempt({ commit }, token) {
            commit('SET_TOKEN', token)

            try {
                let response = await axios.post('auth/me')

                commit('SET_USER', response.data)
            } catch (error) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
    }
}
