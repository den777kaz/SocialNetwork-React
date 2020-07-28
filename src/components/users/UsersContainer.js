import {connect} from "react-redux";
import Users from "./Users";
import {
  follow,
  preloader,
  setCurrentPage,
  setUsers,
  setUsersTotalCount, toggleFollowProgress,
  unfollow,
} from "../../redux/usersDataReducer";
import React from "react";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersApiComponent extends React.Component {

  componentDidMount() {
    this.props.preloader(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.items);
        this.props.setUsersTotalCount(response.totalCount);
        this.props.preloader(false);
      })
  }

  onPageClick = (pageNumber) => {
    this.props.preloader(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.items);
        this.props.preloader(false);
      })
  };
  render() {
    return (
      <>
      {this.props.isLoading ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          userTotalCount={this.props.userTotalCount}
          onPageClick={this.onPageClick}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          isToggleFollow={this.props.isToggleFollow}
          toggleFollowProgress={this.props.toggleFollowProgress}
        />
      </>
      )


  }

}


const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    userTotalCount: state.usersData.userTotalCount,
    currentPage: state.usersData.currentPage,
    isLoading: state.usersData.isLoading,
    isToggleFollow: state.usersData.isToggleFollow

  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setUsersTotalCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     preloader: (isLoading) => {
//       dispatch(preloaderAC(isLoading));
//     },
//   }
// };



const UsersContainer = connect(mapStateToProps, {
  preloader,setUsersTotalCount,setCurrentPage,setUsers,unfollow,follow,toggleFollowProgress
})(UsersApiComponent);

export default UsersContainer;
