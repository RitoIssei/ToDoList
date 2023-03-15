import axios from "axios";
import store from "@/store/index.js";
// import store from "@/store/modules/UserModule";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  store.dispatch("setLoading");
  config.headers = {
    Authorization: "Bearer " + store.state.UserModule.token,   
  };
  return config;
});

api.interceptors.response.use((result) => {
  store.dispatch("setLoading");
  return result;
});
export default api;