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
        {bar.map((b) =>
        <NavBar text={b.text} url={b.url}></NavBar>
        )}
  
    </div>
  )
}

export default Header;