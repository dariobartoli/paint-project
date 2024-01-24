import React from 'react'
import styles from '../assets/styles/gallery.module.css'

const Gallery = () => {
  return (
    <div>
        <div className={styles.carousel__container}>
            <img src="./img/foto1.webp" alt="" />
            <img src="./img/foto2.jpg" alt="" />
            <img src="./img/foto3.webp" alt="" />
            <img src="./img/foto4.webp" alt="" />
            <img src="./img/foto5.jpg" alt="" />
        </div>
    </div>
  )
}

export default Gallery