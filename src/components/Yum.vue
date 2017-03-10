<template>
  <transition name="fade">
    <div class="yum-wrapper">
      <div v-if="searching">
        <pizza-loader class="pizza-wrapper" />
      </div>
      <div v-else>
        <router-link :to="{ name: 'Welcome' }">Back</router-link>
        <h1>yum</h1>
          <div v-for="eatup in eatups">
            <div class="eatup-day">{{ eatup.dayAndTime }}</div>
            <div class="eatup-name">{{ eatup.name }}</div>
          </div>
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
  .pizza-wrapper {
    margin: 280px auto;
  }
  .yum-wrapper {
    width: 100%;
    background-color: #f62121;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
