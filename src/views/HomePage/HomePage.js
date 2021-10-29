import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/fetchMovies';

const STATUSES = {
  INIT: 'init',
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECTED: 'rejected',
};

function HomePage() {
  const [status, setStatus] = useState('init');

  useEffect(() => {
    setStatus('pending');
    fetchMovies().then(data => {
      console.log(data.results);
      return data.results;
    });
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        <li>1</li> {/* Link */}
        <li>2</li> {/* Link */}
      </ul>
    </>
  );
}

export default HomePage;
