import {combineReducers, createStore} from "redux";
import profileDataReducer from "./profileDataReducer";
import messagesDataReducer from "./messagesDataReducer";
import friendsDataReducer from "./friendsDataReducer";
import usersDataReducer from "./usersDataReducer";

let reducers = combineReducers({
  profileData: profileDataReducer,
  messagesData: messagesDataReducer,
  friendsData: friendsDataReducer,
  usersData: usersDataReducer
});

let store = createStore(reducers);

window.store = store;
export default store;
