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
  const categories = [
    { image: cat1, label: "Suits" },
    { image: cat2, label: "Blazer" },
    { image: cat3, label: "Jacket" },
    { image: cat4, label: "Pants" },
    { image: cat5, label: "Jeans" },
    { image: cat6, label: "Dhoti" },
    { image: cat7, label: "Shorts" },
    { image: cat8, label: "Shirt" },
    { image: cat9, label: "Tshirt" },
    { image: cat10, label: "Full Sized Tshirt" },
  ];

  const slides = [];
  for (let i = 0; i < categories.length; i += 5) {
    slides.push(categories.slice(i, i + 5));
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="homecat">
      <div className="container">
        <div className="homecat-header d-flex align-items-center justify-content-between mb-4">
          <div>
            <h3 className="mb-0 hd">Featured Categories</h3>
            <p className="text-sml text-light mb-0">
              All categories grouped in sets of five.
            </p>
          </div>
          <Button className="viewAllBtn">
            View All
            <FaArrowRight />
          </Button>
        </div>

        <Slider {...settings}>
          {slides.map((group, slideIndex) => (
            <div className="homecat-slide" key={slideIndex}>
              <div className="homecat-grid">
                {group.map((category) => (
                  <div className="homecat-card" key={category.label}>
                    <div className="homecat-card-image">
                      <img src={category.image} alt={category.label} />
                    </div>
                    <div className="homecat-card-label">{category.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeCat;
