import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        userId: 1,
        title:
          "Test 1 Test 1 Test 1 Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1",
        description: "Test 1",
        date: Date(2023, 1, 28),
        done: false,
      },
      {
        userId: 1,
        title: "Test 2",
        description: "Test 2",
        date: Date(2023, 1, 29),
        done: false,
      },
      {
        userId: 1,
        title: "Test 3",
        description: "Test 3",
        date: Date(2023, 1, 30),
        done: false,
      },
    ]
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task)
    },
    UPDATE_TASK(state, { index, task }) {
      state.tasks.splice(index, 1, task)
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1)
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task)
    },
    updateTask({ commit, state }, { index, task }) {
      commit('UPDATE_TASK', { index, task })
    },
    deleteTask({ commit, state }, index) {
      commit('DELETE_TASK', index)
    }
  }
})
