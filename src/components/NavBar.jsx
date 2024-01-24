import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from '../assets/styles/navBar.module.css'
import 'animate.css';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClick = ()=>{
        setShowModal(!showModal)
    }

  return (
    <div className={styles.navBar__container}>
        <div>
            <img src="https://i.ibb.co/QbTpM7b/logo2.png" alt="logo" className={styles.logo__navBar} />
        </div>
        <div className={`${styles.navBar__menu} ${showModal? styles.show : ""}`}>
            <div>
                <NavLink to={"/"} onClick={handleClick} className={(navData) => navData.isActive? styles.active : styles.ancor}>Inicio</NavLink>
                <div></div>
            </div>
            <div>
                <NavLink to={"/works"} onClick={handleClick} className={(navData) => navData.isActive? styles.active : styles.ancor}>Trabajos</NavLink>
                <div></div>
            </div>
            <div>
                <NavLink to={"/contact"} onClick={handleClick} className={(navData) => navData.isActive? styles.active : styles.ancor}>Contacto</NavLink>
                <div></div>
            </div>
            
        </div>
        <div className={styles.hamburtitle__contain}>
            <div className={styles.navBar__hambur} onClick={handleClick}>
                <span className={`material-symbols-outlined ${styles.menu__hambur}`}>menu</span>
            </div>
            <div className={`${styles.title__navBar} animate__animated animate__zoomIn`}>
                <h1>MultiColor</h1>
            </div>
        </div>
    </div>
  )
}

export default NavBar