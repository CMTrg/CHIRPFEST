import React, { useState } from "react";
import Slider from "react-slick";
import duck from "../assets/artists/duck.png";
import duckDescription from "../assets/artists/DuckDes.png";
import flamingo from "../assets/artists/flamingo_1.png";
import flamingoDescription from "../assets/artists/FlamingoDes.png";
import peacock from "../assets/artists/PEACOCK.png";
import peacockDescription from "../assets/artists/PeacockDes.png";
import eagle from "../assets/artists/Eagle.png";
import eagleDescription from "../assets/artists/EagleDes.png";
import parrot from "../assets/artists/parrot.png";
import parrotDescription from "../assets/artists/ParrotDes.png";

function PictureSlider() {
  // State to toggle images for each animal
  const [duckDes, setDuck] = useState(true);
  const [flamingoDes, setFlamingo] = useState(true);
  const [peacockDes, setPeacock] = useState(true);
  const [eagleDes, setEagle] = useState(true);
  const [parrotDes, setParrot] = useState(true);

  // Click handler to toggle images
  const handleClick = (animal) => {
    switch (animal) {
      case "duck":
        setDuck(!duckDes);
        break;
      case "flamingo":
        setFlamingo(!flamingoDes);
        break;
      case "peacock":
        setPeacock(!peacockDes);
        break;
      case "eagle":
        setEagle(!eagleDes);
        break;
      case "parrot":
        setParrot(!parrotDes);
        break;
      default:
        break;
    }
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    dots: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, dots: true, infinite: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="slider-container" >
      <Slider {...settings}>
        <div>
          <img
            src={duckDes ? duck : duckDescription}
            alt="Duck"
            onClick={() => handleClick("duck")}
          />
        </div>
        <div>
          <img
            src={flamingoDes ? flamingo : flamingoDescription}
            alt="Flamingo"
            onClick={() => handleClick("flamingo")}
          />
        </div>
        <div>
          <img
            src={peacockDes ? peacock : peacockDescription}
            alt="Peacock"
            onClick={() => handleClick("peacock")}
          />
        </div>
        <div>
          <img
            src={eagleDes ? eagle : eagleDescription}
            alt="Eagle"
            onClick={() => handleClick("eagle")}
          />
        </div>
        <div>
          <img
            src={parrotDes ? parrot : parrotDescription}
            alt="Parrot"
            onClick={() => handleClick("parrot")}
          />
        </div>
      </Slider>
    </div>
  );
}

export default PictureSlider;
