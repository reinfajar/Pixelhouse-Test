<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-orange-200 m-4">
    <div class="px-6 py-4" v-if="edit == false">
      <div class="font-bold text-xl mb-2">{{todo.title}}</div>
    </div>
    <form class="bg-white shadow-md rounded" v-else-if="edit == true" @submit.prevent="submit(todo, index)">
      <div class="px-6 py-4">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo" type="text" placeholder="todo" v-model="title">
      </div>
    </form>
    <div class="flex justify-between">
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" v-if="todo.completed !== false" @click.prevent="prev(todo)">
        Prev
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" @click.prevent="del(todo, index)">
        Delete
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click.prevent="patch(todo, index)" v-if="edit == false">
        Edit
      </button>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" @click.prevent="submit(todo, index)" v-if="edit == true">
        Submit
      </button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" v-if="todo.completed !== true" @click.prevent="next(todo, index)">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      title: String,
      edit: false,
      payload: Object
    }
  },
  props: {
    todo: Object,
    index: Number
  },
  methods: {
    next (todo, index) {
      if (todo.completed === false) {
        todo.completed = 0
      } else if (todo.completed === 0) {
        todo.completed = true
      }
      this.payload = { index, todo }
      this.$store.commit('UPDATE_TODOS', this.payload)
      // console.log(this.$store.state.todos.todos)
    },
    prev (todo, index) {
      if (todo.completed === true) {
        todo.completed = 0
      } else if (todo.completed === 0) {
        todo.completed = false
      }
      this.payload = { index, todo }
      this.$store.commit('UPDATE_TODOS', this.payload)
    },
    patch (todo, index) {
      this.title = todo.title
      this.edit = true
    },
    submit (todo, index) {
      if (this.title === '') {
        const response = 'Todo must not be blank'
        this.$store.commit('SET_ERROR_MESSAGE', response)
      } else {
        todo.title = this.title
        this.edit = false
        this.payload = { index, todo }
        this.$store.commit('UPDATE_TODOS', this.payload)
        this.$store.commit('SET_ERROR_STATUS', false)
      }
    },
    del (todo, index) {
      const todoList = this.$store.state.todos.todos
      todoList.splice(index, 1)
      this.$store.commit('SET_TODOS', todoList)
    }
  }
}
</script>

<style>

</style>
