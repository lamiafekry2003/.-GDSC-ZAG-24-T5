import React from 'react'
import slider1 from '../../assesst/slider-1.avif'
import slider2 from '../../assesst/slider-2.webp'
import slider3 from '../../assesst/slider-3.webp'
import style from './Slider.module.css'

export default function Slider() {
  return (
   <div>
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider1} className={`d-block w-100  ${style.heigt}`} alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider2} className={`d-block w-100  ${style.heigt}`} alt="..." />
      </div>
      <div className="carousel-item">
        <img src={slider3} className={`d-block w-100  ${style.heigt}`}  alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  )
}
