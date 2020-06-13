<template>
  <div role="alert" class="container px-5 mx-auto">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2 mx-auto">
      Error
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p v-for="error in errors" :key="error">{{error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    errors () {
      return this.$store.state.active.errorMessages
    }
  }
}
</script>

<style>

</style>
