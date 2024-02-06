import React from "react";
import { useEffect } from "react";

const Slide = () => {
  const windowWidth = window.innerWidth;


  useEffect(() => {
    if (windowWidth<1000) {
      jQuery(document).ready(function () {
        let a = jQuery(".img_before"),
          b = jQuery(".img_before img").width(),
          c = Math.round(b / 2);
        a.width(c);
  
        // Cambiamos el evento de 'pointermove' a 'click'
        jQuery(".before_after_slider").on("click", function (event) {
          // Obtenemos la posición X del clic relativa al contenedor
          let offsetX = event.offsetX || event.clientX - jQuery(this).offset().left;
          a.width(offsetX);
        });
  
        // Restauramos la barra a su posición original al dejar de hacer clic
        jQuery(".before_after_slider").on("mouseleave", function () {
          a.stop().animate({ width: c }, 1000);
        });
      });
    }else{
      jQuery(document).ready(function () {
        let a = jQuery(".img_before"),
          b = jQuery(".img_before img").width(),
          c = Math.round(b / 2);
        a.width(c),
          jQuery(".before_after_slider").on("mousemove", function (event) {
            let c = event.offsetX || event.clientX - jQueryimg_after.offset().left;
            a.width(c);
          });
          jQuery(".before_after_slider").on("mouseleave", function () {
            a.stop().animate({ width: c }, 1000);
          });
      }); 
    }
  }, [])
  
  return (
    <div>
      <div className="slide__container">
        <h4 className="slide__title">Renova tu hogar</h4>
        <div className="before_after_slider">
          <div className="img_after">
            <img src="https://i.ibb.co/6smdpC5/Imagen-de-Whats-App-2024-01-20-a-las-21-28-24-122d8b9c.jpg" alt="mendoza-&-asociados-image" className="slide__image"/>
          </div>
          <div className="img_before" >
            <img src="https://i.ibb.co/d7B40FV/Imagen-de-Whats-App-2024-01-20-a-las-21-28-25-a4d133e2.jpg" alt="mendoza-&-asociados-image" className="slide__image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
