const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";

let initialState = {
  posts: [
    {id: 1, post: "hi", likes: 15},
    {id: 2, post: "hi, how are you?", likes: 7},
    {id: 2, post: "hi, how are you?", likes: 7}
  ],
  updatePostText: ""
}

let profileDataReducer = (state = initialState, action) => {
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
      return state;
  }
}

//action creator
export const changePostTextActionCreator = text => ({type: CHANGE_POST_TEXT, newText: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

export default profileDataReducer;
