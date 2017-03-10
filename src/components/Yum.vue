<template>
  <transition name="fade">
    <div class="yum-wrapper">
      <transition name="fade">
        <div v-show="searching">
          <pizza-loader class="pizza-wrapper" />
        </div>
      </transition>
      <transition name="fade">
        <div v-show="notSearching">
          <div>
            <router-link class="back-button" :to="{ name: 'Welcome' }"><icon name="arrow-left" /></router-link>
            <div class="results-wrapper" >
              <div v-if="eatups.length !== 0" >
                <h1>found some eatups...</h1>
                <div v-for="eatup in eatups">
                  <div class="result" >
                    <div class="eatup-day">{{ eatup.dayAndTime }}</div>
                    <div class="eatup-name"><a target="_blank" v-bind:href="eatup.event_url" >{{ eatup.name }}</a></div>
                    <div class="eatup-description">{{ eatup.description }}</div>
                    <div class="icons-wrapper">
                      <icon v-if="eatup.foodProvided.food || eatup.foodProvided.pizza || eatup.foodProvided.snacks" name="cutlery"></icon>
                      <icon v-if="eatup.foodProvided.drinks" name="beer"></icon>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="eatups.length === 0" >
                <h1>Sorry, couldn't find any eatups...</h1>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  import 'vue-awesome/icons';
  import Icon from 'vue-awesome/components/Icon';
  import router from '../router';
  import PizzaLoader from './PizzaLoader';

  export default {
    name: 'Yum',
    beforeMount() {
      if (!this.$store.state.searching && this.$store.state.eatups.length === 0) {
        router.push('/');
      }
    },
    computed: {
      eatups() {
        return this.$store.state.eatups;
      },
      searching() {
        return this.$store.state.searching || !this.$store.state.eatups;
      },
      notSearching() {
        return !this.$store.state.searching && this.$store.state.eatups;
      },
    },
    components: {
      PizzaLoader,
      Icon,
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-family: 'Gochi Hand';
    color: white;
    font-size: 50px;
    margin-top: 60px;
    margin-bottom: 80px;
  }

  .icons-wrapper {
    position: relative;
    display: block;
    left: 90px;
    width: 600px;
    text-align: left;
    font-weight: 800;
    margin-top: 10px;
    font-family: "Montserrat";
    color: white;
  }

  .icons-wrapper svg {
    width: 20px;
    height: 20px;
  }

  .back-button {
    position: absolute;
    left: 60px;
  }

  .back-button svg{
    width: 40px;
    height: 40px;
    fill: white;
    transition: 0.2s all;
  }

  .back-button svg:hover {
    fill: #d7d7d7;
  }

  .pizza-wrapper {
    margin: 280px auto;
  }
  .yum-wrapper {
    width: 100%;
    background-color: #f62121;
  }

  .result {
    position: relative;
    width: 100%;
    margin-bottom: 60px;
  }

  .eatup-day {
    position: absolute;
    display: block;
    left: -175px;
    text-align: right;
    width: 200px;
    font-family: "Montserrat";
    color: white;
    font-weight: 800;
  }

  .eatup-name {
    position: relative;
    display: block;
    left: 90px;
    width: 600px;
    text-align: left;
    font-weight: 800;
    font-size: 20px;
    font-family: "Montserrat";
    color: white;
  }

  .eatup-description {
    position: relative;
    display: block;
    left: 90px;
    width: 600px;
    text-align: justify;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 10px;
    word-wrap: break-word;
    font-family: "Montserrat";
    color: #f1f1f1;
    font-size: 13px;
  }

  .results-wrapper {
    width: 500px;
    margin: 50px auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: #f1f1f1;
  }
</style>
