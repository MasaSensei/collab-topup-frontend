import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import CarouselItem from "../../atoms/CarouselItem/CarouselItem";

const CarouselComponent = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000, // Interval in milliseconds
    dots: true, // Menampilkan titik indikator
    arrows: false, // Menampilkan tombol panah
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <CarouselItem
          imageUrl="https://app.mbahgaming.com/uploads/banners/thumbnail/thumbnail-1673950898577.jpg"
          link="/register"
        />
        <CarouselItem
          imageUrl="https://app.mbahgaming.com/uploads/banners/thumbnail/thumbnail-1673950898577.jpg"
          link="/register"
        />
        <CarouselItem
          imageUrl="https://app.mbahgaming.com/uploads/banners/thumbnail/thumbnail-1673950898577.jpg"
          link="/register"
        />
      </Slider>
    </div>
  );
};

export default CarouselComponent;
