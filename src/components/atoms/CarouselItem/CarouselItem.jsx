import React from "react";
import { Link } from "react-router-dom";

const CarouselItem = (props) => {
  const { imageUrl, link, imgStyle } = props;

  return (
    <div>
      <Link to={link}>
        <img src={imageUrl} alt="" className="w-full" style={{ imgStyle }} />
      </Link>
    </div>
  );
};

export default CarouselItem;
