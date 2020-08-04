import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
  let myPost = props.posts.map(p => <Post post={p.post} like={p.likes} key={p.id} />);

  const postOnSubmit = (values) => {
    props.onAddPost(values.newPostMessage);
  };
  return (
    <div>
      <div className={style.posts}>
        <h2>My Posts</h2>
        <AddPostRedux onSubmit={postOnSubmit}/>
        {/*<textarea ref={postTextValue} onChange={changeText} placeholder="write new post" value={props.textValue} />*/}
        {/*<button onClick={addPost} className={style.btn} type="button">Send</button>*/}
      </div>
      <div className={style.items}>
        {myPost}
      </div>
    </div>
  )
};
//REDUX-FORM
const AddPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name={"newPostMessage"} placeholder="write new post" />
      <button className={style.btn} type={"submit"}>Send</button>
    </form>
  )
};

const AddPostRedux = reduxForm ({
  form: "addPostMessage"
})(AddPost);
export default MyPosts;
