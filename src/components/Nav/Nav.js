import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav>
      <ul className={s.NavList}>
        <li>
          <NavLink
            className={s.NavLink}
            activeClassName={s.activeNavLink}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.NavLink}
            activeClassName={s.activeNavLink}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
