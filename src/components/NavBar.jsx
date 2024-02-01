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
        <div className={styles.title__contain}>
            <img src="https://i.ibb.co/QbTpM7b/logo2.png" alt="mendoza-&-asociados-image" className={`${styles.logo__navBar} animate__animated animate__zoomIn`} />
            <div className={`${styles.title__navBar} animate__animated animate__zoomIn`}>
                <h1>Mendoza & Asociados</h1>
            </div>
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
        <div className={styles.navBar__hambur} onClick={handleClick}>
            <span className={`material-symbols-outlined ${styles.menu__hambur}`}>menu</span>
        </div>
    </div>
  )
}

export default NavBar