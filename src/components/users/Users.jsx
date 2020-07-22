import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";
import userPhoto from "./../../assets/images/user.jpg"

class Users extends React.Component {

componentDidMount(){
  axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
      this.props.setUsers(response.data.items);
    })
}
render () {
  return (
    <div className={style.users}>
      {
        this.props.users.map(u =>

          <div className={style.item} key={u.id}>

            <span>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto } />
              </div>
              <div>
                { u.followed
                  ? <button onClick={ ()=> { this.props.unfollow(u.id) } } >Unfollow</button>
                  : <button onClick={ ()=> { this.props.follow(u.id) } } >Follow</button>
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
  )
}

};

export default Users;
