import React from 'react';
import styles from './Buttons.module.css';

class Buttons extends React.Component {
  render() {
    return (
      <div className={styles.buttons}>
        <button id={styles.cancel}>Cancel</button>
        <button id={styles.save}>Save</button>
      </div>
    );
  }
}

export default Buttons;
