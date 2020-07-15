import {renderStart} from "../render";


let state = {
  profileData: {
    posts: [
      {id: 1, message: "hi", likes: 15},
      {id: 2, message: "hi, how are you?", likes: 7},
      {id: 2, message: "hi, how are you?", likes: 7}
    ]
  },
  messagesData: {
    messages: [
      {id: 1, message: "first message"},
      {id: 2, message: "second message"},
      {id: 3, message: "third message"},
    ],
    updateText: "hallo",
    dialogs: [
      {id: 1, name: "Denes"},
      {id: 2, name: "John"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Oksana"},
      {id: 5, name: "Roman"},
      {id: 6, name: "Doro"}
    ]
  },
  friendsData: {
    users: [
      {name: "Andrew", id: 1, avatar:"", status: ""},
      {name: "Marina", id: 2, avatar:"", status: ""},
      {name: "Masha", id: 3, avatar:"", status: ""},
      {name: "Denis", id: 4, avatar:"", status: ""},
      {name: "Aleksandr", id: 5, avatar:"", status: ""}
    ]
  }
};


export let changeText = (text) => {
  state.messagesData.updateText = text;
  renderStart(state);
};

export let addNewMessage = () => {
  let newMessage = {
    id: 53,
    message: state.messagesData.updateText
  }

  state.messagesData.messages.push(newMessage);
  state.messagesData.updateText = "";

  renderStart(state);
};
// addNewMessage();
console.log("result",state.messagesData.messages);

export default state;
