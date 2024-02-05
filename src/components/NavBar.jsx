import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from '../assets/styles/navBar.module.css'
import 'animate.css';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false)
    const [scroll, setScroll] = useState(false)
    const handleClick = ()=>{
        setShowModal(!showModal)
    }

    useEffect(() => {
        const handleScroll = () => {
          // Verificar si el scroll está en la parte superior de la página
          const isAtTop = window.scrollY === 0;
      
          // Actualizar el estado de scroll
          setScroll(!isAtTop);
        };
      
        // Agregar el evento de scroll al montar el componente
        window.addEventListener('scroll', handleScroll);
      
        // Eliminar el evento de scroll cuando el componente se desmonta
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className={`${styles.navBar__container} ${scroll? styles.scroll__active : ""}`}>
        <div className={styles.title__contain}>
            <img src="https://i.ibb.co/QbTpM7b/logo2.png" alt="mendoza-&-asociados-image" className={`${styles.logo__navBar}`} />
            <div className={`${styles.title__navBar} animate__animated animate__zoomIn`}>
                <h1>Mendoza & Asociados</h1>
            </div>
        </div>
        <div className={`${styles.navBar__menu} ${scroll? styles.navBar__menu__scroll : ""} ${showModal? styles.show : ""}`}>
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