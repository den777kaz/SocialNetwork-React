import React from 'react';
import style from './FriendsItem.module.css';


const FriendsItem = (props) => {
  // console.log("item",props);
  return (
        <li className={style.item}><span>
          <img src="" alt=""/>
        </span>
          {props.name}
        </li>
  )
}


export default FriendsItem;
