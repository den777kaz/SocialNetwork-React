import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/usersDataReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    userTotalCount: state.usersData.userTotalCount,
    currentPage: state.usersData.currentPage
  }
};

const mapDispatchToProps = (dispatch) => {
 return {
   follow: (userId) => {
    dispatch(followAC(userId));
  },
   unfollow: (userId) => {
    dispatch(unfollowAC(userId));
   },
   setUsers: (users) => {
    dispatch(setUsersAC(users));
   },
   setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPageAC(pageNumber));
   },
   setUsersTotalCount: (totalCount) => {
    dispatch(setUsersTotalCountAC(totalCount));
   },
  }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
