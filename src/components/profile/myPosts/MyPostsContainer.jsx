
import {changePostTextActionCreator, addNewPostActionCreator} from "./../../../redux/profileDataReducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profileData.posts,
    textValue: state.profileData.updatePostText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => dispatch(addNewPostActionCreator()),
    onChangeText: (text) => dispatch(changePostTextActionCreator(text))
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
