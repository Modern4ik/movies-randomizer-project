import axios from "axios";
const API_KEY = "63DX86Q-DQV4KAZ-MR1APN1-CW3KKVZ";

export default class MovieService {
  static async getRandomMovie(movieType, movieJenre) {
    // const searchHeaders = {
    //     "Content-Type": "application/json",
    //       "X-API-KEY": API_KEY,
    // }
    // const searchParams = {
    //     notNullFields: "poster.url",
    //       type: "tv-series",
    //       "genres.name": "боевик",
    //       "rating.imdb": "5 - 8",
    // }

    const response = await axios.get(
      "https://api.kinopoisk.dev/v1.4/movie/random",
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
        params: {
          notNullFields: "poster.url",
          type: "tv-series",
          "genres.name": "боевик",
          "rating.imdb": "5 - 8",
        },
      }
    );

    console.log(response.data);
  }
}
