import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCredits } from '../../services/fetchMovies';

function Casts(props) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchCredits(props.id)
      .then(data => {
        setCredits(data.cast);
      })
      .catch(console.log);
  }, [props.id]);

  return (
    <>
      <h3>Casts</h3>
      <ul>
        {credits.map(el => {
          return (
            <li key={el.id}>
              <b>{el.name}</b> as {el.character}
            </li>
          );
        })}
      </ul>
    </>
  );
}

Casts.propTypes = {
  id: PropTypes.string,
};

export default Casts;
