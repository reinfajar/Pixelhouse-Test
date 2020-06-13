<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="todo">
            New Todo
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo" type="text" placeholder="New Todo" v-model="title" required>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click.prevent="create()">
            Create
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    create () {
      if (this.title === '') {
        const response = 'Todo must not be blank'
        this.$store.commit('SET_ERROR_MESSAGE', response)
      } else {
        const todo = {
          userId: 1,
          id: (this.$store.state.todos.todos[this.$store.state.todos.todos.length - 1].id) + 1,
          title: this.title,
          completed: false
        }
        this.$store.commit('NEW_TODOS', todo)
        this.$store.commit('SET_ERROR_STATUS', false)
        this.$store.commit('SET_NEW_FORM', false)
      }
    }
  }
}
</script>

<style>

</style>
