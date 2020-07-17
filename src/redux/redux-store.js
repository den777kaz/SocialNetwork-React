import {combineReducers, createStore} from "redux";
import profileDataReducer from "./profileDataReducer";
import messagesDataReducer from "./messagesDataReducer";
import friendsDataReducer from "./friendsDataReducer";

let reducers = combineReducers({
  profileData: profileDataReducer,
  messagesData: messagesDataReducer,
  friendsData: friendsDataReducer
});

let store = createStore(reducers);


export default store;
