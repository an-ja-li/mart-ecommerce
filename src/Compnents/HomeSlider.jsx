import React from "react";
import Slider from "react-slick";
import { sliderData } from "../data/sliderData";
import "./HeroSlider.css"; 

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="hero-slider-container">
      <Slider {...settings}>
        {sliderData.map((item) => (
          <div key={item.id} className="hero-slide">
            <div className="hero-content">
              <div className="hero-text">
                <h2 className="hero-title">{item.title}</h2>
                <p className="hero-desc">{item.desc}</p>
                <a href="#collections" className="hero-button">Visit Collections</a>
              </div>
              <div className="hero-image">
                <img src={item.cover} alt="Slide" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;