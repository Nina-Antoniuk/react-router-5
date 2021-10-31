import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  return (
    <div>
      <nav>
        <ul className="NavList">
          <li>
            <NavLink
              className="NavLink"
              activeClassName="activeNavLink"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="NavLink"
              activeClassName="activeNavLink"
              exact
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>
        <Route exact path="/movies/:moviesId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <Redirect exact to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
