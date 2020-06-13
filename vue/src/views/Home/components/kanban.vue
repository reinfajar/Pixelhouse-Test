<template>
  <section class="text-gray-700 body-font">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/3">
          <div class="h-full  rounded-lg overflow-hidden text-center relative">
            <div class="text-blue-300 font-bold text-xl mb-2">Todo</div>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div class="h-full  rounded-lg overflow-hidden text-center relative">
            <div class="text-blue-300 font-bold text-xl mb-2">On Progress</div>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div class="h-full  rounded-lg overflow-hidden text-center relative">
            <div class="text-blue-300 font-bold text-xl mb-2">Done</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-5 mx-auto overflow-y-auto h-screen">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/3">
          <div class="h-full bg-gray-200 rounded-lg overflow-hidden text-center relative">
            <div v-for="(todo, index) in todoList" :key="index">
              <Card v-if="todo.completed === false" :todo='todo' :index="index"/>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div class="h-full bg-gray-200 rounded-lg overflow-hidden text-center relative">
            <div v-for="(todo, index) in todoList" :key="index">
              <Card v-if="todo.completed === 0" :todo='todo' :index="index"/>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div class="h-full bg-gray-200 rounded-lg overflow-hidden text-center relative">
            <div v-for="(todo, index) in todoList" :key="index">
              <Card v-if="todo.completed === true" :todo='todo' :index="index"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Card from './card'
export default {
  name: 'Kanban',
  components: {
    Card
  },
  computed: {
    todoList () {
      // console.log(this.$store.state.todos.todos[0])
      return this.$store.state.todos.todos
    }
  },
  methods: {
    fetchTodos () {
      this.$store.commit('SET_LOADING', true)
      this.$store.dispatch('fetchTodos')
        .then(({ data }) => {
          this.$store.commit('SET_LOADING', false)
          this.$store.commit('SET_ERROR_STATUS', false)
          const array = []
          data.forEach(el => {
            if (el.userId === 1) {
              array.push(el)
            }
          })
          this.$store.commit('SET_TODOS', array)
        })
        .catch(({ response }) => {
          this.$store.commit('SET_LOADING', false)
          this.$store.commit('SET_ERROR_MESSAGE', response.data.message)
        })
    }
  },
  created () {
    this.fetchTodos()
  }
}
</script>

<style>

</style>
