//selectors

// default - simple
import {createSelector} from "reselect";

const getAllUsersSelector = (state) => {
    return state.usersData.users;
}


// reselect selector
export const getAllUsers = createSelector(getAllUsersSelector,(users) =>{
   return users.filter(u => true);



});