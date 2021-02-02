import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/plugins/firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChange', user);
});

export default store;
