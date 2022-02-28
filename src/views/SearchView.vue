<template>
  <div id="container">
    <InputSearch />
  </div>
</template>

<script>
  import InputSearch from '../components/InputSearch.vue'

  export default {
    components: {
      InputSearch
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  }
</style>
