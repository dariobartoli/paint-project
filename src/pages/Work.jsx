import React, { useEffect } from 'react'
import styles from '../assets/styles/work.module.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCasa } from '../context/CasaContext'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Work = () => {
    const { data } = useCasa()
    const {id} = useParams()
    const [casa, setCasa] = useState({})
    const [localStorageReady, setLocalStorageReady] = useState(false);
    useEffect(() => {
        const storedData = localStorage.getItem('casaData');
        if (storedData) {
          setCasa(JSON.parse(storedData));
        }
        setLocalStorageReady(true);
    }, []);

    useEffect(() => {
        const currentCasa = data.filter((item) => item.id == id)
        setCasa(currentCasa || {})
        localStorage.setItem('casaData', JSON.stringify(currentCasa[0] || {}));
    }, [id, data, localStorageReady])

    useEffect(() => {
        // Establecer el desplazamiento a la parte superior al cargar la página
        window.scrollTo(0, 0);
      }, []);

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 400,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true
    };
  return (
    <div className={styles.container}>
        {casa[0]? 
        <h3 className={styles.fecha}>{casa[0].fecha}</h3>
        :""}
        <Slider {...settings} className={styles.images__container}>
            {casa[0]? casa[0].fotos.map((item,index) => (
                <div key={index} className={styles.images__box}>
                    <img src={item} alt="" />
                </div>
            )): ""}
        </Slider>
        <p className={styles.material__text}>Material utilizado: <span>{casa[0]? casa[0].material :""}</span></p>

        <div className={styles.video__container}>
          {casa[0] && casa[0].videos? 
          casa[0].videos.map((item, index) => (
            <div key={index}>
              <iframe src={`https://www.youtube.com/embed/${item}`} frameBorder="0" allowFullScreen={true}></iframe>
            </div>
          ))
          : ""}
        </div>
    </div>
  )
}

export default Work