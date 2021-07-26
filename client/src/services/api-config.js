import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://angry-hamilton-566cf5.netlify.app/"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
