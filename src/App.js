import React from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from './logo.svg';
import './App.css';

let SignInForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={ handleSubmit } className="form">
    <div className="field">
      <div className="control">
        <Field name="firstName" component={renderField} type="text" label="First Name"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="lastName" component={renderField} type="text" label="Last Name"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="email" component={renderField} type="text" label="Email"></Field>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="age" component={renderField} type="text" label="Age"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Proficiency</label>
        <div className="select">
          <Field className="input" name="proficiency" component="select">
            <option/>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Gender</label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="male"/>
          {''}
          Male
        </label>
        <label className="radio">
          <Field name="gender" component="input" type="radio" value="female"/>
          {''}
          Female
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Message</label>
        <Field className="textarea" name="message" component="textarea" />
      </div>
    </div>

    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>

  </form>
}

const validate = val => {
  const errors = {};
  if (!val.firstName) {
    console.log('First Name is required');
    errors.firstName = 'Required';
  }
  if (!val.lastName) {
    console.log('Last Name is required');
    errors.lastName = 'Required';
  }
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
  if (!val.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
 };

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="has-text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

SignInForm = reduxForm({
  form: 'signIn',
  validate,
})(SignInForm);

class App extends React.Component {
  handleSignIn = values => {
    console.log(values);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Contact Form
        </header>
        <div className="container">
          <SignInForm onSubmit={this.handleSignIn}/>
        </div>
      </div>
    );
  }
}

export default App;
