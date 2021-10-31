import { useState, useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useLocation } from 'react-router';
import Loader from 'react-loader-spinner';
// import s from './HomePage.module.css';
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
  // const match = useMatch();
  // console.log(match)
  // console.log('location', location);

  useEffect(() => {
    setStatus(STATUS.pending);
    fetchTrendMovies()
      .then(data => {
        // console.log('homePage', data.results)
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
      <>
        <h2>Trending today</h2>
        <ul>
          {trendsMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: { location, label: `back to home` },
                    },
                  }}
                >
                  {movie.title ?? movie.name},{movie.id}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HomePage;
