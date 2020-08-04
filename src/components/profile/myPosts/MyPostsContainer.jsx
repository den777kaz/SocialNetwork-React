
import {addNewPostActionCreator} from "./../../../redux/profileDataReducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profileData.posts
  }
};
const mapDispatchToProps = (dispatch) => {

  return {
    onAddPost: (newPost) => dispatch(addNewPostActionCreator(newPost))
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
