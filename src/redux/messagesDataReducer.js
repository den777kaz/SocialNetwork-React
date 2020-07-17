const CHANGE_TEXT = "CHANGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";


let messagesDataReducer = (state, action) => {
  switch (action.type) {
    // Messages
    case ADD_NEW_MESSAGE:
      let newMessage = {
        id: 53,
        message: state.updateText
      }
      state.messages.push(newMessage);
      state.updateText = "";
      return state;

    case CHANGE_TEXT:
      state.updateText = action.newText;
      return state;

    default:
      console.log("method/function not exist");
      return state;
  }
}

//action creator
export const changeTextActionCreator = text => ({type: CHANGE_TEXT, newText: text});
export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});

export default messagesDataReducer;
