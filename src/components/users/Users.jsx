import React from 'react';
import style from './Users.module.css';

const Users = (props) => {

  if(props.users.length === 0) {
    props.setUsers(
      [
        {id: 1, followed: true, fullName: "Denis", status: "Im a BOSS", location: {city: "Tallinn", country: "Estonia"}},
        {id: 2, followed: true, fullName: "Dmitry", status: "Im a BOSS", location: {city: "Tallinn", country: "Estonia"}},
        {id: 3, followed: true, fullName: "Jichan", status: "Im a BOSS", location: {city: "Tallinn", country: "Estonia"}},
        {id: 4, followed: true, fullName: "Lena", status: "Im a BOSS", location: {city: "Tallinn", country: "Estonia"}}
      ]
    );
  }

  return (
    <div className={style.users}>
      {
        props.users.map(u =>

            <div key={u.id}>

            <span>
              <div>
                { u.followed
                  ? <button onClick={ ()=> { props.unfollow(u.id) } } >Unfollow</button>
                  : <button onClick={ ()=> { props.follow(u.id) } } >Follow</button>
                }
              </div>
            </span>

            <span>
               <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>

        </div>
        )
      }
    </div>
  )
};

export default Users;
