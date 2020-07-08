import React from 'react';
import style from './Dialogs.module.css'


const Dialogs = () => {
  return (
   <div className={style.dialogs}>
     <div className={style.dialogs_items}>
       <div className={`${style.dialog} ${style.active}`}>
         <span className={`${style.status} ${style.active}`}></span>Denis
       </div>
       <div className={style.dialog}>
         <span className={style.status}></span>John
       </div>
       <div className={style.dialog}>
         <span className={style.status}></span>Dimi4
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
