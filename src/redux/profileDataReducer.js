const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";


let profileDataReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: 245,
        post: state.updatePostText,
        likes: 0
      };
      state.posts.push(newPost);
      state.updatePostText = "";
      return state;

    case CHANGE_POST_TEXT:
     state.updatePostText = action.newText;
     return state;

    default:
      console.log("method/function not exist");
      return state;
  }
}

//action creator
export const changePostTextActionCreator = text => ({type: CHANGE_POST_TEXT, newText: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

export default profileDataReducer;
