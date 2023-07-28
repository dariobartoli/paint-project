import React from 'react'
import HeaderPhone from '../components/HeaderPhone'
import '../assets/styles/home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  AOS.init();
  return (
    <div>
      <HeaderPhone/>
      <div className='home__container'>
        <div className='home__section1'>
          <div className='box__container'>
            <h3 className='title__home'>¿Quienes somos?</h3>
            <div>
              <p>Somos una empresa dedicada a embellecer hogares y brindar soluciones de mantenimiento integral para casas. Nuestra pasión por la pintura y la satisfacción del cliente nos impulsan a ofrecer resultados excepcionales.</p>
            </div>
          </div>
          <div className='box__container__image'>
            <img src="./img/casa1.webp" alt="casa" className='imagen__demostracion' data-aos="flip-right"/>
          </div>
        </div>
        <div className='home__section1  home__reverse'>
          <div className='box__container'>
            <h3 className='home__subtitle'>Ofrecemos una amplia gama de sevicios, entre ellos:</h3>
            <div>
              <p>Pintura interior y exterior: Nuestros expertos pintores transforman tus espacios y le dan un nuevo aire a tu hogar.</p>
              <p>Reparaciones y mantenimiento: Solucionamos cualquier problema en tu casa, desde pequeñas reparaciones hasta proyectos más complejos.</p>
            </div>
          </div>
          <div className='box__container__image'>
              <img src="./img/casa1.webp" alt="casa" className='imagen__demostracion' data-aos="flip-left"/>
          </div>
        </div>
        <div className='home__section1'>
          <div className='box__container'>
            <h3 className='home__subtitle'>¿Por qué elegirnos?</h3>
            <div>
              <p>Profesionalismo: Contamos con un equipo altamente capacitado y experimentado en el arte de pintar y el mantenimiento de casas.</p>
              <p>Calidad garantizada: Utilizamos materiales de primera calidad para asegurar resultados duraderos y superar las expectativas de nuestros clientes.</p>
              <p>Satisfacción del cliente: Nuestra prioridad es ver sonrisas en nuestros clientes. Trabajamos arduamente para lograr resultados que superen sus expectativas.</p>
            </div>
          </div>
          <div className='box__container__image'>
            <img src="./img/casa1.webp" alt="casa" className='imagen__demostracion'  data-aos="flip-right"/>
          </div>
        </div>
        <div className='box__container'>
          <p>¡No esperes más para darle un nuevo aspecto a tu hogar! Contáctanos para obtener un presupuesto gratuito y sin compromiso. Estamos ansiosos por trabajar contigo y hacer realidad tus ideas.</p>
        </div>
        <div className='box__container'>
          <p>¡Agradecemos el tiempo que han dedicado para conocer más sobre "MultiColor"! Estamos entusiasmados de poder ser parte de la transformación y el cuidado de su hogar. ¡Esperamos trabajar juntos muy pronto!</p>
        </div>
        <img src="./img/wave.svg" alt="svg" />
      </div>
    </div>
  )
}

export default Home