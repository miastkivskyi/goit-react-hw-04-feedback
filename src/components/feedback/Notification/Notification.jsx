import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div>
    <p className={css.notification}>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
