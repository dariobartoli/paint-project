import React from 'react'
import '../assets/styles/header.css'
import 'animate.css';


const HeaderPhone = () => {
  return (
    <div>
        <div className='header__container'>
            <img src="./img/logo2.png" alt="logo" className='logo'/>
            <h1 className='title animate__animated animate__zoomIn'>MultiColor</h1>
        </div>
    </div>
  )
}

export default HeaderPhone