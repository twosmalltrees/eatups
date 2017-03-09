import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Yum from '@/components/Yum';
import Login from '@/components/Login';
import AccessToken from '@/components/AccessToken';
import { userIsLoggedIn } from '../lib/auth';

Vue.use(Router);

function checkUserLogin(to, from, next) {
  if (!userIsLoggedIn()) {
    next({ path: '/login' });
  }
  next();
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      beforeEnter: checkUserLogin,
    },
    {
      path: '/yum',
      name: 'Yum',
      component: Yum,
      beforeEnter: checkUserLogin,

    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/access_token',
      name: 'AccessToken',
      component: AccessToken,
    },
  ],
});
