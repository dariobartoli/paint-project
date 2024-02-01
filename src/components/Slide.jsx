import React from "react";
import { useEffect } from "react";

const Slide = () => {

  useEffect(() => {
    jQuery(document).ready(function () {
      let a = jQuery(".img_before"),
        b = jQuery(".img_before img").width(),
        c = Math.round(b / 2);
      a.width(c),
        jQuery(".before_after_slider").on("pointermove", function (event) {
          let c = event.offsetX || event.clientX - jQueryimg_after.offset().left;
          a.width(c);
        });
        jQuery(".before_after_slider").on("pointerleave", function () {
          a.stop().animate({ width: c }, 1000);
        });
    });
  }, [])
  
  return (
    <div>
      <div className="slide__container">
        <h4 className="slide__title">¡Prueba el cambio!</h4>
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
