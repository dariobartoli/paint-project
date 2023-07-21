import React from 'react'
import HeaderPhone from '../components/HeaderPhone'
import '../assets/styles/home.css'

const Home = () => {
  return (
    <div>
      <HeaderPhone/>
      <div className='home__container'>
        <div className='box__container'>
          <h3>¿Quienes somos?</h3>
          <p>Somos una empresa dedicada a embellecer hogares y brindar soluciones de mantenimiento integral para casas. Nuestra pasión por la pintura y la satisfacción del cliente nos impulsan a ofrecer resultados excepcionales.</p>
        </div>
        <div className='box__container'>
          <h3>Nuestros servicios:</h3>
          <img src="./img/casa1.webp" alt="casa" className='imagen__demostracion'/>
        </div>
        <div className='box__container'>
          <h3>Ofrecemos una amplia gama de sevicios, entre ellos:</h3>
          <p>Pintura interior y exterior: Nuestros expertos pintores transforman tus espacios y le dan un nuevo aire a tu hogar.</p>
          <p>Reparaciones y mantenimiento: Solucionamos cualquier problema en tu casa, desde pequeñas reparaciones hasta proyectos más complejos.</p>
        </div>
        <div className='box__container'>
          <h3>¿Por qué elegirnos?</h3>
          <p>Profesionalismo: Contamos con un equipo altamente capacitado y experimentado en el arte de pintar y el mantenimiento de casas.</p>
          <p>Calidad garantizada: Utilizamos materiales de primera calidad para asegurar resultados duraderos y superar las expectativas de nuestros clientes.</p>
          <p>Satisfacción del cliente: Nuestra prioridad es ver sonrisas en nuestros clientes. Trabajamos arduamente para lograr resultados que superen sus expectativas.</p>
        </div>
        <div className='box__container'>
          <p>¡No esperes más para darle un nuevo aspecto a tu hogar! Contáctanos para obtener un presupuesto gratuito y sin compromiso. Estamos ansiosos por trabajar contigo y hacer realidad tus ideas.</p>
        </div>
        <div className='box__container'>
          <p>¡Agradecemos el tiempo que han dedicado para conocer más sobre "MultiColor"! Estamos entusiasmados de poder ser parte de la transformación y el cuidado de su hogar. ¡Esperamos trabajar juntos muy pronto!</p>
        </div>
      </div>
    </div>
  )
}

export default Home