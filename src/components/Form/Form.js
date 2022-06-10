import React from 'react';
import styles from './Form.module.css';
import ShortInput from '../ShortInput/ShortInput';
import LongInput from '../LongInput/LongInput';
import Buttons from '../Buttons/Buttons';
import BirthdayPicker from '../BirthdayPicker/BirthdayPicker';

class Form extends React.Component {
  render() {
    return (
      <form action='post'>
        <h1>Submit the form:</h1>
        <ShortInput label={'Name: '} formName={'name'} placeholder={'Mike'}></ShortInput>
        <ShortInput label={'Surname: '} formName={'surname'} placeholder={'Wazowski'}></ShortInput>

        <BirthdayPicker></BirthdayPicker>

        <ShortInput label={'Phone Number: '} formName={'phone'} placeholder={'1-2345-67-89'}></ShortInput>

        <LongInput label={'About You: '} formName={'about'} placeholder={'tell us about yourself:'}></LongInput>

        <LongInput label={'Tech Stack: '} formName={'stack'} placeholder={'what technologies do you know:'}></LongInput>

        <LongInput
          label={'More about your work: '}
          formName={'project'}
          placeholder={'tell us about your last project:'}
        ></LongInput>

        <Buttons></Buttons>
      </form>
    );
  }
}

export default Form;
