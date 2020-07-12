import React from 'react';
import style from './Dialogs.module.css';
import {NavLink}  from 'react-router-dom';


const Dialogs = () => {
  return (
   <div className={style.dialogs}>
     <div className={style.dialogs_items}>
       <div className={`${style.dialog} ${style.active}`}>
         <span className={`${style.status} ${style.active}`}></span>
         <NavLink to="/dialogs/1" >Denis</NavLink>
       </div>
       <div className={style.dialog}>
         <span className={style.status}></span>
         <NavLink to="/dialogs/2" >John</NavLink>
       </div>
       <div className={style.dialog}>
         <span className={style.status}></span>
         <NavLink to="/dialogs/3" >Dimi4</NavLink>
       </div>
     </div>
     <div className={style.messages}>
       <div className={style.message}> messasdsdsscsdcscsdcscscscsdcsdcsdge 1</div>
       <div className={style.message}> message 2</div>
       <div className={style.message}> message 3</div>
     </div>
   </div>
  )
}


export default Dialogs;
