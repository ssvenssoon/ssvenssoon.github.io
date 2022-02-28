<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink to="/" class="nav-link">
        <img src="../dist/icon.png" alt="" style="height: 50px" />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Navigation
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <RouterLink to="/search" class="dropdown-item">
                  TV-Shows
                </RouterLink>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <p id="time">{{ currentDateTime() }}</p>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <div class="alert-container">
      <div
        v-if="connectionStatus !== true"
        class="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        You are not connected to internet.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </div>
    <RouterView />
  </main>
  <footer class="bg-light text-center text-white">
    <div class="container p-4 pb-0">
      <section class="mb-4">
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #3b5998"
          href="#!"
          role="button"
        >
          <i class="fab fa-facebook-f" />
        </a>
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #55acee"
          href="https://twitter.com/Guas_ve"
          target="_blank"
          role="button"
        >
          <i class="fab fa-twitter" />
        </a>

        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #ac2bac"
          href="#!"
          role="button"
        >
          <i class="fab fa-instagram" />
        </a>
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #0082ca"
          href="#!"
          role="button"
        >
          <i class="fab fa-linkedin-in" />
        </a>
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #333333"
          href="#!"
          role="button"
        >
          <i class="fab fa-github" />
        </a>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright
    </div>
  </footer>
</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        connectionStatus: navigator.onLine
      }
    },
    methods: {
      currentDateTime() {
        return moment().format('YYYY/MM/DD')
      }
    }
  }
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  body {
    background: #0f0520;
  }
  #time {
    display: none;
    padding-left: 30px;
    align-self: center;
    margin: 0;
    color: #fff;
  }
  footer {
    margin-top: auto;
  }
  .btn-floating {
    border: none;
    border-radius: 50%;
  }
  .btn-floating:hover {
    opacity: 0.9;
  }
  .nav-link {
    text-align: center;
  }
  .dropdown-menu {
    text-align: center;
  }
  .alert-container {
    display: flex;
    justify-content: center;
  }
  .alert {
    margin: 0;
  }
  @media only screen and (min-width: 992px) {
    #time {
      display: flex;
    }
    .navbar-collapse {
      display: flex;
      justify-content: flex-start;
    }
  }
</style>
