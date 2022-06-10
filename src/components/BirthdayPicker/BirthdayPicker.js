import React from 'react';
import styles from './BirthdayPicker.module.css';

class BirthdayPicker extends React.Component {
  render() {
    return (
      <label htmlFor='birthday'>
        <p>Date of birth:</p>
        <input
          type='date'
          name='birthday'
          id=''
          value='2022-01-01'
          min='1800-01-01'
          max={new Date().toISOString().split('T')[0]}
        ></input>
      </label>
    );
  }
}

export default BirthdayPicker;
