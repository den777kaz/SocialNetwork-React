import React from 'react';
import style from './AddMessage.module.css';




const AddMessage = (props) => {
console.log("sssss",props)
  let textValue = React.createRef();

let addText = () => {
  let text = textValue.current.value;
  props.addNewMessage(text);

}
  return (
    <div className={style.newMessage}>
      <textarea ref={textValue} ></textarea>
      <button onClick={addText}>send</button>
    </div>
  )
}


export default AddMessage;
