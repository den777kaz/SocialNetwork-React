import React from 'react';
import style from './Dialogs.module.css';
import Message from './message/Message';
import Dialog from './dialog/Dialog';

const Dialogs = (props) => {

  let dialogs = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
  let messages = props.messages.map(m => <Message message={m.message} />);

  let textValue = React.createRef();

  let changeText = () => {
    let text = textValue.current.value;
    props.onChangeText(text);
  };

  let addText = () => {
    if (textValue.current.value !== "")
    props.onAddText();
  };


  return (
   <div className={style.dialogs}>
     <div className={style.dialogs_items}>
       { dialogs }
     </div>
     <div className={style.messages}>
       { messages }
       <div className={style.newMessage}>
         <textarea onChange={changeText} ref={textValue} value={props.updateText} />
         <button onClick={addText}>send</button>
       </div>
     </div>

   </div>
  )
}


export default Dialogs;
