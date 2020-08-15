import React from 'react';
import {reduxForm, Field} from "redux-form";
import {maxLength, required} from "../../utils/validation/validators";
import {Input} from "../common/form-controls/FormControls";
import {login} from "../../redux/usersAuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "../common/form-controls/FormControls.module.css"


const maxLength20 = maxLength(20);

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Input}
               name="email"
               type="text"
               placeholder="E-mail"
               validate={[required, maxLength20]}
        />

      </div>
      <div>
        <Field component={Input}
               name={"password" }
               type="password"
               placeholder="password"
               validate={[required, maxLength20]}
        />

      </div>
      <div>
        <Field component={Input}
               name="rememberMe"
               type="checkbox"

        />remember me
      </div>
      {props.error &&
        <div className={style.summaryError}>{props.error}</div>
      }

      <br/>
      <div>
        <button type="submit">Login</button>
      </div>

    </form>
  )
};


// //RESET FORM
// const afterSubmit = (result, dispatch) =>
//   dispatch(reset('login'));

// REDUX-FORM
const LoginReduxForm = reduxForm({
  form: 'login',
  // onSubmitSuccess: afterSubmit
})(LoginForm);



const Login = (props) => {

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  const onSubmit = (formData) => {
    const {email,password, rememberMe} = formData;
    props.login(email,password, rememberMe);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect (mapStateToProps, {login})(Login);
