import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Yum from '@/components/Yum';

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
  ],
});
