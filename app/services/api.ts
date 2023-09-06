import axios from "axios";
import { getAPIClient } from "./axios";

//export const api = getAPIClient();

export const api = axios.create({
  baseURL: process.env.HOST,
  /* headers: {
      Authorization: `Bearer ${token}`,
    }, */
});
