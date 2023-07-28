import React from 'react'
import HeaderPhone from '../components/HeaderPhone'
import '../assets/styles/contacto.css'


const Contact = () => {
  return (
    <div>
      <HeaderPhone/>
      <div className='contacto__container'>
        <h3 className='contacto__title'>Contactanos</h3>
        <div className='contacto__main'>
          <img src="./img/contacto.webp" alt="foto" className='contacto__image'/>
          <div className='contacto__ancor__contain'>
            <a href="" className='contacto__ancor'>@MultiColor <img src="./img/nstagram.webp" alt="logo" className='contacto__logo'/></a>
            <a href="" className='contacto__ancor'>MultiColor <img src="./img/facebook.png" alt="logo" className='contacto__logo'/></a>
            <a href="" className='contacto__ancor'>+54 3512-826-584 <img src="./img/whatsapp.png" alt="logo" className='contacto__logo'/></a>
            <a href="" className='contacto__ancor'>+54 3512-826-584 <img src="./img/whatsapp.png" alt="logo" className='contacto__logo'/></a>
          </div>
        </div>
        <img src="./img/wave.svg" alt="svg" />
      </div>

    </div>
  )
}

export default Contact