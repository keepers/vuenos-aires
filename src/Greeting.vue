<script>
  export default {
    name: 'greeting',

    props: {
      msg: {
        type: String,
        default: 'Default Message'
      }
    },

    methods: {
      newClick() {
        this.$emit('clicked')
      }
    }
  }
</script>

<template>
  <div>
    <h1 @click="newClick()">{{ msg }}</h1>
    <h3>El mensaje tiene {{ msg.length }} caracteres</h3>
  </div>
</template>

<style>
  h1 {
    font-weight: 300;
    margin: 0;
    font-size: 3.2em;
    color: #2c3e50;
  }

  h1:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  h3 {
    text-align: center;
    font-weight: 400;
  }
</style>
