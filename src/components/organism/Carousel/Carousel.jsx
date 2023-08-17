import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000, // Interval in milliseconds
    dots: true, // Menampilkan titik indikator
    arrows: true, // Menampilkan tombol panah
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <Link to="">
            <img
              src="https://app.mbahgaming.com/uploads/banners/thumbnail/thumbnail-1677836067022.jpg"
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src="https://app.mbahgaming.com/uploads/banners/thumbnail/thumbnail-1676283400624.jpg"
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <div>
          <Link to="">
            <img
              src="https://app.mbahgaming.com/uploads/banners/thumbnail/thumbnail-1673950898577.jpg"
              alt=""
              className="w-full"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
