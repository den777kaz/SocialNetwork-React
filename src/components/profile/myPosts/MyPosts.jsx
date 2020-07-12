import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {



  let myPost = props.state.map(p => <Post message={p.message} like={p.likes} />);

  return (
    <div>
      <div className={style.posts}>
        <h2>My Posts</h2>
        <textarea name="message" id="" placeholder="write new post"></textarea>
        <button className={style.btn} type="button">Send</button>
      </div>
      {myPost}
    </div>
  )
}


export default MyPosts;
