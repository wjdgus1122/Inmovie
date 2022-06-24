import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "18546a472387723b0b6570e2ccb0741e",
    language: "ko-kr",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  latest: () => api.get("movie/latest"),
  upComing: () => api.get("movie/upcoming"),
};
