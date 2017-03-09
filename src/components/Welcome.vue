<template>
  <div class="welcome">
    <h1>eatups</h1>
    <form v-on:submit="topicSearch">
      <input type="text" id="searchString" v-model="searchString" />
      <button type="submit">Search</button>
    </form>
    <button v-on:click="justEat">I'm just hungry</button>
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
    background-color: #ed1c40;
  }

  h1, h2 {
    font-weight: normal;
    font-family: 'Gochi Hand';
    font-size: 50px;
    color: white;
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
    color: #42b983;
  }
</style>
