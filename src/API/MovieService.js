import axios from "axios";
const API_KEY = "63DX86Q-DQV4KAZ-MR1APN1-CW3KKVZ";

export default class MovieService {
  static async getRandomMovie(movieType, movieJenre, movieRating, showCount) {
    const searchHeaders = {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    };
    const searchParams = {
      notNullFields: ["poster.url", "description"],
      type: movieType,
      "genres.name": movieJenre,
      "rating.kp": movieRating,
    };

    const requests = [];

    for (let i = 0; i < showCount; i++) {
      requests.push(
        new Promise(async (resolve, reject) => {
          try {
            const response = await axios.get(
              "https://api.kinopoisk.dev/v1.4/movie/random",
              {
                headers: {
                  ...searchHeaders,
                },
                params: {
                  ...searchParams,
                },

                paramsSerializer: {
                  indexes: null,
                },
              }
            );

            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        })
      );
    }

    const responsesData = await Promise.all(requests);

    return responsesData;
  }
}
