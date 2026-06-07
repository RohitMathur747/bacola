import React from "react";
import Slider from "react-slick";
import cat1 from "../../assets/images/cat1.jpg";
import cat2 from "../../assets/images/cat2.jpg";
import cat3 from "../../assets/images/cat3.jpg";
import cat4 from "../../assets/images/cat4.jpg";
import cat5 from "../../assets/images/cat5.jpg";
import cat6 from "../../assets/images/cat6.jpg";
import cat7 from "../../assets/images/cat7.jpg";
import cat8 from "../../assets/images/cat8.jpg";
import cat9 from "../../assets/images/cat9.jpg";
import cat10 from "../../assets/images/cat10.jpg";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";

const HomeCat = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="homecat">
        <div class="container">
          <Slider {...settings}>
            <div className="d-flex align-items-center ">
              <div className="info w-75">
                <h3 className="mb-0 hd">Featured Categories</h3>
              </div>
              <Button className="viewAllBtn ml-auto">
                View All
                <FaArrowRight />
              </Button>
            </div>
            <div className="item">
              <img src={cat1} width="100px" height="100px" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HomeCat;
