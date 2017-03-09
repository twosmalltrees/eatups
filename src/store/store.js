import vue from 'vue';
import Vuex from 'vuex';
import { getMeetups } from '../lib/meetups'
import router from '../router';

vue.use(Vuex);

const store = new Vuex.store({
  state: {
    eatups: [],
  },
  actions: {
    async getMeetups({ dispatch, commit }, searchParams) {
      // commit('gotMeetups', await getMeetups(searchParams));
      console.log('did nothing');
    },
    async getEatups({ dispatch, commit, state }) {
      // await('')
      console.log('did nothing');
    },
    async search({ dispatch, commit }, searchParams) {
      router.push('/yum')
      await dispatch('getMeetups', searchParams);
      await dispatch('getEatups');
    }
  },
})
