import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../assets/styles/navBar.css'
import 'animate.css';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClick = ()=>{
        setShowModal(!showModal)
    }

  return (
    <div className="navBar__container">
            <div>
                <img src="./img/logo2.png" alt="logo" className='logo__navBar' />
            </div>
        <div className="navBar__hambur" onClick={handleClick}>
            <span className="material-symbols-outlined menu__hambur">menu</span>
        </div>
        <div className={`navBar__menu ${showModal? "show" : ""}`}>
            <NavLink to={"/"} onClick={handleClick} className="ancor" activeclassname="active">Inicio</NavLink>
            <NavLink to={"/works"} onClick={handleClick} className="ancor">Trabajos</NavLink>
            <NavLink to={"/contact"} onClick={handleClick} className="ancor">Contacto</NavLink>
        </div>
        <div className='title__navBar animate__animated animate__zoomIn'>
            <h1>MultiColor</h1>
        </div>
    </div>
  )
}

export default NavBar