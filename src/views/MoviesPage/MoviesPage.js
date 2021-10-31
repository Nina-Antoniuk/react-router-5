import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { fetchMoviesByName } from '../../services/fetchMovies';

function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const location = useLocation();

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    fetchMoviesByName(searchValue)
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(err => {
        setErr(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {isLoading ? (
        <div className="Loader">
          <Loader type="Grid" color="#8d6675" height={200} width={200} />
        </div>
      ) : (
        <ul>
          {err ? (
            <li>
              <b>Opps... something went wrong, nothing was found!</b>
            </li>
          ) : (
            movies.map(el => {
              return (
                <li key={el.id}>
                  <Link
                    to={{
                      pathname: `/${el.id}`,
                      state: {
                        from: { location, label: `back to search` },
                      },
                    }}
                  >
                    {el.title}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      )}
    </>
  );
}
export default MoviesPage;
