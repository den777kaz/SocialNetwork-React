import React from 'react';
import Profile from "./Profile";
import {getUserStatus, getUserInfo, updateStatus} from "../../redux/profileDataReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

componentDidMount() {

  //withRouter
  let userId = this.props.match.params.userId;
  if(!userId){
    userId=this.props.authUserId;
    if(!userId) {
      this.props.history.push("/login")
    }
  }

  //API
  this.props.getUserInfo(userId);
  this.props.getUserStatus(userId);

}

  render() {
  return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
  )
}

}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile,
  status: state.profileData.status,
  authUserId: state.auth.userId
});





//HOC
// let AuthRedirectComponent = withAutRedirect(ProfileContainer);
//URL
// const UrlUsersContainerComponent = withRouter(AuthRedirectComponent);
//REDUX
// export default connect(mapStateToProps,{ getUserInfo })(UrlUsersContainerComponent);


export default compose(
  connect(mapStateToProps,{ getUserInfo, getUserStatus, updateStatus }),
  withRouter
)(ProfileContainer);
