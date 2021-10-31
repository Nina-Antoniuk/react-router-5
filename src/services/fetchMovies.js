const API_KEY = '1ff9cb73d27cc7d9799106b09843bd63';
const BASE_URL = 'https://api.themoviedb.org';

export const fetchTrendMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`,
    );
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieById = async id => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`,
    );
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviesByName = async value => {
  try {
    const searchResult = await fetch(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${value}`,
    );
    return searchResult.ok
      ? await searchResult.json()
      : Promise.reject(new Error('Not found'));
  } catch (err) {
    console.log(err);
  }
};

export const fetchCredits = async id => {
  try {
    const result = await fetch(
      `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}`,
    );
    return result.ok
      ? await result.json()
      : Promise.reject(new Error('Not found'));
  } catch (err) {
    console.log(err);
  }
};
