import axios from "axios";

const api = axios.create({
  baseURL: "https://achei-aqui-backend.onrender.com",
  withCredentials: true   // ← obrigatório quando credentials: true no backend
});

export default api;
