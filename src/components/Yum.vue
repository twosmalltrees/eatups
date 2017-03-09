<template>
  <transition name="fade">
    <div class="yum-wrapper">
      <div v-if="searching">
        <pizza-loader />
      </div>
      <div v-else>
        <router-link :to="{ name: 'Welcome' }">Back</router-link>
        <h1>yum</h1>
        <ul>
          <li v-for="eatup in eatups">
            {{ eatup.name }}
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
  import PizzaLoader from './PizzaLoader';

  export default {
    name: 'Yum',
    computed: {
      eatups() {
        return this.$store.state.eatups;
      },
      searching() {
        return this.$store.state.searching || !this.$store.state.eatups;
      },
    },
    components: {
      PizzaLoader,
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .yum-wrapper {
    background-color: yellow;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
