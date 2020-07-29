import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserAuth} from "../../redux/usersAuthReducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserAuth();

  }

  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, { getUserAuth })(HeaderContainer);
