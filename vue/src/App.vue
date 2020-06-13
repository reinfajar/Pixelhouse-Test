<template>
  <div id="app" class="max-h- screen">
    <Navbar />
    <Error v-if="error" />
    <Form v-if="form" />
    <Loading v-if="loading" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Form from './components/form'
import Loading from './components/loading'
import Error from './components/error'
export default {
  name: 'App',
  components: {
    Navbar,
    Form,
    Loading,
    Error
  },
  computed: {
    form () {
      return this.$store.state.active.newForm
    },
    loading () {
      return this.$store.state.active.loading
    },
    error () {
      return this.$store.state.active.error
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000046;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
