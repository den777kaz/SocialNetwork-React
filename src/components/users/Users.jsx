import React from 'react';
import style from './Users.module.css';
import userPhoto from "./../../assets/images/user.jpg"

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
          return <span onClick={() => {
            props.onPageClick(p)
          }} className={props.currentPage === p && style.selectedPage}>{p}</span>
        })}
      </div>
      <div className={style.users}>
        {
          props.users.map(u =>
            <div className={style.item} key={u.id}>
              <span>
                <div>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => {
                      props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      props.follow(u.id)
                    }}>Follow</button>
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
