import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";
import userPhoto from "./../../assets/images/user.jpg"

class Users extends React.Component {

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      })
  }

  onPageClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  };

  render () {

    let pagesCount = Math.ceil(this.props.userTotalCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= 25; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={style.pageNumber}>
          {pages.map(p => {
           return <span onClick={()=> {this.onPageClick(p)}} className={this.props.currentPage === p && style.selectedPage}>{p}</span>
          })}
        </div>
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
      </div>

    )
  }

  }

  export default Users;
