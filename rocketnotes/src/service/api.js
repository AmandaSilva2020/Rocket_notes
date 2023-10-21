import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-79sf.onrender.com"
});