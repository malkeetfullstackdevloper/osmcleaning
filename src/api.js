import axios from "axios";

const API_URL = "https://admin.osmcleaningservices.au/api"; // Laravel Backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
