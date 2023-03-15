import axios from 'axios'

export default {
  namespaced: true,
  state: {
    user: null,
    token: '',
    loggedIn: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.loggedIn = true
    },
    SET_TOKEN(state, token) {
      state.token = token
      console.log(state.token);
      state.loggedIn = true
    },
  },
  actions: {
    async apiLogin({commit}, dataUser) {
      try {
        console.log(dataUser);
        const response = await axios.post('http://localhost:3000/login', dataUser)
        const user = response.data.user
        const token = response.data.token
        commit('SET_USER', user)
        commit('SET_TOKEN', token)
        return { success: true, data: user }
      } catch (error) {
        console.log(error)
        return { success: false, error }
      }
    },
    async apiRegister({commit}, dataUser) {
      try {
        console.log(dataUser);
        const response = await axios.post('http://localhost:3000/users', dataUser)
        const user = response.data
        const token = response.data.token
        commit('SET_TOKEN', token)
        commit('SET_USER', user)
        return { success: true, data: user }
      } catch (error) {
        console.log(error)
        return { success: false, error }
      }
    }
  }
}
