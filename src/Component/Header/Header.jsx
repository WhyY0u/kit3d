import React from 'react'
import styles from "./Header.module.css"
import NavBar from './ComponentsHeader/NavBar';

function Header() {
  const bar =[
    {text: "Home", url: "/home"},
    {text: "Products", url: "/products"},
    {text: "About us", url: "/about"}
  ];
  return (
    <div className={styles.background}>
        <p className={styles.text}>KIT3D</p>
        <img className={styles.logo} src='src/assets/img/logo.jpeg' about='logo'/>         
        {bar.map((b) =>
        <NavBar text={b.text} url={b.url}></NavBar>
        )}
        <img className={styles.login} src='src/assets/img/login.jpeg' about='login'/>
        <img className={styles.basket} src='src/assets/img/basket.jpeg' about='basket'/>
        <img className={styles.search} src='src/assets/img/search.jpeg' about='search'/>

  
    </div>
  )
}

export default Header;