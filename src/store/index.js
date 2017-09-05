import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '👋 Vuenos Aires',
    counter: 0
  },
  mutations: {
    increment(state, payload) {
      state.counter++
    }
  },
  getters: {
    completeMessage(state) {
      return `${state.message} - Se clickeo ${state.counter} veces`;
    }
  },
})

export default store
