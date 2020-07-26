import {connect} from "react-redux";
import Users from "./Users";
import {
  followAC,
  preloaderAC,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  unfollowAC
} from "../../redux/usersDataReducer";
import React from "react";
import * as axios from "axios";
import {Preloader} from "../common/preloader/Preloader";

class UsersApiComponent extends React.Component {

  componentDidMount() {
    this.props.preloader(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
        this.props.preloader(false);
      })
  }

  onPageClick = (pageNumber) => {
    this.props.preloader(true);
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.preloader(false);
      })
  };

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          userTotalCount={this.props.userTotalCount}
          onPageClick={this.onPageClick}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
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
    isFetching: state.usersData.isFetching
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
    preloader: (isFetching) => {
      dispatch(preloaderAC(isFetching));
    },
  }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;
