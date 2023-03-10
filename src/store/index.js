import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        userId: 1,
        title:
          "Test 1 Test 1 Test 1 Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1",
        description: "Test 1",
        date: new Date(2023, 1, 28),
        done: false,
      },
      {
        userId: 1,
        title: "Test 2",
        description: "Test 2",
        date: new Date(2023, 1, 29),
        done: false,
      },
      {
        userId: 1,
        title: "Test 3",
        description: "Test 3",
        date: new Date(2023, 1, 30),
        done: false,
      },
    ]
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task)
    },
    UPDATE_TASK(state, { index, task}) {
      state.tasks.splice(index, 1, task)
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    addTask( task) {
      commit('ADD_TASK', task)
    },
    updateTask({ index, task }) {
      commit('UPDATE_TASK', { index, task })
    },
    deleteTask( index) {
      commit('DELETE_TASK', index)
    },
    async fetchTasks({ commit }) {
      const response = await axios.get('http://your-server-url/tasks')
      const tasks = response.data
      commit('SET_TASKS', tasks)
    }
  }
})
