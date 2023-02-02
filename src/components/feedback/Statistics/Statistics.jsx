import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul className={css.list}>
      <li className={css.item}>
        Good: <span className={css.data}>{good}</span>
      </li>
      <li className={css.item}>
        Neutral: <span className={css.data}>{neutral}</span>
      </li>
      <li className={css.item}>
        Bad: <span className={css.data}>{bad}</span>
      </li>
      <li className={css.item}>
        Total: <span className={css.data}>{total}</span>
      </li>
      <li className={css.item}>
        Positive feedback:
        <span className={css.data}>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
