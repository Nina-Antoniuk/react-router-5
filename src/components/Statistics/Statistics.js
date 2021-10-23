import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={s.listItem} key="good">
        Good - {good}
      </li>
      <li className={s.listItem} key="neutral">
        Neutral - {neutral}
      </li>
      <li className={s.listItem} key="bad">
        Bad - {bad}
      </li>
      <li className={s.listItem} key="total">
        Total feedback - {total()}
      </li>
      <li className={s.listItem} key="positive">
        Positive feedback percentage - {positivePercentage()}
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
