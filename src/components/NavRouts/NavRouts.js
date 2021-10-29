import { Switch, Route } from 'react-router-dom';
import HomePage from '../../views/HomePage';
import MoviesPage from '../../views/MoviesPage';

function NavRouts() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>
      <Route>
        <p>redirect</p>
      </Route>
    </Switch>
  );
}
export default NavRouts;
