<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-5">
        <div class="slider">
          <div
            id="carouselExampleIndicators"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../../assets/tv-series.webp"
                  class="d-block w-100"
                  alt="TV-Series image"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/hbo-2.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../assets/TV_grid_sm@3x.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-3"><InputSearchVue /></div>
      <div class="col-lg-4">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Why?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                I've built this website for you to provide accessibility to a
                smoother way of finding TV series.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What I want to achieve!
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                I want to build an interactive and user-friendly website so that
                you as a visitor can quickly navigate between different
                streaming services.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Info!
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                If available, this is the info you will get just by typing the
                name of your favourite Tv-Show:
                <infoComponentVue
                  name="Tv-show name"
                  rating=" Rating 0 - 10"
                  country="In what country the tv-show is made"
                  link="Link to streaming services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputSearchVue from '../components/InputSearch.vue'
  import infoComponentVue from '../components/infoComponent.vue'
  export default {
    components: {
      InputSearchVue,
      infoComponentVue
    }
  }
</script>

<style lang="scss" scoped>
  $accordion: #0f0520;
  h1 {
    text-align: center;
  }
  .col {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .col-md-5 {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .accordion-button {
    background: $accordion;
    color: #fff;
  }
  .col-lg-3 {
    margin-top: 30px;
  }
  .col-lg-4 {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .col-lg-5 {
    margin-top: 30px;
  }
</style>
