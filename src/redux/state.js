// let myPostData = [
//   {id: 1, message: "hi", likes: 15},
//   {id: 2, message: "hi, how are you?", likes: 7},
//   {id: 2, message: "hi, how are you?", likes: 7}
// ];
//
// let dialogsData = [
//   {id: 1, name: "Denes"},
//   {id: 2, name: "John"},
//   {id: 3, name: "Sveta"},
//   {id: 4, name: "Oksana"},
//   {id: 5, name: "Roman"},
//   {id: 6, name: "Doro"}
// ];
// let messagesData = [
//   {id: 1, message: "first message"},
//   {id: 2, message: "second message"},
//   {id: 3, message: "third message"},
// ];


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
    dialogs: [
      {id: 1, name: "Denes"},
      {id: 2, name: "John"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Oksana"},
      {id: 5, name: "Roman"},
      {id: 6, name: "Doro"}
    ]
  }
};

export default state;
