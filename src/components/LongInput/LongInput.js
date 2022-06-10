import React from 'react';
import styles from './LongInput.module.css';

class LongInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.formName}>
        <p>{this.props.label}</p>
        <textarea name={this.props.formName} rows='7' id='' placeholder={this.props.placeholder}></textarea>
      </label>
    );
  }
}

export default LongInput;
