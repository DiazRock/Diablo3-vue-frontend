// store/index.js
import { createStore } from 'vuex'

// Import oauth
import oauth from './modules/oauth'
import loading from './modules/loading'

export default createStore({
  modules: {
    oauth,
    loading
  }
})
