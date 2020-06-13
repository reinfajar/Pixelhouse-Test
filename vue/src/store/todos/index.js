import axios from '../../axios/config'

const store = {
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS (state, payload) {
      state.todos = payload
    },
    UPDATE_TODOS (state, payload) {
      console.log(payload)
      state.todos[payload.index] = payload.todo
    },
    NEW_TODOS (state, payload) {
      state.todos.push(payload)
    }
  },
  actions: {
    fetchTodos () {
      return axios({
        method: 'get',
        url: '/todos'
      })
    }
  }
}

export default store
