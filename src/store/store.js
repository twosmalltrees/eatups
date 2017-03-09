import vue from 'vue';
import Vuex from 'vuex';
import getMeetups from '../lib/meetups';
import getEatups from '../lib/eatups';
import router from '../router';

vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    meetups: [],
    eatups: [],
  },
  mutations: {
    gotMeetups(state, payload) {
      state.meetups = payload;
    },
    gotEatups(state, payload) {
      state.eatups = payload;
    },
    clearEatups(state) {
      state.eatups = [];
    },
  },
  actions: {
    async getMeetups({ commit }, searchParams) {
      commit('gotMeetups', await getMeetups(searchParams));
    },
    async getEatups({ commit, state }) {
      commit('gotEatups', await getEatups(state.meetups));
    },
    async search({ dispatch, commit }, searchParams) {
      commit('clearEatups');
      router.push('/yum');
      await dispatch('getMeetups', searchParams);
      await dispatch('getEatups');
    },
  },
});

export default store;
