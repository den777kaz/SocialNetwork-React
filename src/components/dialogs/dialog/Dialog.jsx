import React from 'react';
import style from './Dioalog.module.css';
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

export default Dialog;
