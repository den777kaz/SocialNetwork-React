import React from 'react';
import style from './Friends.module.css';
import FriendsItem from "./friendsItem/FriendsItem";
import Message from "../../dialogs/message/Message";



const Friends = (props) => {

  let friends = props.state.users.map(f => <FriendsItem name={f.name} />);
console.log(props.state.users);
  return (
    <div className={style.friends}>
      <h1>Friends</h1>
      <ul>
        { friends }
      </ul>
    </div>
  )
}


export default Friends;
