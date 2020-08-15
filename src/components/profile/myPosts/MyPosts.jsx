import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validation/validators";
import {Textarea} from "../../common/form-controls/FormControls";


const MyPosts = React.memo((props) => {
  let myPost = [...props.posts].reverse().map(p => <Post post={p.post} like={p.likes} key={p.id} />);

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
});
//REDUX-FORM
const maxLength10 = maxLength(10);

const AddPost =  (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name={"newPostMessage"}
             placeholder="write new post"
             validate={[required, maxLength10]}
      />

      <button className={style.btn} type={"submit"}>Send</button>
    </form>
  )
};

const AddPostRedux = reduxForm ({
  form: "addPostMessage"
})(AddPost);
export default MyPosts;
