import React from 'react';
import { reduxForm, Field } from 'redux-form';
// import logo from './logo.svg';
import './App.css';

let signInForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit} className="form">
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
  </form>
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
