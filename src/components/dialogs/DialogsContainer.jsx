
import {addNewMessageActionCreator, changeTextActionCreator} from "../../redux/messagesDataReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAutRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesData.dialogs,
    messages: state.messagesData.messages,
    updateText: state.messagesData.updateText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddText: () => {
      dispatch(addNewMessageActionCreator());
    },
    onChangeText: (text) => {
      dispatch(changeTextActionCreator(text));
    }
  }
};

let AuthRedirectComponent = withAutRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
