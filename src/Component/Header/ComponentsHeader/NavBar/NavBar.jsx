import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css"

function NavBar({text, url}) {
  const [isSelect, setSelect] = useState('');
  const handleClick = () => {
      console.log('Clicked NavBar');
  }
  return (
    <div className={styles.display} onClick={handleClick}>
     <Link to={url} className={`${styles.name}` + ` ${isSelect ? styles.selected : ''}`}>{text}</Link>
    </div>
  )
}

export default NavBar;