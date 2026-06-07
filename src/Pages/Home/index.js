import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/verticalbanner2.jpg";
import banner3 from "../../assets/images/verticalbanner3.jpg";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import ProductDisplayNoSlider from "../../Components/ProductDisplay";
import lowban1 from "../../assets/images/lowerbanner1.jpg";
import lowban2 from "../../assets/images/lowerbanner2.jpg";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <HomeCat />

      <section className="homeproducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} className="cursor w-100 mt-5" />
              </div>
              <div className="banner">
                <img src={banner2} className="cursor w-100 mt-5" />
              </div>

              <div className="banner">
                <img src={banner3} className="cursor w-100 mt-5" />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center ">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Dont miss the current offer until the end of june.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <FaArrowRight />
                </Button>
              </div>

              <ProductItem />

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">New Products</h3>
                  <p className="text-light text-sml mb-0">
                    New Products are within the Stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <FaArrowRight />
                </Button>
              </div>

              <ProductDisplayNoSlider />
            </div>

            <div className="lowerslider row">
              <div className="col-sm-6">
                <img src={lowban1} className="w-100" alt="lower banner 1" />
              </div>
              <div className="col-sm-6">
                <img src={lowban2} className="w-100" alt="lower banner 2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
