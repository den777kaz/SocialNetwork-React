import {getUserAuth} from "./usersAuthReducer";

const INIT_SUCCESS = "INIT_SUCCESS";


let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

//action creator
export const initSuccess = () => ({type: INIT_SUCCESS});

// thunk middleware
export const init = () => {
  return (dispatch) => {
    let promise = dispatch(getUserAuth());

    Promise.all([promise]).then (() => {
        dispatch(initSuccess())
      })

  }
};

export default appReducer;
