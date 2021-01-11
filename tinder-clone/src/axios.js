import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://localhost:8001",
  baseURL: "https://john-tinder-backend.herokuapp.com/",
});

export default instance;
