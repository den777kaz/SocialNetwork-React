import React from 'react';
import style from './Users.module.css';
import userPhoto from "./../../assets/images/user.png"
import {NavLink} from "react-router-dom";


const Users = (props) => {

  let pagesCount = Math.ceil(props.userTotalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 25; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={style.pageNumber}>
        {pages.map(p => {
          return <span key={p} onClick={() => {
            props.onPageClick(p)
          }} className={props.currentPage === p ? style.selectedPage : undefined}>{p}</span>
        })}
      </div>
      <div className={style.users}>
        {
          props.users.map(u =>
            <div className={style.item} key={u.id}>
              <span>
                <div>
                  <NavLink to={/profile/ + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                  </NavLink>
                </div>
                <div>
                  {u.followed

                    ? <button disabled={props.isToggleFollow.some(id => id === u.id)}
                              onClick={() => {props.unFollowSuccess(u.id)}}>Unfollow</button>

                    : <button disabled={props.isToggleFollow.some(id => id === u.id)}
                              onClick={() => {props.followSuccess(u.id)}}>Follow</button>
                  }
                </div>
              </span>

              <span>
                 <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>location.country</div>
                <div>location.city</div>
              </span>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Users;
