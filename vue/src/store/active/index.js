const store = {
  state: {
    loading: false,
    error: false,
    errorMessages: [],
    newForm: false
  },
  mutations: {
    SET_LOADING (state, status) {
      state.loading = status
    },
    SET_ERROR_MESSAGE (state, payload) {
      if (!Array.isArray(payload)) {
        state.errorMessages = [payload]
      } else {
        state.errorMessages = payload
      }
      state.error = true
    },
    SET_ERROR_STATUS (state, payload) {
      state.error = payload
    },
    SET_NEW_FORM (state, payload) {
      state.newForm = payload
    }
  },
  actions: {
  }
}

export default store
