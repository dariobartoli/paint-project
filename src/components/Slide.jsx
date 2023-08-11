import React from "react";

const Slide = () => {
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

  return (
    <div>
      <div className="slide__container">
        <h4 className="slide__title">¡Prueba el cambio!</h4>
        <div className="before_after_slider">
          <div className="img_after">
            <img src="./img/foto1.webp" alt="" className="slide__image"/>
          </div>
          <div className="img_before" >
            <img src="./img/foto2.jpg" alt="" className="slide__image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
