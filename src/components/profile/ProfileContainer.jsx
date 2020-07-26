import React from 'react';
import Profile from "./Profile";
import {setProfileUsers} from "../../redux/profileDataReducer";
import * as axios from "axios";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

componentDidMount() {
  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
      this.props.setProfileUsers(response.data);
    })
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

export default connect(mapStateToProps,{
  setProfileUsers
})(ProfileContainer);
