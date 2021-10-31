import { useState, useEffect } from 'react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { fetchMovieById } from '../../services/fetchMovies';

function MovieDetailsPage() {
  const [film, setFilm] = useState({});
  const [state, setState] = useState('init');
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  let { path, url } = useRouteMatch();

  useEffect(() => {
    setState('pending');
    fetchMovieById(params.moviesId)
      .then(data => {
        // console.log('data', data)
        setFilm(data);
        setState('resolved');
      })
      .catch(err => {
        setState('rejected');
      });
  }, [params.moviesId]);

  const handleClick = () => {
    history.push(location.state.from.location.pathname);
  };

  if (state === 'init') {
    return <div></div>;
  }

  if (state === 'pending') {
    return (
      <div className="Loader">
        <Loader type="Grid" color="#8d6675" height={200} width={200} />
      </div>
    );
  }

  if (state === 'rejected') {
    return (
      <p>
        <b>Opps... something went wrong, nothing was found!</b>
      </p>
    );
  }

  if (state === 'resolved') {
    return (
      <div>
        <button type="button" onClick={handleClick}>
          Go back
        </button>
        <div>
          <p>film</p>
          {/* <img src={film.poster_path ?? ''} alt={film.tagline}/> */}
          {/* <h2>{film.title}</h2> */}

          {/* <ul>
            <li>
              <Link to="/movies/:movieId/cast">
                Casts
              </Link>
            </li>
            <li>
              <Link to="/movies/:movieId/review">
                Reviews
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path={path}>
              <p>empty list</p>
            </Route>
            <Route >
              <p>somthing new</p>
            </Route>
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
