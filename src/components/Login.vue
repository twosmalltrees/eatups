<template>
  <div class="login">
    <div class="logo-wrapper">
    <div class="logo-outer">
      <div class="logo-inner">
        <h1>eatups</h1>
      </div>
    </div>
    <a v-on:click="login">SIGN IN</a>
    </div>
  </div>
</template>

<script>
  import { beginImplicitFlow } from '../lib/auth';

  export default {
    name: 'Login',
    methods: {
      login(event) {
        event.preventDefault();
        beginImplicitFlow();
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
    font-family: 'Gochi Hand';
    font-size: 70px;
    color: black;
    padding-top: 15px;
  }

  .login {
    width: 100%;
  }

  .logo-wrapper {
    width: 300px;
    margin: 220px auto;
  }

  .logo-outer {
    background-color: #f62121;
    width: 300px;
    height: 180px;
    border-radius: 20px;
  }

  .logo-inner {
    position: relative;
    left: 0;
    top: 45px;
    left: 5px;
    width: 290px;
    height: 110px;
    background-color: white;
    width:
  }

  a {
    box-sizing: border-box;
    display: block;
    margin-top: 20px;
    font-family: 'Montserrat';
    border: 5px solid #f62121;
    color: #f62121;
    width: 300px;
    font-size: 25px;
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s;
  }

  a:hover {
    background-color: #f9bac5;
    color: #bd1633;
    border-color: #bd1633;
  }
</style>
