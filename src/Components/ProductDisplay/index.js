import React from "react";
import product1 from "../../assets/images/banner2.jpg";
import product2 from "../../assets/images/banner3.jpg";
import product3 from "../../assets/images/banner4.jpg";
import product4 from "../../assets/images/banner5.jpg";
import product5 from "../../assets/images/banner6.jpg";
import product6 from "../../assets/images/banner7.jpg";
import Rating from "@mui/material/Rating";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "@mui/material/Button";

const ProductDisplayNoSlider = () => {
  return (
    <>
      <div className="product-display-grid">
        <div className="product-row w-100">
          <div className="item productItem">
            <div className="imgWrapper">
              <img
                src={product1}
                className="productImage px-1 mt-2"
                alt="Product 1"
              />
              <span className="badge badge-primary">28%</span>
              <div className="actions">
                <Button>
                  <SlSizeFullscreen />
                </Button>
                <Button>
                  <IoMdHeartEmpty />
                </Button>
              </div>
              <div className="info">
                <div className="product-header-meta d-flex align-items-center gap-3">
                  <span className="brand-name text-uppercase">BrandA</span>
                  <div className="rating-inline d-flex align-items-center">
                    <Rating
                      name="size-medium"
                      className="mt-0"
                      defaultValue={5}
                      readOnly
                      size="small"
                    />
                    <span className="rating-value ms-1">5</span>
                  </div>
                  <span className="order-no">Order No: A001</span>
                </div>
                <h4>Clothing For Women</h4>
                <span className="text-success">In Stock</span>
                <br />
                <div className="d-flex">
                  <span className="oldPrice mt-2">$20.00</span>
                  <span className="netPrice text-danger mt-2">
                    &nbsp; $14.00
                  </span>
                </div>
              </div>
              <div className="addToCartWrap">
                <Button
                  className="addToCartBtn"
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
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
              <span className="badge badge-primary">20%</span>
              <div className="actions">
                <Button>
                  <SlSizeFullscreen />
                </Button>
                <Button>
                  <IoMdHeartEmpty />
                </Button>
              </div>
              <div className="info">
                <div className="product-header-meta d-flex align-items-center gap-3">
                  <span className="brand-name text-uppercase">BrandB</span>
                  <div className="rating-inline d-flex align-items-center">
                    <Rating
                      name="size-medium-2"
                      className="mt-0"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                    <span className="rating-value ms-1">4</span>
                  </div>
                  <span className="order-no">Order No: B002</span>
                </div>
                <h4>Clothing For Men</h4>
                <span className="text-success mb-2">In Stock</span>
                <br />
                <div className="d-flex">
                  <span className="oldPrice mt-2">$20.00</span>
                  <span className="netPrice text-danger mt-2">
                    &nbsp; $14.00
                  </span>
                </div>
              </div>
              <div className="addToCartWrap">
                <Button
                  className="addToCartBtn"
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
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
              <span className="badge badge-primary">15%</span>
              <div className="actions">
                <Button>
                  <SlSizeFullscreen />
                </Button>
                <Button>
                  <IoMdHeartEmpty />
                </Button>
              </div>
              <div className="info">
                <div className="product-header-meta d-flex align-items-center gap-3">
                  <span className="brand-name text-uppercase">BrandC</span>
                  <div className="rating-inline d-flex align-items-center">
                    <Rating
                      name="size-medium-3"
                      className="mt-0"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                    <span className="rating-value ms-1">4</span>
                  </div>
                  <span className="order-no">Order No: C003</span>
                </div>
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
              <div className="addToCartWrap">
                <Button
                  className="addToCartBtn"
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
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
              <span className="badge badge-primary">15%</span>
              <div className="actions">
                <Button>
                  <SlSizeFullscreen />
                </Button>
                <Button>
                  <IoMdHeartEmpty />
                </Button>
              </div>
              <div className="info">
                <div className="product-header-meta d-flex align-items-center gap-3">
                  <span className="brand-name text-uppercase">BrandD</span>
                  <div className="rating-inline d-flex align-items-center">
                    <Rating
                      name="size-medium-4"
                      className="mt-0"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                    <span className="rating-value ms-1">4</span>
                  </div>
                  <span className="order-no">Order No: D004</span>
                </div>
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
              <div className="addToCartWrap">
                <Button
                  className="addToCartBtn"
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
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
              <span className="badge badge-primary">5%</span>
              <div className="actions">
                <Button>
                  <SlSizeFullscreen />
                </Button>
                <Button>
                  <IoMdHeartEmpty />
                </Button>
              </div>
              <div className="info">
                <div className="product-header-meta d-flex align-items-center gap-3">
                  <span className="brand-name text-uppercase">BrandE</span>
                  <div className="rating-inline d-flex align-items-center">
                    <Rating
                      name="size-medium-5"
                      className="mt-0"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                    <span className="rating-value ms-1">4</span>
                  </div>
                  <span className="order-no">Order No: E005</span>
                </div>
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
              <div className="addToCartWrap">
                <Button
                  className="addToCartBtn"
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
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
              <span className="badge badge-primary">10%</span>
              <div className="actions">
                <Button>
                  <SlSizeFullscreen />
                </Button>
                <Button>
                  <IoMdHeartEmpty />
                </Button>
              </div>
              <div className="info">
                <div className="product-header-meta d-flex align-items-center gap-3">
                  <span className="brand-name text-uppercase">BrandF</span>
                  <div className="rating-inline d-flex align-items-center">
                    <Rating
                      name="size-medium-6"
                      className="mt-0"
                      defaultValue={4}
                      readOnly
                      size="small"
                    />
                    <span className="rating-value ms-1">4</span>
                  </div>
                  <span className="order-no">Order No: F006</span>
                </div>
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
              <div className="addToCartWrap">
                <Button
                  className="addToCartBtn"
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplayNoSlider;
