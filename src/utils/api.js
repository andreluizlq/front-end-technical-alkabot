import axios from "axios";

export const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
