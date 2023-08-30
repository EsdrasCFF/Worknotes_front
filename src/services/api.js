import axios from "axios";

export const api = axios.create({
  baseURL: "https://writenotes-api-5caf19a80683.herokuapp.com"
});