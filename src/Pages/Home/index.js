import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner from "../../assets/images/banner1.jpg";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import product1 from "../../assets/images/banner2.jpg";
import product2 from "../../assets/images/banner3.jpg";
import product3 from "../../assets/images/banner4.jpg";
import product4 from "../../assets/images/banner5.jpg";
import product5 from "../../assets/images/banner6.jpg";
import product6 from "../../assets/images/banner7.jpg";
import Rating from "@mui/material/Rating";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };
  return (
    <>
      <HomeBanner />

      <section className="homeproducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner} className="cursor w-100" />
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

              <div className="product-row w-100">
                <Slider {...settings}>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src={product1}
                        className="productImage px-1 mt-2"
                        alt="Product 1"
                      />
                      <div className="info">
                        <h4>Clothing For Women</h4>
                        <span className="text-success">In Stock</span>
                        <br />
                        <Rating
                          name="size-medium"
                          className="mt-2"
                          defaultValue={5}
                        />
                        <div className="d-flex">
                          <span className="oldPrice mt-2">$20.00</span>
                          <span className="netPrice text-danger mt-2">
                            &nbsp; $14.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src={product2}
                        className="productImage px-1 mt-2"
                        alt="Product 2"
                      />
                      <div className="info">
                        <h4>Clothing For Men</h4>
                        <span className="text-success mb-2">In Stock</span>
                        <br />
                        <Rating
                          name="size-medium"
                          className="mt-2"
                          defaultValue={4}
                        />
                        <div className="d-flex">
                          <span className="oldPrice mt-2">$20.00</span>
                          <span className="netPrice text-danger mt-2">
                            &nbsp; $14.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src={product3}
                        className="productImage px-1 mt-2"
                        alt="Product 3"
                      />
                      <div className="info">
                        <h4>Clothing For Kids</h4>
                        <span className="text-success mb-2">In Stock</span>
                        <br />
                        <Rating
                          name="size-medium"
                          className="mt-2"
                          defaultValue={4}
                          precision={4.5}
                        />
                        <div className="d-flex">
                          <span className="oldPrice mt-2">$20.00</span>
                          <span className="netPrice text-danger mt-2">
                            &nbsp; $14.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src={product4}
                        className="productImage px-1 mt-2"
                        alt="Product 4"
                      />
                      <div className="info">
                        <h4>Rolex</h4>
                        <span className="text-success mt-2">In Stock</span>
                        <br />
                        <Rating
                          className="mt-2"
                          name="size-medium"
                          defaultValue={4}
                          precision={4.5}
                        />
                        <div className="d-flex">
                          <span className="oldPrice mt-2">$95000.00</span>
                          <span className="netPrice text-danger mt-2">
                            &nbsp; $90000.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src={product5}
                        className="productImage px-1 mt-2"
                        alt="Product 5"
                      />
                      <div className="info">
                        <h4>Suits For Men</h4>
                        <span className="text-success mb-2">In Stock</span>
                        <br />
                        <Rating
                          className="mt-2"
                          name="size-medium"
                          defaultValue={4}
                          precision={4.5}
                        />
                        <div className="d-flex">
                          <span className="oldPrice mt-2">$250.00</span>
                          <span className="netPrice text-danger mt-2">
                            &nbsp; $194.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src={product6}
                        className="productImage px-1 mt-2"
                        alt="Product 6"
                      />
                      <div className="info">
                        <h4>Iphone 17 Pro Max</h4>
                        <span className="text-success mb-2">In Stock</span>
                        <br />
                        <Rating
                          className="mt-2"
                          name="size-medium"
                          defaultValue={4}
                          precision={4.5}
                        />
                        <div className="d-flex">
                          <span className="oldPrice mt-2">$1420.00</span>
                          <span className="netPrice text-danger mt-2">
                            &nbsp; $1200.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
