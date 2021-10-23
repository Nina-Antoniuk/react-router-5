import { PropTypes } from 'prop-types';
import s from './Feedback.module.css';

function Feedback({ states, onLeaveFeedback }) {
  return (
    <>
      <ul className={s.list}>
        {states.map(state => {
          return (
            <li className="listItem" key={state}>
              <button
                className={s.reaction}
                onClick={e => onLeaveFeedback(e)}
                type="button"
              >
                {state}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

Feedback.propTypes = {
  states: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
