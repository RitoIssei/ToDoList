import api from '@/plugins/Axios'

export default {
  namespaced: true,
  state: {
    tasks: []
    },
    mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task)
    },
    UPDATE_TASK(state, { index, task}) {
      state.tasks.splice(index, 1, task)
    },
    DELETE_TASK(state, index) {
      state.tasks = state.tasks.filter((task) => task.id !== index);
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    }
    },
    actions: {
    async addTask({commit}, task) {
      try {
        const response = await api.post('tasks', task)
        const newTask = response.data
        const date = new Date(newTask.deadline)
        date.setDate(date.getDate() + 1)
        newTask.date = date
        commit('ADD_TASK', newTask)
      } catch (error) {
        console.log(error)
      }
    },
    async updateTask({commit, state}, task) {
      try {
        const index = state.tasks.findIndex(t => t.id === task.id)
        const response = await api.put(`tasks/${task.id}`, task)
        const updatedTask = response.data
        commit('UPDATE_TASK', { index, updatedTask })
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTask({commit}, index) {
      try {
        await api.delete(`tasks/${index}`)
        commit('DELETE_TASK', index)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTasks({commit}) {
      try {
        const response = await api.get('tasks')
        const tasks = response.data
        tasks.forEach(task => {
          const date = new Date(task.deadline)
          date.setDate(date.getDate() + 1) // thêm 1 ngày vào deadline
          task.date = date // lưu vào thuộc tính date
        })
        commit('SET_TASKS', tasks)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
