// store/index.js
import { createStore } from 'vuex'

// Import oauth
import oauth from './modules/oauth'

export default createStore({
  modules: {
    oauth
  }
})
