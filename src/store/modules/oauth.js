// oauth.js

import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      // Steps:
      //  1 - Make the HTTP call to get the token
      //  2 - Success: save the token in 'accessToken'.
      //  3 - Fail: clean 'accessToken', show log error

      commit('loading/SET_LOADING', true, { root: true })
      // Step 1
      oauth.getToken()
        .then(({ data }) => {
          // Step 2: Save the token value in the state using the mutation
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch((err) => {
          // Step 3: Clean token
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth: ', err)
        })
        .finally(() => {
          console.log('Done!')
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
