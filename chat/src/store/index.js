import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/plugins/firebase';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
});

firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChange', user);
});

export default store;
