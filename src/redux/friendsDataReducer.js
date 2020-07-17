

let initialState = {
  users: [
    {name: "Andrew", id: 1, avatar:"", status: ""},
    {name: "Marina", id: 2, avatar:"", status: ""},
    {name: "Masha", id: 3, avatar:"", status: ""},
    {name: "Denis", id: 4, avatar:"", status: ""},
    {name: "Aleksandr", id: 5, avatar:"", status: ""}
  ]
};

let friendsDataReducer = (state = initialState, action) => {
  return state
};

//action creator


export default friendsDataReducer;
