
import {connect} from "react-redux";
import Friends from "./Friends";



const mapStateToProps = (state) => {
  return {
    users: state.friendsData.users
  }
};

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;
