import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export const withAutRedirect = (Component) => {

  const RedirectComponent = (props) => {

    if(!props.isAuth) return <Redirect to='/login' />;
    return <Component {...props}  />;
  };

  const connectMapStateToProps = (state) => ({
    auth: state.auth.isAuth,
  });

  return  connect(connectMapStateToProps)(RedirectComponent);
};

