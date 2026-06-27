import React, { useEffect, useMemo, useState } from "react";
import {
  FaChevronRight,
  FaHome,
  FaRegStar,
  FaReply,
  FaStar,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "../../App.css";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function StarRating({ rating, outOf = 5, size = 15 }) {
  const safe = Number.isFinite(rating) ? rating : 0;
  const filledCount = clamp(Math.round(safe), 0, outOf);

  return (
    <div className="star-rating" aria-label={`Rating: ${safe} out of ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => {
        const isFilled = i < filledCount;
        return isFilled ? (
          <FaStar key={i} size={size} />
        ) : (
          <FaRegStar key={i} size={size} />
        );
      })}
    </div>
  );
}

function makeReviews(seed = 1) {
  const base = [
    {
      id: `R-${seed}-1`,
      customerName: "Aarav Mehta",
      customerAvatar:
        "https://t4.ftcdn.net/jpg/00/57/87/67/360_F_57876767_3XqG5d8y5wZ8r4Qwz8aY5v3n7K8gHjQw.jpg",
      date: "2026-04-12 10:30",
      rating: 5,
      comment:
        "Excellent quality and fits perfectly. The stitching is top-notch.",
      adminReply: "",
    },
    {
      id: `R-${seed}-2`,
      customerName: "Sara Khan",
      customerAvatar:
        "https://t4.ftcdn.net/jpg/00/57/87/67/360_F_57876767_3XqG5d8y5wZ8r4Qwz8aY5v3n7K8gHjQw.jpg",
      date: "2026-03-28 18:15",
      rating: 4,
      comment: "Really good purchase. Comfortable and looks great.",
      adminReply: "",
    },
    {
      id: `R-${seed}-3`,
      customerName: "Rohit Sharma",
      customerAvatar:
        "https://t4.ftcdn.net/jpg/00/57/87/67/360_F_57876767_3XqG5d8y5wZ8r4Qwz8aY5v3n7K8gHjQw.jpg",
      date: "2026-03-05 09:45",
      rating: 3,
      comment: "Decent product for the price. Could be a bit better finishing.",
      adminReply: "",
    },
  ];

  return base;
}

const dummyProducts = [
  {
    id: "SP-1001",
    name: "Premium Cotton Shirt",
    brand: "Richman",
    category: "Men Clothing",
    tags: ["Cotton", "Formal", "Breathable"],
    color: "Sky Blue",
    size: "M / L / XL",
    oldPrice: "₹2,499",
    newPrice: "₹1,999",
    stock: 30,
    images: [
      "https://www.dilem-reunion.re/8104-home_default/premium-cotton-shirt.jpg",
      "https://www.dilem-reunion.re/8104-home_default/premium-cotton-shirt.jpg",
      "https://www.dilem-reunion.re/8104-home_default/premium-cotton-shirt.jpg",
      "https://www.dilem-reunion.re/8104-home_default/premium-cotton-shirt.jpg",
    ],
    description:
      "Richman premium cotton shirt with a soft feel and a tailored fit.",
    rating: 4.9,
    ratingCount: 16,
    reviews: makeReviews(1),
    reviewAnalytics: {
      averageRating: 4.9,
      totalReviews: 38,
      breakdown: {
        5: 27,
        4: 7,
        3: 3,
        2: 1,
        1: 0,
      },
    },
    orders: 380,
    sales: "₹38 L",
  },
  {
    id: "SP-1002",
    name: "Women Floral Dress",
    brand: "Zara",
    category: "Women Clothing",
    tags: ["Floral", "Casual", "Lightweight"],
    color: "Rose Pink",
    size: "S / M / L",
    oldPrice: "₹3,999",
    newPrice: "₹2,999",
    stock: 0,
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.JmlV9U2dxPOc15EEqChL4AHaK-?pid=Api&h=220&P=0",
      "https://tse2.mm.bing.net/th/id/OIP.JmlV9U2dxPOc15EEqChL4AHaK-?pid=Api&h=220&P=0",
      "https://tse4.mm.bing.net/th/id/OIP.JmlV9U2dxPOc15EEqChL4AHaK-?pid=Api&h=220&P=0",
      "https://tse1.mm.bing.net/th/id/OIP.JmlV9U2dxPOc15EEqChL4AHaK-?pid=Api&h=220&P=0",
    ],
    description:
      "Light & breathable floral dress perfect for brunches and outings.",
    rating: 4.8,
    ratingCount: 22,
    reviews: makeReviews(2),
    reviewAnalytics: {
      averageRating: 4.8,
      totalReviews: 31,
      breakdown: {
        5: 22,
        4: 6,
        3: 2,
        2: 1,
        1: 0,
      },
    },
    orders: 250,
    sales: "₹25 L",
  },
  {
    id: "SP-1003",
    name: "Denim Jacket",
    brand: "Levis",
    category: "Men Clothing",
    tags: ["Denim", "Classic", "Rugged"],
    color: "Mid Wash",
    size: "M / L",
    oldPrice: "₹4,999",
    newPrice: "₹3,799",
    stock: 45,
    images: [
      "https://cdna.lystit.com/photos/nordstrom/beddc379/wrangler-Mid-Wash-Heritage-Pleated-Denim-Jacket.jpeg",
      "https://cdna.lystit.com/photos/nordstrom/beddc379/wrangler-Mid-Wash-Heritage-Pleated-Denim-Jacket.jpeg",
      "https://cdna.lystit.com/photos/nordstrom/beddc379/wrangler-Mid-Wash-Heritage-Pleated-Denim-Jacket.jpeg",
      "https://cdna.lystit.com/photos/nordstrom/beddc379/wrangler-Mid-Wash-Heritage-Pleated-Denim-Jacket.jpeg",
    ],
    description:
      "Classic fit denim jacket with durable fabric and timeless style.",
    rating: 4.7,
    ratingCount: 18,
    reviews: makeReviews(3),
    reviewAnalytics: {
      averageRating: 4.7,
      totalReviews: 42,
      breakdown: {
        5: 25,
        4: 10,
        3: 5,
        2: 1,
        1: 1,
      },
    },
    orders: 420,
    sales: "₹42 L",
  },
  {
    id: "SP-1004",
    name: "Winter Hoodie",
    brand: "H&M",
    category: "Men Clothing",
    tags: ["Hoodie", "Warm", "Fleece"],
    color: "Charcoal",
    size: "S / M / L / XL",
    oldPrice: "₹2,899",
    newPrice: "₹2,199",
    stock: 70,
    images: [
      "https://5.imimg.com/data5/PE/ZV/HA/SELLER-69029071/winter-hoodies-1000x1000.jpg",
      "https://5.imimg.com/data5/PE/ZV/HA/SELLER-69029071/winter-hoodies-1000x1000.jpg",
      "https://5.imimg.com/data5/PE/ZV/HA/SELLER-69029071/winter-hoodies-1000x1000.jpg",
      "https://5.imimg.com/data5/PE/ZV/HA/SELLER-69029071/winter-hoodies-1000x1000.jpg",
    ],
    description: "Warm fleece hoodie that stays cozy all winter long.",
    rating: 4.6,
    ratingCount: 15,
    reviews: makeReviews(4),
    reviewAnalytics: {
      averageRating: 4.6,
      totalReviews: 28,
      breakdown: {
        5: 16,
        4: 8,
        3: 3,
        2: 1,
        1: 0,
      },
    },
    orders: 310,
    sales: "₹31 L",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [replyOpen, setReplyOpen] = useState({});
  const [replyText, setReplyText] = useState({});
  const [replies, setReplies] = useState({});

  const matched = useMemo(() => {
    if (!id) return null;
    return dummyProducts.find((p) => String(p.id) === String(id)) || null;
  }, [id]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setProduct(matched);
      setSelectedImageIndex(0);
      setReplyOpen({});
      setReplyText({});
      setReplies({});
      setLoading(false);
    }, 450);

    return () => clearTimeout(t);
  }, [matched]);

  const activeMainImage =
    product?.images?.[selectedImageIndex] || product?.images?.[0];

  const analytics = product?.reviewAnalytics;
  const breakdown = analytics?.breakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  const total = analytics?.totalReviews || 0;

  const stockIsIn = (product?.stock || 0) > 0;

  if (loading) {
    return (
      <div className="ecom-page">
        <div className="product-details-loading">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="ecom-page">
        <div className="product-details-loading">
          <h3 style={{ fontWeight: 900, color: "rgba(220,38,38,.95)" }}>
            Product Not Found
          </h3>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: 12 }}
            onClick={() => navigate("/products/list")}
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ecom-page">
      <div className="title-productview">
        <div className="title-productview-left">
          <h3>Product View</h3>
        </div>

        <div
          className="title-productview-right ecom-breadcrumbs"
          aria-label="Breadcrumb"
        >
          <span className="ecom-breadcrumb">Home</span>
          <span className="ecom-breadcrumbSep">→</span>
          <span className="ecom-breadcrumb">Products</span>
          <span className="ecom-breadcrumbSep">→</span>
          <span className="ecom-breadcrumb ecom-breadcrumb--active">
            Product View
          </span>
        </div>
      </div>

      <div className="Product-gallery">
        {/* Gallery */}
        <div className="product-gallery-photo">
          <div className="product-gallery-photo__main">
            <img
              className="product-gallery-photo-img"
              src={activeMainImage}
              alt={product.name}
            />
          </div>

          <div
            className="product-gallery-thumbnails mt-5 mb-5"
            aria-label="Product thumbnails"
          >
            {product.images.slice(0, 4).map((img, idx) => {
              const isActive = idx === selectedImageIndex;
              return (
                <button
                  key={img + idx}
                  type="button"
                  className={
                    "product-gallery-thumbnail" +
                    (isActive ? " product-gallery-thumbnail--active" : "")
                  }
                  onClick={() => setSelectedImageIndex(idx)}
                  aria-pressed={isActive}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Details */}
        <div className="product-gallery-details">
          <div className="product-gallery-details__inner">
            <div className="product-gallery-details__titleBlock">
              <div className="product-gallery-details__name mt-4">
                {product.name}
              </div>
              <div className="product-gallery-details__descriptionShort mt-4 mb-4">
                {product.description}
              </div>

              <div className="product-gallery-details__metaRow">
                <div className="product-gallery-details__metaItem">
                  <div className="product-gallery-details__metaLabel mt-4">
                    Category
                  </div>
                  <div className="product-gallery-details__metaValue mt-4">
                    {product.category}
                  </div>
                </div>
                <div className="product-gallery-details__metaItem">
                  <div className="product-gallery-details__metaLabel mt-4">
                    Brand
                  </div>
                  <div className="product-gallery-details__metaValue mt-4">
                    {product.brand}
                  </div>
                </div>
              </div>

              <div className="product-gallery-details__tagsRow">
                <div className="product-gallery-details__metaLabel mt-4">
                  Tags
                </div>
                <div className="product-gallery-details__tags mt-4">
                  {product.tags?.map((t) => (
                    <span key={t} className="product-gallery-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="product-gallery-details__metaRow product-gallery-details__metaRow--grid">
                <div className="product-gallery-details__metaItem">
                  <div className="product-gallery-details__metaLabel mt-4">
                    Color
                  </div>
                  <div className="product-gallery-details__metaValue mt-4">
                    {product.color}
                  </div>
                </div>
                <div className="product-gallery-details__metaItem">
                  <div className="product-gallery-details__metaLabel mt-4">
                    Size
                  </div>
                  <div className="product-gallery-details__metaValue mt-4">
                    {product.size}
                  </div>
                </div>
              </div>

              <div className="product-gallery-priceRow">
                <div className="product-gallery-priceOld mt-4">
                  {product.oldPrice}
                </div>
                <div className="product-gallery-priceNew mt-4">
                  {product.newPrice}
                </div>
              </div>

              <div className="product-gallery-stockAndRating mt-4 mb-4">
                <div
                  className={
                    "stock-badge " +
                    (stockIsIn ? "stock-badge--green" : "stock-badge--red")
                  }
                >
                  {stockIsIn ? "In Stock" : "Out of Stock"}
                </div>

                <div className="product-gallery-ratingMeta">
                  <StarRating rating={product.rating} />
                  <div className="product-gallery-ratingCount">
                    {product.rating.toFixed(1)} • {product.ratingCount} ratings
                  </div>
                </div>
              </div>

              <div className="product-gallery-kpisRow">
                <div className="product-gallery-kpi">
                  <div className="product-gallery-kpiLabel">Price</div>
                  <div className="product-gallery-kpiValue">
                    {product.newPrice}
                  </div>
                </div>
                <div className="product-gallery-kpi">
                  <div className="product-gallery-kpiLabel">Stock</div>
                  <div className="product-gallery-kpiValue">
                    {product.stock}
                  </div>
                </div>
                <div className="product-gallery-kpi">
                  <div className="product-gallery-kpiLabel">Total Orders</div>
                  <div className="product-gallery-kpiValue">
                    {product.orders}
                  </div>
                </div>
              </div>
            </div>

            <div className="product-gallery-description mt-4 mb-4">
              <div className="product-gallery-description__heading">
                Product Description
              </div>
              <div className="product-gallery-description__text">
                {product.description}
              </div>
            </div>

            <div className="product-gallery-rating-analystics">
              <div className="rating-all-star">
                <div className="rating-histHeader">Rating Analytics</div>
                {[5, 4, 3, 2, 1].map((star) => {
                  const count = breakdown[star] || 0;
                  const pct = total > 0 ? (count / total) * 100 : 0;
                  return (
                    <div key={star} className="rating-progressRow">
                      <div className="rating-progressRow__label">
                        {star} Star
                      </div>
                      <div className="rating-progressRow__barWrap">
                        <div className="rating-progressRow__bar">
                          <div
                            className="rating-progressRow__barFill"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                      <div className="rating-progressRow__count">{count}</div>
                    </div>
                  );
                })}
              </div>

              <div className="rating-Total-review">
                <div className="rating-totalHeader">Total Reviews</div>
                <div className="rating-totalValue">
                  {analytics?.averageRating?.toFixed(1) ||
                    product.rating.toFixed(1)}
                </div>
                <StarRating
                  rating={analytics?.averageRating || product.rating}
                  size={22}
                />
                <div className="rating-totalCount">
                  {analytics?.totalReviews || 0} Reviews From Customers
                </div>
              </div>
            </div>

            <div className="product-gallery-customer-reviews">
              <div className="product-gallery-customer-reviews__heading">
                Customer Reviews
              </div>

              <div className="product-gallery-reviewsList">
                {product.reviews?.map((r) => {
                  const open = !!replyOpen[r.id];
                  const text = replyText[r.id] || "";
                  const savedReply = replies[r.id] ?? r.adminReply ?? "";

                  return (
                    <div key={r.id} className="review-card">
                      <div className="review-card__avatar">
                        <img src={r.customerAvatar} alt={r.customerName} />
                      </div>

                      <div className="review-card__center">
                        <div className="review-card__nameRow">
                          <div className="review-card__name">
                            {r.customerName}
                          </div>
                          <div className="review-card__date">{r.date}</div>
                        </div>
                        <div className="review-card__stars">
                          <StarRating rating={r.rating} size={16} />
                        </div>
                        <div className="review-card__comment">{r.comment}</div>

                        {savedReply ? (
                          <div className="review-adminReply">
                            <div className="review-adminReply__label">
                              Admin Reply
                            </div>
                            <div className="review-adminReply__text">
                              {savedReply}
                            </div>
                          </div>
                        ) : null}

                        {open ? (
                          <div className="review-replyComposer">
                            <textarea
                              className="review-replyTextarea"
                              rows={3}
                              value={text}
                              placeholder="Write an admin reply..."
                              onChange={(e) =>
                                setReplyText((prev) => ({
                                  ...prev,
                                  [r.id]: e.target.value,
                                }))
                              }
                            />
                            <button
                              type="button"
                              className="review-replySendBtn"
                              onClick={() => {
                                const next = (replyText[r.id] || "").trim();
                                if (!next) return;
                                setReplies((prev) => ({
                                  ...prev,
                                  [r.id]: next,
                                }));
                                setReplyText((prev) => ({
                                  ...prev,
                                  [r.id]: "",
                                }));
                                setReplyOpen((prev) => ({
                                  ...prev,
                                  [r.id]: false,
                                }));
                              }}
                            >
                              <span className="review-replySendBtn__icon">
                                <FaChevronRight />
                              </span>
                              Send Reply
                            </button>
                          </div>
                        ) : null}
                      </div>

                      <div className="review-card__right">
                        <button
                          type="button"
                          className="review-replyBtn"
                          onClick={() =>
                            setReplyOpen((prev) => ({
                              ...prev,
                              [r.id]: !prev[r.id],
                            }))
                          }
                        >
                          <FaReply />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
