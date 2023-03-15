import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './modules/UserModule'
import TasksModule from './modules/TasksModule'
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
  paths: ["UserModule.token"],
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoading: false,
  },
  mutations: {
    SET_LOADING(state) {
      state.showLoading = !state.showLoading;
    },
  },
  actions: {
    setLoading({ commit }) {
      commit('SET_LOADING');
    },  
  },
  modules: {
    TasksModule,
    UserModule,
  },
  plugins: [dataState],
})
