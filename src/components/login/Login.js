import React from 'react';
import {reduxForm, Field, reset} from "redux-form";

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component="input" name="username" type="text" placeholder="Login" />
      </div>
      <div>
        <Field component="input" name="password"  type="text" placeholder="password" />
      </div>
      <div>
        <Field component="input" name="rememberMe"  type="checkbox" /> remember me
      </div>
      <br/>
      <div>
        <button type="submit">Login</button>
      </div>

    </form>
  )
};


//RESET FORM
const afterSubmit = (result, dispatch) =>
  dispatch(reset('login'));

// REDUX-FORM
const LoginReduxForm = reduxForm({
  form: 'login',
  onSubmitSuccess: afterSubmit
})(LoginForm);



const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};

export default Login;
