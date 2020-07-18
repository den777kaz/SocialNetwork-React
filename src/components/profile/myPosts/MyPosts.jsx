import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./post/Post";


const MyPosts = (props) => {
  let postTextValue = React.createRef();
  let myPost = props.posts.map(p => <Post post={p.post} like={p.likes} />);

  let changeText = () => {
    let text = postTextValue.current.value;
    props.onChangeText(text);
  };
  let addPost = () => {
    props.onAddPost();
  };

  return (
    <div>
      <div className={style.posts}>
        <h2>My Posts</h2>
        <textarea ref={postTextValue} onChange={changeText} placeholder="write new post" value={props.textValue} />
        <button onClick={addPost} className={style.btn} type="button">Send</button>
      </div>
      <div className={style.items}>
        {myPost}
      </div>
    </div>
  )
};

export default MyPosts;
