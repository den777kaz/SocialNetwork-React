import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://e7.pngegg.com/pngimages/723/887/png-clipart-computer-icons-x-mark-check-mark-red-x-miscellaneous-text-thumbnail.png" alt="logo"/>
      {props.isAuth ? props.login : <NavLink to={'/login'}> login </NavLink>}
    </header>
  )
}


export default Header;
