import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';
import ImageZoom from './ImageZoom';

const ProductSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-image-container">

    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <ImageZoom imageUrl={image} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ProductSlider;
