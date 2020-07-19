import React from 'react';
import style from './Friends.module.css';
import FriendsItem from "./friendsItem/FriendsItem";




const Friends = (props) => {

  let friends = props.users.map(f => <FriendsItem name={f.name} key={f.id} />);
// console.log(props.state.users);
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
