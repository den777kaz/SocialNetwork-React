

let store = {
  _state: {
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

    switch (action.type) {
      case "ADD-NEW-MESSAGE":
        let newMessage = {
          id: 53,
          message: this._state.messagesData.updateText
        }
        this._state.messagesData.messages.push(newMessage);
        this._state.messagesData.updateText = "";
        this.callSubscribe(this._state);
        break;

      case "CHANGE-TEXT":
        this._state.messagesData.updateText = action.newText;
        this.callSubscribe(this._state);
        break;

      default:
        console.log("method/function not exist");
    }

  }
};


window.store = store;
export default store;


