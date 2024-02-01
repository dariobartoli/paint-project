import React from 'react'
import Slide from '../components/Slide';
import styles from '../assets/styles/home.module.css'
import { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer';




const Home = () => {
  jQuery.noConflict() //Para que funcione el Slide

  
  const [animation, setAnimation] = useState(false)
  const [imageAnimation2, setImageAnimation2] = useState(false)
  const targetRef = useRef(null);
  const image2Ref = useRef(null);
  const [texto, setTexto] = useState('')
  const textoOriginal = 'Meendoza & Asociados'
  const velocidadEscritura = 100;

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if(windowWidth > 800){
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // El porcentaje del elemento que debe estar visible para activar la observación
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // El div es visible
            setAnimation(true)
          }
        });
      }, options);
  
      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageAnimation2(true)
          }
        });
      }, options);
  
      // Iniciar la observación del elemento de destino
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
      if(image2Ref.current){
        observer2.observe(image2Ref.current);
      }
  
      // Detener la observación cuando el componente se desmonta
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
        if(image2Ref.current){
          observer2.unobserve(image2Ref.current);
        }
      };
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si el scroll está en la parte superior de la página
      const isAtTop = window.scrollY === 0;

      if (isAtTop) {
        setAnimation(false);
        setImageAnimation2(false)
      }
    };

    // Agregar el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
  
      if (newWindowWidth > 800) {
        // Resto del código para iniciar/ajustar las observaciones
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Dependencia vacía para ejecutar este efecto solo una vez al montar el componente


  useEffect(() => {
    let index = 0;
    const intervalo = setInterval(() => {
        // Agregar la letra del texto
        setTexto(prevTexto => {
            if (index < textoOriginal.length) {
                return prevTexto + textoOriginal[index];
            }
            return prevTexto;
        });
        index++;

        // Detener la escritura automática al llegar al final del texto original
        if (index === textoOriginal.length) {
            clearInterval(intervalo);
        }
    }, velocidadEscritura);

    return () => clearInterval(intervalo);
    }, []); // El array vacío como segundo argumento de useEffect garantiza que el efecto solo se ejecute una vez al montar el componente
  

  return (
    <div>
      <div className={styles.home__container}>
        <div className={styles.home__section1}>
          <div className={styles.box__container__cabezal}>
            <h1 className={styles.title__home}>{texto}</h1>
            <div>
              <p>Nos dedicadamos a embellecer hogares y brindar soluciones de mantenimiento integral para casas. Nuestra pasión por la pintura y la satisfacción del cliente nos impulsan a ofrecer resultados excepcionales.</p>
            </div>
          </div>
        </div>
        <Slide/>
        <div className={`${styles.home__section1} ${styles.home__reverse}`}>
          <div className={styles.box__container} ref={targetRef}>
            <h3 className={styles.home__subtitle}>Ofrecemos una amplia gama de sevicios, entre ellos:</h3>
            <div>
              <p>Pintura interior y exterior: Nuestros expertos pintores transforman tus espacios y le dan un nuevo aire a tu hogar.</p>
              <p>Reparaciones y mantenimiento: Solucionamos cualquier problema en tu casa, desde pequeñas reparaciones hasta proyectos más complejos.</p>
            </div>
          </div>
          <div className={styles.box__container__image}>
              <img src="https://i.ibb.co/6smdpC5/Imagen-de-Whats-App-2024-01-20-a-las-21-28-24-122d8b9c.jpg" alt="mendoza-&-asociados-image" className={`${styles.imagen__demostracion} ${animation? styles.animation : ""}`} />
          </div>
        </div>
        <div className={styles.home__section1}>
          <div className={styles.box__container} ref={image2Ref}>
            <h3 className={styles.home__subtitle}>¿Por qué elegirnos?</h3>
            <div>
              <p>Profesionalismo: Contamos con un equipo altamente capacitado y experimentado en el arte de pintar y el mantenimiento de casas.</p>
              <p>Calidad garantizada: Utilizamos materiales de primera calidad para asegurar resultados duraderos y superar las expectativas de nuestros clientes.</p>
              <p>Satisfacción del cliente: Nuestra prioridad es ver sonrisas en nuestros clientes. Trabajamos arduamente para lograr resultados que superen sus expectativas.</p>
            </div>
          </div>
          <div className={styles.box__container__image}>
            <img src="https://i.ibb.co/cFGjxK5/Imagen-de-Whats-App-2024-01-20-a-las-21-57-47-ae6675fc.jpg" alt="mendoza-&-asociados-image" className={`${styles.imagen__demostracion} ${imageAnimation2? styles.animation : ""}`}/>
          </div>
        </div>
        <article className={styles.footer__container}>
            <p>¡No esperes más para darle un nuevo aspecto a tu hogar! Contáctanos para obtener un presupuesto gratuito y sin compromiso. Estamos ansiosos por trabajar contigo y hacer realidad tus ideas.</p>
            <p>¡Agradecemos el tiempo que han dedicado para conocer más sobre "MultiColor"! Estamos entusiasmados de poder ser parte de la transformación y el cuidado de su hogar. ¡Esperamos trabajar juntos muy pronto!</p>
        </article>
        {/* <img src="./img/wave.svg" alt="svg" /> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Home