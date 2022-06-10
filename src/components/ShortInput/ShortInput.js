import React from 'react';
import styles from './ShortInput.module.css';

class ShortInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.formName}>
        <p>{this.props.label}</p>
        <input type='text' name={this.props.formName} id='' placeholder={this.props.placeholder} />
      </label>
    );
  }
}

export default ShortInput;
