import React from "react";
import { useMemo, useState } from "react";

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
import ProductDisplay from "../../Components/ProductDisplay";

const ProductDetails = () => {
  const { id } = useParams();
  const productNo = `PN-${id ?? "0"}`;
  const productId = `ID-${id ?? "0"}`;

  // Placeholder product details (no backend wired in this repo yet)
  const product = {
    brand: "Aurora Fashion",
    badge: "28%",
    recommendedLabel: "Recommended",
    // Base prices by size (sm matches the current hardcoded values)
    stock: "IN STOCK",
    type: "Clothing",
    mfg: "May 20 2026",
    life: "6 months",
    category: "Clothing For Women",
    tags: ["summer", "style", "trendy"],
  };

  const sizeOptions = ["xs", "sm", "xl", "2xl", "3xl", "4xl", "5xl"];

  // Pricing rules:
  // sm uses the original values, other sizes follow a progressive increase.
  const priceBySize = {
    xs: { oldPrice: "$18.00", newPrice: "$13.00" },
    sm: { oldPrice: "$20.00", newPrice: "$14.00" },
    xl: { oldPrice: "$22.00", newPrice: "$16.00" },
    "2xl": { oldPrice: "$24.00", newPrice: "$17.50" },
    "3xl": { oldPrice: "$26.00", newPrice: "$19.00" },
    "4xl": { oldPrice: "$28.00", newPrice: "$21.00" },
    "5xl": { oldPrice: "$30.00", newPrice: "$22.50" },
  };

  const [selectedSize, setSelectedSize] = React.useState("sm");

  const { oldPrice, newPrice } = priceBySize[selectedSize];

  // --- Additional Details Tabs + Reviews state ---
  const [activeTab, setActiveTab] = useState("description");

  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    userName: "",
    comment: "",
    rating: 5,
  });
  const [formError, setFormError] = useState("");

  const handleSubmitReview = () => {
    const userName = reviewForm.userName.trim();
    const comment = reviewForm.comment.trim();
    const rating = Number(reviewForm.rating);

    if (!userName) {
      setFormError("User Name is required.");
      return;
    }
    if (!comment) {
      setFormError("Review Comment is required.");
      return;
    }
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      setFormError("Please select a valid rating.");
      return;
    }

    setFormError("");

    const now = new Date();
    const formatted = now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    setReviews((prev) => [
      ...prev,
      {
        userName,
        comment,
        rating,
        date: formatted,
      },
    ]);

    setReviewForm({ userName: "", comment: "", rating: 5 });
  };

  const ratingCounts = useMemo(() => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    for (const r of reviews) {
      const star = Number(r.rating);
      if (counts[star] !== undefined) counts[star] += 1;
    }
    return counts;
  }, [reviews]);

  const ratingPercent = useMemo(() => {
    const total = reviews.length;
    const pct = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    if (total === 0) return pct;

    for (const star of [5, 4, 3, 2, 1]) {
      pct[star] = Math.round((ratingCounts[star] / total) * 100);
    }
    return pct;
  }, [reviews.length, ratingCounts]);

  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + Number(r.rating || 0), 0);
    return sum / reviews.length;
  }, [reviews]);

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
              <div className="oldprice">{oldPrice}</div>
              <div className="newprice">{newPrice}</div>
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

            <div
              className="size-selector mt-2 mb-4"
              aria-label="Select dress size"
            >
              <div className="size-selector-label">Select Size</div>
              <div className="size-selector-buttons">
                {sizeOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

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

        <div
          className="Additional-Details-products"
          aria-label="Additional product details"
        >
          <div
            className="ad-details-tabs"
            role="tablist"
            aria-label="Product details tabs"
          >
            <button
              type="button"
              className={`ad-details-tab ${activeTab === "description" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "description"}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              type="button"
              className={`ad-details-tab ${activeTab === "additionalInfo" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "additionalInfo"}
              onClick={() => setActiveTab("additionalInfo")}
            >
              Additional Info
            </button>
            <button
              type="button"
              className={`ad-details-tab ${activeTab === "reviews" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className="ad-details-panels">
            <div
              className={`ad-details-panel ${activeTab === "description" ? "active" : ""}`}
              role="tabpanel"
              aria-hidden={activeTab !== "description"}
            >
              <p className="ad-details-description">
                <span>Premium quality cotton fabric.</span>
                <span>Comfortable fit for daily wear.</span>
                <span>Suitable for all seasons and occasions.</span>
              </p>
            </div>

            <div
              className={`ad-details-panel ${activeTab === "additionalInfo" ? "active" : ""}`}
              role="tabpanel"
              aria-hidden={activeTab !== "additionalInfo"}
            >
              <div
                className="additional-info-grid"
                role="table"
                aria-label="Additional product information"
              >
                <div className="info-item">
                  <div className="info-label">Product Name</div>
                  <div className="info-value">Aurora Classic Cotton Tee</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Brand Name</div>
                  <div className="info-value">Aurora Fashion</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Category</div>
                  <div className="info-value">Clothing For Women</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Clothing Size</div>
                  <div className="info-value">S, M, L, XL</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Material</div>
                  <div className="info-value">100% Cotton</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Color</div>
                  <div className="info-value">Rose Pink</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Stock Availability</div>
                  <div className="info-value stock">IN STOCK</div>
                </div>
                <div className="info-item">
                  <div className="info-label">SKU</div>
                  <div className="info-value">AFW-CT-0023</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Old Price</div>
                  <div className="info-value old">$24.00</div>
                </div>
                <div className="info-item">
                  <div className="info-label">New Price</div>
                  <div className="info-value new">$16.00</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Discount Percentage</div>
                  <div className="info-value discount">33% OFF</div>
                </div>
              </div>
            </div>

            <div
              className={`ad-details-panel ${activeTab === "reviews" ? "active" : ""}`}
              role="tabpanel"
              aria-hidden={activeTab !== "reviews"}
            >
              <div className="reviews-layout">
                <div className="reviews-left">
                  <div className="review-form card-soft">
                    <h3 className="review-form-title">Write a Review</h3>

                    <div className="review-form-grid">
                      <label className="field">
                        <span className="field-label">User Name</span>
                        <input
                          type="text"
                          value={reviewForm.userName}
                          onChange={(e) =>
                            setReviewForm((p) => ({
                              ...p,
                              userName: e.target.value,
                            }))
                          }
                          placeholder="Enter your name"
                        />
                      </label>

                      <label className="field">
                        <span className="field-label">Review Comment</span>
                        <textarea
                          value={reviewForm.comment}
                          onChange={(e) =>
                            setReviewForm((p) => ({
                              ...p,
                              comment: e.target.value,
                            }))
                          }
                          placeholder="Share your experience"
                          rows={4}
                        />
                      </label>

                      <div className="field">
                        <span className="field-label">Rating</span>
                        <div
                          className="rating-selector"
                          aria-label="Select star rating"
                        >
                          {[5, 4, 3, 2, 1].map((star) => {
                            const active = reviewForm.rating >= star;
                            return (
                              <button
                                key={star}
                                type="button"
                                className={`star-btn ${active ? "active" : ""}`}
                                onClick={() =>
                                  setReviewForm((p) => ({ ...p, rating: star }))
                                }
                                aria-label={`${star} star`}
                              >
                                ★
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {formError ? (
                      <div className="form-error">{formError}</div>
                    ) : null}

                    <button
                      type="button"
                      className="primary-btn"
                      onClick={handleSubmitReview}
                    >
                      Submit Review
                    </button>
                  </div>

                  <div className="reviews-cards" aria-label="Submitted reviews">
                    {reviews.length === 0 ? (
                      <div className="empty-state">
                        No reviews yet. Be the first to review.
                      </div>
                    ) : (
                      reviews
                        .slice()
                        .reverse()
                        .map((r, idx) => (
                          <div
                            className="review-card"
                            key={`${r.userName}-${r.date}-${idx}`}
                          >
                            <div className="review-avatar" aria-hidden="true">
                              {r.userName?.trim()?.[0]?.toUpperCase() || "?"}
                            </div>

                            <div className="review-body">
                              <div className="review-top">
                                <div className="review-user">
                                  <span className="review-user-name">
                                    {r.userName}
                                  </span>
                                  <span className="review-date">{r.date}</span>
                                </div>
                                <div
                                  className="review-stars"
                                  aria-label={`Rated ${r.rating} out of 5`}
                                >
                                  {Array.from({ length: 5 }).map((_, i) => {
                                    const starVal = i + 1;
                                    const on = starVal <= r.rating;
                                    return (
                                      <span
                                        key={starVal}
                                        className={on ? "on" : "off"}
                                      >
                                        ★
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>

                              <p className="review-comment">{r.comment}</p>
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>

                <div className="reviews-right">
                  <div className="reviews-summary card-soft">
                    <h3 className="reviews-summary-title">Customer Reviews</h3>

                    <div className="summary-main">
                      <div className="summary-rating">
                        <div className="summary-score">
                          {avgRating.toFixed(1)}
                        </div>
                        <div className="summary-out-of">out of 5</div>
                      </div>
                      <div className="summary-count">
                        {reviews.length} Total Reviews
                      </div>
                    </div>

                    <div
                      className="rating-breakdown"
                      aria-label="Rating breakdown"
                    >
                      {[5, 4, 3, 2, 1].map((star) => {
                        const pct = ratingPercent[star] || 0;
                        return (
                          <div className="breakdown-row" key={star}>
                            <div className="breakdown-label">{star}★</div>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-valuenow={pct}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <div className="breakdown-pct">{pct}%</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Related Products">
          <div className="d-flex align-items-center mt-5">
            <div className="info w-75">
              <h3 className="mb-0 hd">Related Products</h3>
              <p className="text-light text-sml mb-0">
                New Products are within the Stocks.
              </p>
            </div>
          </div>
          <ProductDisplay />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
