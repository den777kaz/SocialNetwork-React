import React from 'react';
import Profile from "./Profile";
import {getStatus, getUserInfo} from "../../redux/profileDataReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAutRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

componentDidMount() {

  //withRouter
  let userId = this.props.match.params.userId;
  if(!userId) userId=9546;

  //API
  this.props.getUserInfo(userId);
  this.props.getStatus(userId);

}

  render() {
  return (
    <Profile {...this.props} profile={this.props.profile} status={this.props.status} />
  )
}

}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile,
  status: state.profileData.status
});





//HOC
// let AuthRedirectComponent = withAutRedirect(ProfileContainer);
//URL
// const UrlUsersContainerComponent = withRouter(AuthRedirectComponent);
//REDUX
// export default connect(mapStateToProps,{ getUserInfo })(UrlUsersContainerComponent);


export default compose(
  connect(mapStateToProps,{ getUserInfo, getStatus }),
  withRouter,
  withAutRedirect
)(ProfileContainer);
