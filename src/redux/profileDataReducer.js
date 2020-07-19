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

  let stateCopy = { ...state, posts: [...state.posts]};

  switch (action.type) {
    case ADD_NEW_POST:
        let newPost = {
          id: Date.now(),
          post: stateCopy.updatePostText,
          likes: 0
        };
        stateCopy.posts.push(newPost);
        stateCopy.updatePostText = "";
        return stateCopy;

    case CHANGE_POST_TEXT:
     stateCopy.updatePostText = action.newText;
     return stateCopy;

    default:
      return state;
  }
};

//action creator
export const changePostTextActionCreator = text => ({type: CHANGE_POST_TEXT, newText: text});
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

export default profileDataReducer;
