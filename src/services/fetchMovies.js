const API_KEY = '1ff9cb73d27cc7d9799106b09843bd63';
const BASE_URL = 'https://api.themoviedb.org';

// const aps = "https://api.themoviedb.org/3/trending/all/day?api_key=1ff9cb73d27cc7d9799106b09843bd63";

export const fetchMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`,
  );
  console.log(response.ok);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
};
