const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  actions: {},
  mutations: {},
};

export default authStore;
