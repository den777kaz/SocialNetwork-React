import React from 'react';
import style from './Info.module.css'


const Info = () => {
  return (
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
      </div>
  )
}


export default Info;
