import axios from "axios";

const api = axios.create({
  baseURL:
    "https://www.omdbapi.com/",
});

//creating a get req function
export const getMovies = () => {
  return api.get("?i=tt3896198&apikey=47aee04e&s=titanic&page=1");
};

