import {connect} from "react-redux";
import Users from "./Users";
import {
  followSuccess, getUsers,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  unFollowSuccess,
} from "../../redux/usersDataReducer";
import React from "react";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageClick = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
      {this.props.isLoading ? <Preloader /> : null}
        <Users
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
          isToggleFollow={this.props.isToggleFollow}
          followSuccess={this.props.followSuccess}
          unFollowSuccess={this.props.unFollowSuccess}
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
//   }
// };



// const UsersApiComponent = connect(mapStateToProps, {
//   getUsers,followSuccess,unFollowSuccess,setUsersTotalCount,setCurrentPage,setUsers,
// })(UsersContainer);
//
// export default UsersContainer;

export default compose (
  connect(mapStateToProps, {
    getUsers,followSuccess,unFollowSuccess,setUsersTotalCount,setCurrentPage,setUsers,
  })
)(UsersContainer);
