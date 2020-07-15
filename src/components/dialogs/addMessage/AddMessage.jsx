import React from 'react';
import style from './AddMessage.module.css';




const AddMessage = (props) => {
let textValue = React.createRef();

let onChangeText = () => {
  let text = textValue.current.value;
  props.changeText(text);
};

let addText = () => {
  let text = textValue.current.value;
  if (text !== "")
  props.addNewMessage(text);

};
  return (
    <div className={style.newMessage}>
      <textarea onChange={onChangeText} ref={textValue} value={props.updateText} />
      <button onClick={addText}>send</button>
    </div>
  )
};


export default AddMessage;
