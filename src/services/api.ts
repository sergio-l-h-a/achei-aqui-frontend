import axios from "axios";

const api = axios.create({
  baseURL: "https://achei-aqui-backend.onrender.com/imagens",
});

export default api;
