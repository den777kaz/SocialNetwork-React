import messagesDataReducer from "./messagesDataReducer";
import profileDataReducer from "./profileDataReducer";



let store = {
  _state: {
    profileData: {
      posts: [
        {id: 1, post: "hi", likes: 15},
        {id: 2, post: "hi, how are you?", likes: 7},
        {id: 2, post: "hi, how are you?", likes: 7}
      ],
      updatePostText: ""
    },
    messagesData: {
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
  },
  _subscribe (observer) {
    this.callSubscribe = observer;
  },

  callSubscribe () {
    console.log("state changed")
  },
  getState () {
    return this._state;
  },

  dispatch (action) {
    store._state.messagesData = messagesDataReducer(store._state.messagesData, action);
    store._state.profileData = profileDataReducer(store._state.profileData, action);
    this.callSubscribe(this._state);
  }
};


window.store = store;
export default store;


