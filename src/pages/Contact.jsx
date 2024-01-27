import React from 'react'
import styles from '../assets/styles/contacto.module.css'
import 'animate.css';

const Contact = () => {
  return (
    <div>
      <div className={styles.contacto__container}>
        <h3 className={styles.contacto__title}>Contactanos</h3>
        <div className={styles.contacto__main}>
          <img src="./img/contacto.webp" alt="foto" className={`${styles.contacto__image} animate__animated animate__slideInDown`}/>
          <div className={styles.contacto__ancor__contain}>
            <a href="" className={styles.contacto__ancor}><img src="./img/nstagram.webp" alt="logo" className={styles.contacto__logo}/> @MultiColor </a>
            <a href="" className={styles.contacto__ancor}><img src="./img/facebook.png" alt="logo" className={styles.contacto__logo}/> MultiColor </a>
            <a href="https://wa.me/543543310908/?text=Hola buenos días, estoy interesado/a en" target='_blank' className={styles.contacto__ancor}><img src="./img/whatsapp.png" alt="logo" className={styles.contacto__logo}/>Julián</a>
            <a href="" className={styles.contacto__ancor}> <img src="./img/whatsapp.png" alt="logo" className={styles.contacto__logo}/>+54 3512-826-584</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact