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
  return (
   <div className={style.dialogs}>
     <div className={style.dialogs_items}>
      <Dialog name={"Denis"} id={"1"} />
      <Dialog name={"John"} id={"2"} />
      <Dialog name={"Sveta"} id={"3"} />
      <Dialog name={"Oksana"} id={"4"} />
      <Dialog name={"Roman"} id={"5"} />
      <Dialog name={"Doro"} id={"6"} />
     </div>
     <div className={style.messages}>
       <Message message={"first message"} />
       <Message message={"second message"} />
       <Message message={"third message"} />
     </div>
   </div>
  )
}


export default Dialogs;
