<template>
  <div class="welcome">
    <h1>eatups</h1>
    <form class="search-form" v-on:submit="topicSearch">
      <input autocomplete="off" placeholder="Learn while you eat..." class="search-input" type="text" id="searchString" v-model="searchString" />
      <button class="search-button" type="submit">Search</button>
      <a class="just-eat-button" v-on:click="justEat">I'm just hungry</a>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Welcome',
    data() {
      return {
        searchString: '',
      };
    },
    methods: {
      ...mapActions([
        'search',
      ]),
      topicSearch(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.search({ text: this.searchString, lat, lon });
        });
      },
      justEat(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.search({ lat, lon });
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome {
    background-color: #f62121;
  }

  .search-form {
    box-sizing: border-box;
    position: relative;
    width: 400px;
    margin: 0 auto;
  }

  .just-eat-button {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 59px;
    color: white;
    height: 48px;
    background-color: #f62121;
    border: 4px solid white;
    border-radius: 15px;
    padding-top: 7px;
    width: 100%;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s;
  }

  .just-eat-button:hover {
    color: #d7d7d7;
    border-color: #d7d7d7;
  }

  .search-input {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 62.5%;
    height: 30px;
    border-radius: 10px;
    border: none;
    font-size: 12px;
    font-family: 'Montserrat';
    font-weight: 400;
    padding-left: 15px;
  }

  .search-input:focus {
    outline: none;
  }

  .search-button {
    box-sizing: border-box;
    background-color: white;
    color: #f62121;
    position: absolute;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    right: 0;
    width: 32.5%;
    height: 30px;
    border-radius: 10px;
    border: none;
    transition: all 0.2s;
  }

  .search-button:hover {
    background-color: #d7d7d7;
  }

  .search-button:active, .search-button:focus {
    outline: none;
  }

  h1, h2 {
    font-weight: normal;
    font-family: 'Gochi Hand';
    font-size: 130px;
    color: white;
    margin-top: 220px;
    margin-bottom: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #f62121;
  }
</style>
