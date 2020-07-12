import React from 'react';
import style from './Dialogs.module.css';
import {NavLink}  from 'react-router-dom';

const Dialog = (props) => {
  let name = props.name;
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${style.dialog} ${style.active}`}>
      <span className={`${style.status} ${style.active}`}></span>
      <NavLink to={path} >{name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (

      <div className={style.message}>{props.message}</div>

  )
}

const Dialogs = () => {
  let dialogsData = [
    {id: 1, name: "Denes"},
    {id: 2, name: "John"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Oksana"},
    {id: 5, name: "Roman"},
    {id: 6, name: "Doro"}
  ];
  let messagesData = [
    {id: 1, message: "first message"},
    {id: 2, message: "second message"},
    {id: 3, message: "third message"},
  ];

  let dialogs = dialogsData.map(d => <Dialog name={d.name} id={d.id} />);
  let messages = messagesData.map(m => <Message message={m.message} />)

  return (
   <div className={style.dialogs}>
     <div className={style.dialogs_items}>
       { dialogs }
     </div>
     <div className={style.messages}>
       { messages }
     </div>
   </div>
  )
}


export default Dialogs;
