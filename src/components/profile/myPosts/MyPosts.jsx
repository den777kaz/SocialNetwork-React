import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={style.posts}>
        <h2>My Posts</h2>
        <textarea name="message" id="" placeholder="write new post"></textarea>
        <button className={style.btn} type="button">Send</button>
      </div>
      <Post message="hi, how are you?" like="15" />
      <Post message="hi, this is my first post" like="7" />
    </div>
  )
}


export default MyPosts;
