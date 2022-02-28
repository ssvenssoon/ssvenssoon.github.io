<template>
  <div class="card-container">
    <div class="card" style="width: 18rem">
      <img src="../../public/icon.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">About</h5>
        <p class="card-text">
          This is a website where you can search for your favourite Tv-Show from
          all over the world. <br />
          <br />
          With some of the shows you will be served with links so that you can
          easily access the website where the Tv-Show is streamed. You can also
          see what rating the Tv-Show has. Only to make it easy for you to find
          a show that you might like.
        </p>
        <div class="card-item-about">
          <RouterLink to="/contact" class="btn btn-primary">
            Contact
          </RouterLink>
          <RouterLink to="/search" class="btn btn-primary"> Search </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    width: 100%;
  }
  h5 {
    font-weight: bold;
  }
  .card-item-about {
    display: flex;
    flex-direction: row;
  }
  .card-item-about .btn {
    margin: 0 5px;
  }
</style>
