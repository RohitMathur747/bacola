import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../../assets/images/slideBanner1.jpg";
import banner2 from "../../assets/images/slideBanner2.jpg";
import banner3 from "../../assets/images/slideBanner3.jpg";
import banner4 from "../../assets/images/slideBanner4.jpg";

const PrevArrow = ({ className, onClick }) => (
  <button
    type="button"
    className={`${className} custom-prev`}
    onClick={onClick}
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ className, onClick }) => (
  <button
    type="button"
    className={`${className} custom-next`}
    onClick={onClick}
  >
    <FaChevronRight />
  </button>
);

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="container md-3">
      <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img className="w-100" src={banner1} alt="Banner 1" />
          </div>
          <div className="item">
            <img className="w-100" src={banner2} alt="Banner 2" />
          </div>
          <div className="item">
            <img className="w-100" src={banner3} alt="Banner 3" />
          </div>
          <div className="item">
            <img className="w-100" src={banner4} alt="Banner 4" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
