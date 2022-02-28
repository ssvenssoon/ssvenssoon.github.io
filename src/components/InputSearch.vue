<template>
  <div class="input-container">
    <input
      id="input"
      @keyup="keyEnter"
      v-model="names"
      placeholder="Search TV-Shows..."
    />

    <div id="buttons">
      <button @click="fetchShows" type="button" class="btn btn-primary">
        Search
      </button>
      <button @click="clear" type="button" class="btn btn-danger">Clear</button>
    </div>
    <ul>
      <li id="results" v-for="result in results" :key="result.id">
        <div v-if="result.image !== ''">
          <img :src="result.image" style="width: 40px" />
        </div>

        <div v-else>
          <img
            style="width: 40px; height: 40px"
            src="../../assets/placeholder.png"
          />
        </div>
        <div id="name-rating">
          <a :href="result.links" target="_blank">{{ result.name }}</a>
          <div id="rating">
            Rating:
            <p
              v-if="result.rating !== null"
              :style="[
                result.rating >= 7 ? { color: 'green' } : { color: 'red' }
              ]"
            >
              {{ result.rating }}
            </p>
            <p v-else>None</p>
          </div>
          <p>
            {{ result.country }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        results: [],
        names: ''
      }
    },
    methods: {
      fetchShows() {
        const url = `https://api.tvmaze.com/search/shows?q=${this.names}`
        fetch(url)
          .then((response) => response.json())
          .then((jsonData) => {
            jsonData.forEach((element) => {
              this.results.push({
                name: element.show.name,
                image: element.show.image ? element.show.image.medium : '',
                links: element.show.officialSite,
                rating: element.show.rating.average,
                country: element.show.network.country.name
              })
            })
          })
        this.results = []
      },
      clear() {
        this.results = []
        this.names = ''
      },
      keyEnter(event) {
        if (event.keyCode === 13) {
          event.preventDefault()
          this.fetchShows()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $result-color: #a3ffe3;
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #results {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 5px;
  }
  #input {
    margin-bottom: 5px;
  }
  #name-rating {
    margin-left: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  #name-rating a {
    color: $result-color;
  }
  #name-rating p {
    color: $result-color;
  }
  #rating {
    display: flex;
    color: $result-color;
  }
  #rating p {
    margin-left: 5px;
    margin-bottom: 2px;
  }
  .btn {
    margin: 10px;
  }
</style>
