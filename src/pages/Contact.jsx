import React from 'react'
import styles from '../assets/styles/contacto.module.css'
import 'animate.css';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <div className={styles.contacto__container}>
        <h1 className={styles.contacto__title}>¿Estás buscando un cambio?</h1>
        <div className={styles.contacto__main}>
          <img src="./img/contacto.webp" alt="mendoza-&-asociados-image" className={`${styles.contacto__image} animate__animated animate__slideInDown`}/>
          <div className={styles.contacto__ancor__contain}>
            <h3>Contactanos</h3>
            <a href="" className={styles.contacto__ancor}><img src="./img/nstagram.webp" alt="mendoza-&-asociados-image" className={styles.contacto__logo}/> @MendozaAsoc </a>
            <a href="https://wa.me/543543310908/?text=Hola buenos días, estoy interesado/a en" target='_blank' className={styles.contacto__ancor}><img src="./img/whatsapp.png" alt="mendoza-&-asociados-image" className={styles.contacto__logo}/>Julián</a>
            <a href="" className={styles.contacto__ancor}> <img src="./img/whatsapp.png" alt="lmendoza-&-asociados-image" className={styles.contacto__logo}/>+54 3512-826-584</a>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Contact