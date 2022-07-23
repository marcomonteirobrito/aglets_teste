import axios from 'axios';

const baseURL = "http://aglets.com.br/prova/prova.json"

const api = axios.create({
  baseURL 
})

export default api;