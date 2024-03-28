import React from 'react'
import styles from "./NavBar.module.css"

function NavBar({text, url}) {
  return (
    <div className={styles.display}>
     <p className={styles.name}>{text}</p>
    </div>
  )
}

export default NavBar;