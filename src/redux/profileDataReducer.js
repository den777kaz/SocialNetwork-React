const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";

let initialState = {
  posts: [
    {id: 1, post: "hi", likes: 15},
    {id: 2, post: "hi, how are you?", likes: 7},
    {id: 3, post: "hi, how are you?", likes: 7}
  ],
  updatePostText: ""
};

let profileDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = state.updatePostText;
      return {
        ...state,
        updatePostText: "",
        posts: [...state.posts, {id: Date.now(), post: newPost, likes: 0}]

      };

    case CHANGE_POST_TEXT:
      return {
        ...state,
        updatePostText: action.newText
      };

    default:
      return state;
  }
};

//action creator
export const changePostTextActionCreator = text => ({type: CHANGE_POST_TEXT, newText: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

export default profileDataReducer;
