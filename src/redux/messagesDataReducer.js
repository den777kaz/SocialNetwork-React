const CHANGE_TEXT = "CHANGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
  messages: [
    {id: 1, message: "first message"},
    {id: 2, message: "second message"},
    {id: 3, message: "third message"},
  ],
  updateText: "",
  dialogs: [
    {id: 1, name: "Denes"},
    {id: 2, name: "John"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Oksana"},
    {id: 5, name: "Roman"},
    {id: 6, name: "Doro"}
  ]
};

let messagesDataReducer = (state = initialState, action) => {
  let stateCopy = {...state, messages: [...state.messages]};
  switch (action.type) {
    // Messages
    case ADD_NEW_MESSAGE:
      let newMessage = {
        id: Date.now(),
        message: stateCopy.updateText
      };
      stateCopy.messages.push(newMessage);
      stateCopy.updateText = "";
      console.log(stateCopy);
      return stateCopy;

    case CHANGE_TEXT:
      stateCopy.updateText = action.newText;
      return stateCopy;

    default:

      return state;
  }
}

//action creator
export const changeTextActionCreator = text => ({type: CHANGE_TEXT, newText: text});
export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});

export default messagesDataReducer;
