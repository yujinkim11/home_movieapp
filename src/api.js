import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a0c00eb5e3cae224bdc5208275b7c9b8",
    language: "ko-kr",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  latest: () => api.get("movie/latest"),
  upComming: () => api.get("movie/upcoming"),
  movieDetail: (id) => api.get(`movie/${id}`),
  video: (id) => api.get(`movie/${id}/videos`),
};
