import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/usersAuthReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      {withCredentials: true} ) // cross domain cookie transfer
      .then(response => {
        const {id, email, login} = response.data.data;
        if (response.data.resultCode === 0){
          this.props.setAuthUserData(id,email,login)
        } else alert(response.data.messages);
      })
  }

  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
