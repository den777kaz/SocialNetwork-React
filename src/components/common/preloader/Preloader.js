import React from 'react';
import style from './Preloader.module.css'
import spinner from '../../../assets/images/Spinner.svg'

export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={spinner} alt={"spinner"}/>
    </div>
  )
};
