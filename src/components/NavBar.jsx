import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../assets/styles/navBar.css'

const NavBar = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClick = ()=>{
        setShowModal(!showModal)
    }

  return (
    <div className="navBar__container">
        <div className="navBar__hambur" onClick={handleClick}>
            <span className="material-symbols-outlined menu__hambur">menu</span>
        </div>
        <div className={`navBar__menu ${showModal? "show" : ""}`}>
            <NavLink to={"/"} onClick={handleClick} className="ancor">Inicio</NavLink>
            <NavLink to={"/works"} onClick={handleClick} className="ancor">Trabajos</NavLink>
            <NavLink to={"/contact"} onClick={handleClick} className="ancor">Contacto</NavLink>
        </div>
    </div>
  )
}

export default NavBar