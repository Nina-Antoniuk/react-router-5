import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieById } from '../../services/fetchMovies';

function Reviews(props) {
  const [review, setReview] = useState('');

  useEffect(() => {
    fetchMovieById(props.id)
      .then(data => {
        setReview(data.overview);
      })
      .catch(console.log);
  }, [props.id]);
  return (
    <div>
      <h3>Reviews</h3>
      <p>{review}</p>
    </div>
  );
}

Reviews.propTypes = {
  id: PropTypes.string,
};

export default Reviews;
