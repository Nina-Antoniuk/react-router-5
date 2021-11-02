import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import s from './MoviesPage.module.css';
import { fetchMoviesByName } from '../../services/fetchMovies';

function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('searchMoviesList')) {
      setMovies(JSON.parse(localStorage.getItem('searchMoviesList')));
    }
  }, []);

  useEffect(() => {
    if (!searchValue) return;

    setIsLoading(true);
    fetchMoviesByName(searchValue)
      .then(data => {
        setMovies(data.results);
        localStorage.setItem('searchMoviesList', JSON.stringify(data.results));
        setIsLoading(false);
      })
      .catch(err => {
        setErr(true);
        setIsLoading(false);
      });
  }, [searchValue]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchValue(inputValue);
    setInputValue('');
  };

  return (
    <div className={s.MoviesPage}>
      <form>
        <input className={s.input} type="text" onChange={handleChange} />
        <button className={s.button} type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {isLoading ? (
        <div className="Loader">
          <Loader type="Grid" color="#8d6675" height={200} width={200} />
        </div>
      ) : (
        <ul className={s.list}>
          {err ? (
            <li>
              <b>Opps... something went wrong, nothing was found!</b>
            </li>
          ) : (
            movies.map(el => {
              // console.log('el', {id: el.id, title: el.title ?? el.name});
              // localStorage.setItem('searchMoviesList', JSON.stringify({id: el.id, title: el.title ?? el.name}));
              return (
                <li key={el.id}>
                  <Link
                    className={s.listItem}
                    to={{
                      pathname: `/movies/${el.id}`,
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
    </div>
  );
}

export default MoviesPage;
