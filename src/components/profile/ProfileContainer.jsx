import React from 'react';
import Profile from "./Profile";
import {getUserInfo} from "../../redux/profileDataReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAutRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
  profile: state.profileData.profile,
});





//HOC
// let AuthRedirectComponent = withAutRedirect(ProfileContainer);
//URL
// const UrlUsersContainerComponent = withRouter(AuthRedirectComponent);
//REDUX
// export default connect(mapStateToProps,{ getUserInfo })(UrlUsersContainerComponent);


export default compose(
  connect(mapStateToProps,{ getUserInfo }),
  withRouter,
  withAutRedirect
)(ProfileContainer);
