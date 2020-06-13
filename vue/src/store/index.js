import Vue from 'vue'
import Vuex from 'vuex'
import active from './active/index'
import todos from './todos/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    active,
    todos
  }
})
