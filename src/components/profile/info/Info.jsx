import React from 'react';
import style from './Info.module.css'


const Info = (props) => {
  return (
      <div>
        <div className={style.person}>
          <div className={style.avatar}>
            <img src={props.profile.photos.large} alt="avatar"/>
          </div>
          <div className={style.desc}>
            <h1>{props.profile.fullName}</h1>
            <ul>
              <li className={style.item}><span>Date Birth:</span> 19 April</li>
              <li className={style.item}><span>City:</span> Mannheim</li>
              <li className={style.item}><span>About me:</span> {props.profile.aboutMe}</li>
              <li className={style.item}><span>Website:</span> www.google.com</li>
            </ul>
          </div>
        </div>
      </div>
  )
}


export default Info;
