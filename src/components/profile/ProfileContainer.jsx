import React from 'react';
import Profile from "./Profile";
import {getUserInfo, setProfileUsers} from "../../redux/profileDataReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {

componentDidMount() {

  //withRouter
  let userId = this.props.match.params.userId;
  if(!userId) userId=2;

  //API
  this.props.getUserInfo(userId)
}

  render() {
  return (
    <Profile {...this.props} profile={this.props.profile} />
  )
}

}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile
});

const UrlUsersContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{
  getUserInfo
})(UrlUsersContainerComponent);
