import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
