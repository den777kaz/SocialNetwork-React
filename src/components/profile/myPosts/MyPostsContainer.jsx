import React from 'react';
import {changePostTextActionCreator, addNewPostActionCreator} from "./../../../redux/profileDataReducer"
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let onChangeText = (text) => {
    props.store.dispatch(changePostTextActionCreator(text));
  };
  let onAddPost = () => {
    props.store.dispatch(addNewPostActionCreator());
  };


  return (
    <MyPosts
      onAddPost={onAddPost}
      onChangeText={onChangeText}
      posts={state.profileData.posts}
      textValue={state.profileData.updatePostText}
    />
  )

};

export default MyPostsContainer;
