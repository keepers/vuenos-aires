<script>
  import logo from './Logo.vue'
  import greeting from './Greeting.vue'

  export default {
    name: 'app',

    components: { logo, greeting },

    data() {
      return {
        msg: '👋 Vuenos Aires',
        count: 0
      }
    },

    methods: {
      addCount() {
        this.count++
      }
    }
  }
</script>

<template>
  <div id="app">
    <logo></logo>
    <greeting :msg="msg" @clicked="addCount()"></greeting>
    <p v-if="count">Clickeaste {{ count }} veces</p>
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
