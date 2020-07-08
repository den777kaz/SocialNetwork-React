import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
  return (
    <div className={style.head}>
      <div>
        <img src="https://specials-images.forbesimg.com/imageserve/5ebed2cc142a910006474ad8/960x0.jpg?fit=scale" alt=""/>
      </div>
      <div>
        <div className={style.person}>
          <div className={style.avatar}>
            <img src="https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg" alt="avatar"/>
          </div>
          <div className={style.desc}>
            <h1>Denis Kazakov</h1>
            <ul>
              <li className={style.item}><span>Date Birth:</span> 19 April</li>
              <li className={style.item}><span>City:</span> Mannheim</li>
              <li className={style.item}><span>Education:</span> TTU</li>
              <li className={style.item}><span>Website:</span> www.google.com</li>
            </ul>
          </div>
        </div>
        <MyPosts/>
      </div>
    </div>
  )
}


export default Profile;
