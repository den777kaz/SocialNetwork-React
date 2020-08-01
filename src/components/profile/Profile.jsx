import React from 'react';
import style from './Profile.module.css'
import MyPostsContainer from "./myPosts/MyPostsContainer";
import Info from "./info/Info";
import {Preloader} from "../common/preloader/Preloader";

const Profile = (props) => {

  if(!props.profile){
    return <Preloader/>;
  }

  return (
    <div className={style.head}>
      <div>
        <img src="https://specials-images.forbesimg.com/imageserve/5ebed2cc142a910006474ad8/960x0.jpg?fit=scale" alt=""/>
      </div>
      <div>
        <Info profile={props.profile} status={props.status}/>
        <MyPostsContainer/>
      </div>
    </div>
  )
}


export default Profile;
