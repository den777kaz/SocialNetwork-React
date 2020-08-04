import React from 'react';
import style from './Dialogs.module.css';
import Message from './message/Message';
import Dialog from './dialog/Dialog';
import DialogFormRedux from "./message/DialogForm";


const Dialogs = (props) => {

  let dialogs = props.dialogs.map(d => <Dialog name={d.name} key={d.id} />);
  let messages = props.messages.map(m => <Message message={m.message} key={m.id} />);

  const onSubmitMsg = (values) => {
    props.onAddText(values.newDialogMessage);
  };
  return (
   <div className={style.dialogs}>
     <div className={style.dialogs_items}>
       { dialogs }
     </div>
     <div className={style.messages}>
       { messages }
       <DialogFormRedux onSubmit={onSubmitMsg} />
     </div>

   </div>
  )
};


export default Dialogs;
