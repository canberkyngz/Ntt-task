import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderPhotos from "../image/Slider.png";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        ></div>
      );
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const images = [
    SliderPhotos,
    SliderPhotos,
    SliderPhotos,
    SliderPhotos,
    // Diğer resimleri buraya ekleyin.
  ];

  return (
    <div className="mt-2" style={{ position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "10%",
                backgroundColor: "black",
                opacity: "0.05",
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
