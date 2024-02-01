import React from 'react'
import Gallery from '../components/Gallery'
import { useNavigate } from 'react-router-dom'
import { useCasa } from '../context/CasaContext'
import styles from '../assets/styles/works.module.css'
import 'atropos/css'
import Atropos from 'atropos/react';
import Footer from '../components/Footer'


const Works = () => {
  const navigate = useNavigate()
  const {data} = useCasa()

  const handleNavigate = (id) => {
    navigate(`/works/${id}`)
  }
  

  return (
    <div>
      <div className={styles.works__container}>
        <section>
          <section className={styles.works__carousel}>
            <h1 className={styles.works__title}>Nuestros trabajos</h1>
            <Gallery/>
          </section>
          <section className={styles.works__galeria}>
            <h3 className={styles.works__title}>¡Echa un vistazo!</h3>
            <div className={styles.casas__container}>
              {data? data.map((casa, index) => (
                    <div className={styles.casa__card} onClick={()=>handleNavigate(casa.id)} key={index}>
                        <div id='app'>
                          <Atropos 
                          className="my-atropos"
                          activeOffset={100}
                          rotateXMax={10}
                          rotateYMax={10}
                          >
                            <img src={casa.portada} alt="mendoza-&-asociados-image" className={styles.card__image}/>
                          </Atropos>
                        </div>
                        <p>Ver más</p>
                    </div>
              )) : ""}
            </div>
          </section>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Works