import React from 'react';
import style from "./Post.module.css";

const Post = (probs) => {

  return (
      <div className={style.item}>
        <div className={style.avatar}>
          <img src="https://www.mlive.com/resizer/WHw98KiEZAbpKg2rrlK1fiDBm98=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg" alt="avatar"/>
          <span className={style.like}>Like <span className={style.like_count}>{probs.like}</span></span>
        </div>
       <p>{probs.message}</p>
      </div>
  )
}

export default Post;
