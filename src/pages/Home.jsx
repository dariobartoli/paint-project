import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slide from '../components/Slide';
import styles from '../assets/styles/home.module.css'


const Home = () => {
  jQuery.noConflict(), //Para que funcione el Slide
  AOS.init();
  
  return (
    <div>
      <div className={styles.home__container}>
        <div className={styles.home__section1}>
          <div className={styles.box__container__cabezal}>
            <h3 className={styles.title__home}>¿Quienes somos?</h3>
            <div>
              <p>Somos una empresa dedicada a embellecer hogares y brindar soluciones de mantenimiento integral para casas. Nuestra pasión por la pintura y la satisfacción del cliente nos impulsan a ofrecer resultados excepcionales.</p>
            </div>
          </div>
        </div>
        <Slide/>
        <div className={`${styles.home__section1} ${styles.home__reverse}`}>
          <div className={styles.box__container}>
            <h3 className={styles.home__subtitle}>Ofrecemos una amplia gama de sevicios, entre ellos:</h3>
            <div>
              <p>Pintura interior y exterior: Nuestros expertos pintores transforman tus espacios y le dan un nuevo aire a tu hogar.</p>
              <p>Reparaciones y mantenimiento: Solucionamos cualquier problema en tu casa, desde pequeñas reparaciones hasta proyectos más complejos.</p>
            </div>
          </div>
          <div className={styles.box__container__image}>
              <img src="./img/casa1.webp" alt="casa" className={styles.imagen__demostracion}/>
          </div>
        </div>
        <div className={styles.home__section1}>
          <div className={styles.box__container}>
            <h3 className={styles.home__subtitle}>¿Por qué elegirnos?</h3>
            <div>
              <p>Profesionalismo: Contamos con un equipo altamente capacitado y experimentado en el arte de pintar y el mantenimiento de casas.</p>
              <p>Calidad garantizada: Utilizamos materiales de primera calidad para asegurar resultados duraderos y superar las expectativas de nuestros clientes.</p>
              <p>Satisfacción del cliente: Nuestra prioridad es ver sonrisas en nuestros clientes. Trabajamos arduamente para lograr resultados que superen sus expectativas.</p>
            </div>
          </div>
          <div className={styles.box__container__image}>
            <img src="./img/casa1.webp" alt="casa" className={styles.imagen__demostracion}/>
          </div>
        </div>
        <div className={styles.box__container}>
          <p>¡No esperes más para darle un nuevo aspecto a tu hogar! Contáctanos para obtener un presupuesto gratuito y sin compromiso. Estamos ansiosos por trabajar contigo y hacer realidad tus ideas.</p>
        </div>
        <div className={styles.box__container}>
          <p>¡Agradecemos el tiempo que han dedicado para conocer más sobre "MultiColor"! Estamos entusiasmados de poder ser parte de la transformación y el cuidado de su hogar. ¡Esperamos trabajar juntos muy pronto!</p>
        </div>
        <img src="./img/wave.svg" alt="svg" />
      </div>
    </div>
  )
}

export default Home