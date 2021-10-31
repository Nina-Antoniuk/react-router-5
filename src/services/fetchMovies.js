const API_KEY = '1ff9cb73d27cc7d9799106b09843bd63';
const BASE_URL = 'https://api.themoviedb.org';

export const fetchTrendMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`,
    );
    console.log('response from serv', response);
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
    // if (response.status === 400) throw new Error();
    // if (response.status === 200) return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieById = async id => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`,
    );
    console.log('response from serv by id', response);
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviesByName = async value => {
  const searchResult = await fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${value}`,
  );
  return searchResult.ok
    ? await searchResult.json()
    : Promise.reject(new Error('Not found'));
};
