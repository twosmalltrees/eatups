<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import store from './store/store';

export default {
  name: 'app',
  store,
  data() {
    return {
      transitionName: '',
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      if (to.name === 'Yum' && from.name === 'Welcome') {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },
  },
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .child-view {
    position: absolute;
    width: 100%;
    min-height: 100%;
    margin: 0;
    transition: all 0.5s ease;
  }
  .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
