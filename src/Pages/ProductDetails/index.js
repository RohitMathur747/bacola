import React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GiHoneyJar } from "react-icons/gi";
import Quantity from "../../Components/Quantity";

const ProductDetails = () => {
  const { id } = useParams();
  const productNo = `PN-${id ?? "0"}`;
  const productId = `ID-${id ?? "0"}`;

  // Placeholder product details (no backend wired in this repo yet)
  const product = {
    brand: "Aurora Fashion",
    badge: "28%",
    recommendedLabel: "Recommended",
    oldPrice: "$20.00",
    newPrice: "$14.00",
    stock: "IN STOCK",
    type: "Clothing",
    mfg: "May 20 2026",
    life: "6 months",
    category: "Clothing For Women",
    tags: ["summer", "style", "trendy"],
  };

  return (
    <section className="productDetails section">
      <div className="container">
        <h2 className="hd text-captialise">Clothing For Women</h2>

        <div
          className="product-meta-row mt-3"
          aria-label="Product details meta"
        >
          {/* Top meta segments */}
          <div className="product-meta-segment">
            <span className="product-meta-label">Brand</span>
            <span className="product-meta-value">{product.brand}</span>
          </div>

          <div className="product-meta-divider" />

          <div className="product-meta-segment product-meta-rating">
            <span className="product-meta-value">
              <span className="stars">★★★★★</span>
            </span>
            <span className="product-meta-review">5 review</span>
          </div>

          <div className="product-meta-divider" />

          <div className="product-meta-segment">
            <span className="product-meta-label">Product No:</span>
            <span className="product-meta-value">{productNo}</span>
          </div>

          <div className="product-meta-segment">
            <span className="product-meta-label">Product Id:</span>
            <span className="product-meta-value">{productId}</span>
          </div>
        </div>

        {/* 3 column layout */}
        <div className="product-detail-layout mt-4">
          <div className="image-content">
            <div className="image-main-wrapper">
              <div className="image-badges">
                <span className="discount-badge">{product.badge}</span>
                <span className="recommended-badge">
                  {product.recommendedLabel}
                </span>
              </div>

              <div className="image-zoom-outer" aria-label="Product main image">
                <div className="image-zoom-inner" />
              </div>
            </div>

            <div className="image-thumbs" aria-label="Product thumbnails">
              {[0, 1, 2].map((i) => (
                <div className="thumb" key={i}>
                  <div className="thumb-inner" />
                </div>
              ))}
            </div>
          </div>

          <div className="details-content">
            <div className="prices">
              <div className="oldprice">{product.oldPrice}</div>
              <div className="newprice">{product.newPrice}</div>
            </div>

            <div className="stock-status mt-2 mb-4">
              <span className="stock-text text-success mb-4">
                {product.stock}
              </span>
            </div>

            <p className="product-description mt-4 mb-4">
              A stylish women’s clothing item with a comfortable fit and modern
              design.
            </p>

            <Quantity />

            <div className="action-buttons">
              <Button
                className="action-btn"
                variant="outlined"
                startIcon={<IoMdHeartEmpty />}
              >
                Add to wishlist
              </Button>
              <Button
                className="action-btn"
                variant="outlined"
                startIcon={<MdCompareArrows />}
              >
                Compare
              </Button>
            </div>

            <div className="spec-lines mt-4 mb-5">
              <div className="spec-line">
                <span className="spec-label">Type:</span>
                <span className="spec-value">{product.type}</span>
              </div>
              <div className="spec-line">
                <span className="spec-label">MFG:</span>
                <span className="spec-value">{product.mfg}</span>
              </div>
              <div className="spec-line">
                <span className="spec-label">LIFE:</span>
                <span className="spec-value">{product.life}</span>
              </div>
            </div>

            <div className="details-divider mt-4 mb-4" />

            <div className="category-tags mt-4 mb-5">
              <div className="category-line">
                <span className="spec-label">Category:</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="tags-line">
                <span className="spec-label">Tags:</span>
                <span className="spec-value">{product.tags.join(", ")}</span>
              </div>
            </div>

            <div className="social-icons mt-5" aria-label="Social media icons">
              <a className="social-icon" href="#" aria-label="facebook">
                <FaFacebookF />
              </a>
              <a className="social-icon" href="#" aria-label="twitter">
                <FaTwitter />
              </a>
              <a className="social-icon" href="#" aria-label="pinterset">
                <FaPinterestP />
              </a>
              <a className="social-icon" href="#" aria-label="inlinkedin">
                <FaLinkedinIn />
              </a>
              <a className="social-icon" href="#" aria-label="whatsapp">
                <FaWhatsapp />
              </a>
              <a className="social-icon" href="#" aria-label="instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="deivery-details">
            <p className="delivery-title">Covid-19 Info we keep delivering</p>

            <div className="delivery-row">
              <span className="delivery-icon">
                <TbTruckDelivery />
              </span>
              <p>
                <strong>Free Shipping</strong> Apply to all orders over Rs 500
              </p>
            </div>

            <div className="delivery-row">
              <span className="delivery-icon">
                <GiHoneyJar />
              </span>
              <p>
                <strong>Guarteed</strong> 100% Guarteed Clthing Brand
              </p>
            </div>

            <div className="delivery-row">
              <span className="delivery-icon">
                <FaCircleDollarToSlot />
              </span>
              <p>
                <strong>$</strong> 1 Day Returns if any change in your mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
