import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../views/HomePage';
import MoviesPage from '../../views/MoviesPage';
import MovieDetailsPage from '../MovieDetailsPage';
import NestingExample from '../test/Test';

function NavRouts() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/movies">
        <MoviesPage />
      </Route>
      <Route exact path="/:moviesId">
        <MovieDetailsPage />
      </Route>
      {/* <Route exact path="/test">
        <NestingExample />
      </Route> */}
      {/* <Route>
        <Redirect exact to="/" />
      </Route> */}
    </Switch>
  );
}
export default NavRouts;
