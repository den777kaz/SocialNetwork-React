
import {addNewMessageActionCreator} from "../../redux/messagesDataReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAutRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesData.dialogs,
    messages: state.messagesData.messages,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddText: (newMsg) => {
      dispatch(addNewMessageActionCreator(newMsg));
    }
  }
};

// let AuthRedirectComponent = withAutRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAutRedirect
)(Dialogs);
