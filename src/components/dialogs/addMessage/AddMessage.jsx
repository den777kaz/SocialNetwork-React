import React from 'react';
import style from './AddMessage.module.css';




const AddMessage = (props) => {
let textValue = React.createRef();

let onChangeText = () => {

  let text = textValue.current.value;
  let action = {type: "CHANGE-TEXT", newText: text};

  props.dispatch(action);
  // props.dispatch({type: "CHANGE-TEXT", newText: text});
};

let addText = () => {
  if (textValue.current.value !== "")
  props.dispatch( {type: "ADD-NEW-MESSAGE"});

};
  return (
    <div className={style.newMessage}>
      <textarea onChange={onChangeText} ref={textValue} value={props.updateText} />
      <button onClick={addText}>send</button>
    </div>
  )
};


export default AddMessage;
