import React from 'react'
import styles from '../assets/styles/gallery.module.css'

const Gallery = () => {
  return (
    <div>
        <div className={styles.carousel__container}>
            <img src="https://i.ibb.co/whSx790/Imagen-de-Whats-App-2024-01-20-a-las-21-52-54-2efd666f.jpg" alt="" />
            <img src="https://i.ibb.co/6smdpC5/Imagen-de-Whats-App-2024-01-20-a-las-21-28-24-122d8b9c.jpg" alt="" />
            <img src="https://i.ibb.co/1m000mw/Imagen-de-Whats-App-2024-01-24-a-las-23-21-15-7b3104e7.jpg" alt="" />
            <img src="https://i.ibb.co/Nxt1Q78/Imagen-de-Whats-App-2024-01-20-a-las-21-57-49-a3dd1555.jpg" alt="" />
            <img src="https://i.ibb.co/w0KWw6h/Imagen-de-Whats-App-2024-01-24-a-las-23-18-41-aed70eaf.jpg" alt="" />
        </div>
    </div>
  )
}

export default Gallery