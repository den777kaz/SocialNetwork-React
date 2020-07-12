import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {

  let myPostData = [
    {id: 1, message: "hi", likes: 15},
    {id: 2, message: "hi, how are you?", likes: 7},
    {id: 2, message: "hi, how are you?", likes: 7}
  ];

  let myPost = myPostData.map(p => <Post message={p.message} like={p.likes} />);

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
