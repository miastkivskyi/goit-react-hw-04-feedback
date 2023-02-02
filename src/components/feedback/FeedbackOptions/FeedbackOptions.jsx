import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(el => (
      <button
        key={el}
        type="button"
        name={el}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
