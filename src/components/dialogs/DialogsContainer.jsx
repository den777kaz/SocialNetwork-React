
import {addNewMessageActionCreator, changeTextActionCreator} from "../../redux/messagesDataReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
