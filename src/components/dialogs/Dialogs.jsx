import React from 'react';
import style from './Dialogs.module.css';
import Message from './message/Message';
import Dialog from './dialog/Dialog';
import AddMessage from "./addMessage/AddMessage";

const Dialogs = (props) => {

  let dialogs = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
  let messages = props.state.messages.map(m => <Message message={m.message} />);

  return (
   <div className={style.dialogs}>
     <div className={style.dialogs_items}>
       { dialogs }
     </div>
     <div className={style.messages}>
       { messages }
       <AddMessage dispatch={props.dispatch} updateText={props.state.updateText} />
     </div>
   </div>
  )
}


export default Dialogs;
