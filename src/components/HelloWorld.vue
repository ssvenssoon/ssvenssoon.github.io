<script>
  export default {
    props: {
      msg: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
</template>
