import React, {useState} from 'react';
import {reduxForm, Field, reset} from "redux-form";
import {maxLength, required} from "../../utils/validation/validators";
import {Input} from "../common/form-controls/FormControls";

const maxLength10 = maxLength(10);

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Input}
               name="username"
               type="text"
               placeholder="Login"
               validate={[required,maxLength10]}
        />

      </div>
      <div>
        <Field component={Input}
               name={"password" }
               type="password"
               placeholder="password"
               validate={[required,maxLength10]}
        />

      </div>
      <div>
        <Field component={Input}
               name="rememberMe"
               type="checkbox"

        />remember me
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
