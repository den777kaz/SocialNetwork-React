import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {changePostTextActionCreator, addNewPostActionCreator} from "./../../../redux/profileDataReducer"

const MyPosts = (props) => {
  let postTextValue = React.createRef();
  let myPost = props.state.posts.map(p => <Post post={p.post} like={p.likes} />);

  let changeText = () => {
    let text = postTextValue.current.value;
    props.dispatch(changePostTextActionCreator(text));
  };
  let addPost = () => {
    props.dispatch(addNewPostActionCreator());
  };

  return (
    <div>
      <div className={style.posts}>
        <h2>My Posts</h2>
        <textarea ref={postTextValue} onChange={changeText} name="message" id="" placeholder="write new post" value={props.state.updatePostText} />
        <button onClick={addPost} className={style.btn} type="button">Send</button>
      </div>
      <div className={style.items}>
        {myPost}
      </div>
    </div>
  )
}


export default MyPosts;
