<template>
  <div class="welcome">
    <h1>eatups</h1>
    <form v-on:submit="onSubmit">
      <input type="text" id="query" v-model="query" />
      <button type="submit">Search</button>
    </form>
    <div>{{ query }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    data() {
      return {
        query: '',
      };
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        console.log('Log');
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
