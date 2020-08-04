
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
  messages: [
    {id: 1, message: "first message"},
    {id: 2, message: "second message"},
    {id: 3, message: "third message"},
  ],
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

  switch (action.type) {

    case ADD_NEW_MESSAGE:
      let newMessage = {
        id: Date.now(),
        message: action.newMsg
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:

      return state;
  }
};

//action creator
export const addNewMessageActionCreator = (newMsg) => ({type: ADD_NEW_MESSAGE, newMsg});

export default messagesDataReducer;
