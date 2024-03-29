import { Component, useEffect, useState } from "react";
import stylesheader from "/src/Component/Header/Header.module.css";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouse = (e) => {
    setOpenMenu(!isOpenMenu);
  }

  return (
    <>
      {windowWidth < 1080 ? (
        <>
        <div className={!isOpenMenu ? styles.background : styles.backgroundopen}>
        <Link to="/login"><img className={styles.loginopen} src="src/assets/img/login.jpeg" about="login" /> </Link>
        <Link>
        <div className={styles.searchbackground}>
    
        </div>
        </Link>
        </div>
        <div className={styles.microcontent} onMouseDown={handleMouse}>
          <div className={styles.upline + ' ' + (isOpenMenu ? styles.uplineopen : '')} />
          <div className={styles.midleline + ' ' + (isOpenMenu ? styles.midlelineopen : '')} />
          <div className={styles.downline + ' ' + (isOpenMenu ? styles.downlineopen : '')} />
        </div>
       
        </>
      ) : (
        <>
          <Link to="/login">
            <img className={stylesheader.login} src="src/assets/img/login.jpeg" about="login" />
          </Link>
          <Link to="/profile/basket">
            <img className={stylesheader.basket} src="src/assets/img/basket.jpeg" about="basket" />
          </Link>
          <img className={stylesheader.search} src="src/assets/img/search.jpeg" about="search" />
        </>
      )}
    </>
  );
}

export default Menu;