import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
// import Nav from './components/Nav';
// import NavRouts from './components/NavRouts';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';

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
          {/* <li>
          <NavLink
            className={s.NavLink}
            activeClassName={s.activeNavLink}
            exact
            to="/test"
          >
           Test nesting
          </NavLink>
        </li> */}
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
        {/* <Route exact path="/test">
        <NestingExample />
      </Route> */}
        {/* <Route>
        <Redirect exact to="/" />
      </Route> */}
      </Switch>

      {/* <Nav />
      <NavRouts /> */}
    </div>
  );
}

export default App;
