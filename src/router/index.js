import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Yum from '@/components/Yum';
import Login from '@/components/Login';
import AccessToken from '@/components/AccessToken';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/yum',
      name: 'Yum',
      component: Yum,
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
