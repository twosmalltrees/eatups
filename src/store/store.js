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
    searching: false,
  },
  mutations: {
    gotMeetups(state, payload) {
      state.meetups = payload;
    },
    gotEatups(state, payload) {
      state.eatups = payload;
    },
    startedSearching(state) {
      state.searching = true;
    },
    finishedSearching(state) {
      state.searching = false;
    },
    clearEatups(state) {
      state.eatups = [];
    },
  },
  actions: {
    async getMeetups({ commit }, params) {
      commit('gotMeetups', await getMeetups(params));
    },
    async getEatups({ commit, state }) {
      await commit('gotEatups', getEatups(state.meetups));
      await commit('finishedSearching');
    },
    async search({ dispatch, commit }, searchParams) {
      await commit('clearEatups');
      await commit('startedSearching');
      router.push('/yum');
      await dispatch('getMeetups', searchParams);
      dispatch('getEatups');
    },
  },
});

export default store;
