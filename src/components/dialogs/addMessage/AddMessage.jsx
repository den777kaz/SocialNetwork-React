import React from 'react';
import style from './AddMessage.module.css';
import {addNewMessageActionCreator, changeTextActionCreator} from "../../../redux/messagesDataReducer";




const AddMessage = (props) => {
let textValue = React.createRef();

let onChangeText = () => {

  let text = textValue.current.value;
  props.dispatch(changeTextActionCreator(text));
  // props.dispatch({type: "CHANGE-TEXT", newText: text});
};

let addText = () => {
  if (textValue.current.value !== "")
  props.dispatch(addNewMessageActionCreator());

};
  return (
    <div className={style.newMessage}>
      <textarea onChange={onChangeText} ref={textValue} value={props.updateText} />
      <button onClick={addText}>send</button>
    </div>
  )
};


export default AddMessage;
