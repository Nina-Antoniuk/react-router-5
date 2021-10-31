import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Loader from 'react-loader-spinner';
import s from './HomePage.module.css';
import { fetchTrendMovies } from '../../services/fetchMovies';

const STATUS = {
  init: 'init',
  pending: 'pending',
  resolve: 'resolve',
  rejected: 'rejected',
};

function HomePage() {
  const [trendsMovies, setTrendsMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.init);
  const location = useLocation();

  useEffect(() => {
    setStatus(STATUS.pending);
    fetchTrendMovies()
      .then(data => {
        setTrendsMovies(data.results);
        setStatus(STATUS.resolve);
      })
      .catch(err => {
        setStatus(STATUS.rejected);
      });
  }, []);

  if (status === STATUS.init) {
    return <div></div>;
  }

  if (status === STATUS.pending) {
    return (
      <div className="Loader">
        <Loader type="Grid" color="#8d6675" height={200} width={200} />
      </div>
    );
  }

  if (status === STATUS.rejected) {
    return (
      <p>
        <b>Opps, the request was rejected, try again!</b>
      </p>
    );
  }

  if (status === STATUS.resolve) {
    return (
      <div className={s.HomePage}>
        <h2>Trending today</h2>
        <ul className={s.list}>
          {trendsMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  className={s.listItem}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: { location, label: `back to home` },
                    },
                  }}
                >
                  {movie.title ?? movie.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HomePage;
