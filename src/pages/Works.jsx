import React from 'react'
import HeaderPhone from '../components/HeaderPhone'
import '../assets/styles/works.css'
import { useState, useEffect } from 'react'
import Gallery from '../components/Gallery'


const Works = ({data}) => {
  const [show, setShow] = useState(false)
  const [image, setImage] = useState("")
  const [nextDeshabilitado, setNextDeshabilitado] = useState(false)



  const nextImage = (id) =>{
    let imagen = data.filter((item) => item.id == id + 1)
    setImage(imagen[0])
  }

  const previousImage = (id) =>{
    let imagen = data.filter((item) => item.id == id -1) 
    setImage(imagen[0])
  }


  useEffect(() => {
  }, [image, nextDeshabilitado])


  const handleClick = (e) =>{
    setShow(!show)
    searchImage(e.target.id)
  }
  const closeModal = () => {
    setShow(!show)
  }
  
  const searchImage = (id) => {
    let imagen = data.filter((item) => item.id == id)
    setImage(imagen[0])
  }



  return (
    <div>
      <HeaderPhone/>
      <div className='works__container'>
        <h3 className='works__title'>Vista a nuestros trabajos</h3>
        <Gallery/>
        <h3 className='works__title'>Galeria: </h3>
        <div className='works__image__contain'>
          {data.map((item) => {
            return <img src={item.src} key={item.id} alt="foto" className='works__image' onClick={handleClick} id={item.id}/>
          })}
        </div>
        {show? <div className='modal__container'>
          {image.id == 1? <div className='vacio'></div> : 
          <div className='modal__icon__contain'>
            <span class="material-symbols-outlined modal__change__icon left" onClick={() => previousImage(image.id)}>arrow_back_ios</span>
          </div>}
          <div className='modal'>
            <img src="./img/logo2.png" alt="logo" className='modal__logo'/>
            <span onClick={closeModal} class="material-symbols-outlined modal__close">close</span>
            <img src={image.src} alt="foto" className='modal__image'/>
          </div>
          {image.id == data.length? <div className='vacio'></div>  : 
            <div className='modal__icon__contain'>
              <span class="material-symbols-outlined modal__change__icon rigth" onClick={()=>nextImage(image.id)}>arrow_forward_ios</span>
            </div>}
        </div> : ""}
        <img src="./img/wave.svg" alt="svg" />
      </div>
    </div>
  )
}

export default Works