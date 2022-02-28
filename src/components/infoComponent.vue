<template>
  <ul>
    <li>{{ name }}</li>
    <li>{{ rating }}</li>
    <li>{{ country }}</li>
    <li>{{ link }}</li>
  </ul>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      rating: {
        type: String,
        default: ''
      },
      country: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      }
    }
  }
</script>
