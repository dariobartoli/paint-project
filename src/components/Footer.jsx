import React from 'react'
import styles from '../assets/styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div>
            <a href="" ><img src="https://i.ibb.co/dQhhBXg/instablack.png" alt="mendoza-&-asociados-image" className={styles.image}/></a>
        </div>
        <h4>©2024 - Mendoza & Asociados</h4>
        <div className={styles.contacto}>
            <h4>Contacto: </h4>
            <div>
                <p>Tel: <span>354-3310-908</span></p>
                <p>Tel: <span>354-3310-908</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer