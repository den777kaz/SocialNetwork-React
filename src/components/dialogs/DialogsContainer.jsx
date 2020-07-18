import React from 'react';
import {addNewMessageActionCreator, changeTextActionCreator} from "../../redux/messagesDataReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let dialogs = props.store.getState().messagesData.dialogs;
  let messages = props.store.getState().messagesData.messages;
  let updateText = props.store.getState().messagesData.updateText;

  const onChangeText = text => props.store.dispatch(changeTextActionCreator(text));
  const onAddText = () => props.store.dispatch(addNewMessageActionCreator());

  return (
    <Dialogs dialogs={dialogs}
             messages={messages}
             updateText={updateText}
             onAddText={onAddText}
             onChangeText={onChangeText}
    />
  )
};

export default DialogsContainer;
