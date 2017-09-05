<script>
  import store from './store'
  import logo from './Logo.vue'
  import greeting from './Greeting.vue'

  export default {
    name: 'app',

    store,

    components: { logo, greeting },

    computed: {
      msg() {
        return this.$store.state.message
      },
      count() {
        return this.$store.state.counter
      },
      completeMessage() {
        return this.$store.getters.completeMessage
      }
    },

    methods: {
      addCount() {
        this.$store.commit('increment')
      }
    }
  }
</script>

<template>
  <div id="app">
    <logo></logo>
    <greeting :msg="msg" @clicked="addCount"></greeting>
    <p v-if="count">Clickeaste {{ count }} veces</p>

    <p>Complete Message from computed property: {{ completeMessage }}</p>
  </div>
</template>

<style>
  body {
    background-color: #F4F4F4;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    width: 100%;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
</style>
