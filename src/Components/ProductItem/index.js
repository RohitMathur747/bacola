import React, { useState } from "react";
import Slider from "react-slick";
import product1 from "../../assets/images/banner2.jpg";
import product2 from "../../assets/images/banner3.jpg";
import product3 from "../../assets/images/banner4.jpg";
import product4 from "../../assets/images/banner5.jpg";
import product5 from "../../assets/images/banner6.jpg";
import product6 from "../../assets/images/banner7.jpg";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";

const products = [
  {
    id: 1,
    brand: "Aurora Fashion",
    title: "Clothing For Women",
    src: product1,
    images: [product1, product1, product1, product1],
    badge: "28%",
    status: "In Stock",
    rating: 5,
    orderNo: "ORD-1001",
    oldPrice: "$20.00",
    netPrice: "$14.00",
    category: "Women’s Apparel",
    tags: ["summer", "style", "trendy"],
    type: "Casual Wear",
    mfgDate: "2026-03-12",
    life: "30 days",
    description:
      "A stylish women’s clothing item with a comfortable fit and modern design.",
  },
  {
    id: 2,
    brand: "Titan Style",
    title: "Clothing For Men",
    src: product2,
    images: [product2, product2, product2, product2],
    badge: "20%",
    status: "In Stock",
    rating: 4,
    orderNo: "ORD-1002",
    oldPrice: "$20.00",
    netPrice: "$14.00",
    category: "Men’s Apparel",
    tags: ["formal", "classic", "new"],
    type: "Formal Wear",
    mfgDate: "2026-02-01",
    life: "30 days",
    description:
      "A premium men’s outfit designed for everyday comfort and sharp style.",
  },
  {
    id: 3,
    brand: "Kids Trend",
    title: "Clothing For Kids",
    src: product3,
    images: [product3, product3, product3, product3],
    badge: "15%",
    status: "Out of Stock",
    rating: 4,
    orderNo: "ORD-1003",
    oldPrice: "$20.00",
    netPrice: "$14.00",
    category: "Kids Apparel",
    tags: ["cute", "play", "comfortable"],
    type: "Everyday Wear",
    mfgDate: "2026-01-20",
    life: "30 days",
    description:
      "A cute and durable kids’ clothing pick that is soft and easy to wear.",
  },
  {
    id: 4,
    brand: "Signature Suits",
    title: "Suits For Men",
    src: product4,
    images: [product4, product4, product4, product4],
    badge: "15%",
    status: "In Stock",
    rating: 4,
    orderNo: "ORD-1004",
    oldPrice: "$250.00",
    netPrice: "$194.00",
    category: "Men’s Formal",
    tags: ["business", "elite", "premium"],
    type: "Formal Suit",
    mfgDate: "2026-01-05",
    life: "30 days",
    description:
      "A sophisticated men’s suit for formal occasions with a sharp finish.",
  },
  {
    id: 5,
    brand: "Elite Watches",
    title: "Rolex",
    src: product5,
    images: [product5, product5, product5, product5],
    badge: "5%",
    status: "In Stock",
    rating: 4,
    orderNo: "ORD-1005",
    oldPrice: "$95,000.00",
    netPrice: "$90,000.00",
    category: "Luxury Accessories",
    tags: ["premium", "luxury", "watch"],
    type: "Luxury Watch",
    mfgDate: "2025-12-11",
    life: "30 days",
    description: "A luxury timepiece with exceptional craftsmanship and style.",
  },
  {
    id: 6,
    brand: "Future Tech",
    title: "Iphone 17 Pro Max",
    src: product6,
    images: [product6, product6, product6, product6],
    badge: "10%",
    status: "In Stock",
    rating: 4,
    orderNo: "ORD-1006",
    oldPrice: "$1,420.00",
    netPrice: "$1,200.00",
    category: "Electronics",
    tags: ["smartphone", "premium", "latest"],
    type: "Mobile Phone",
    mfgDate: "2026-04-01",
    life: "30 days",
    description:
      "The latest premium smartphone with advanced features and sleek design.",
  },
];

const ProductItem = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
    setQuantity(1);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="product-row w-100">
        <Slider {...settings}>
          {products.map((product) => (
            <div className="item productItem" key={product.id}>
              <div className="imgWrapper">
                <img
                  src={product.src}
                  className="productImage px-1 mt-2"
                  alt={product.title}
                />
                <span className="badge badge-primary">{product.badge}</span>
                <div className="actions">
                  <Button onClick={() => handleOpen(product)}>
                    <SlSizeFullscreen />
                  </Button>
                  <Button>
                    <IoMdHeartEmpty />
                  </Button>
                </div>
                <div className="info">
                  <h4>{product.title}</h4>
                  <span className="text-success">{product.status}</span>
                  <br />
                  <Rating
                    name={`size-medium-${product.id}`}
                    className="mt-2"
                    defaultValue={product.rating}
                  />
                  <div className="d-flex">
                    <span className="oldPrice mt-2">{product.oldPrice}</span>
                    <span className="netPrice text-danger mt-2">
                      &nbsp; {product.netPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Dialog
        open={Boolean(selectedProduct)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "80vw",
            maxWidth: "80vw",
            height: "100vh",
            maxHeight: "100vh",
            m: 0,
            p: 0,
            borderRadius: 2,
            overflow: "hidden",
          },
        }}
      >
        {selectedProduct && (
          <div className="product-detail-modal h-100 d-flex flex-column">
            <div className="product-detail-header d-flex justify-content-between align-items-start px-4 py-3">
              <div>
                <h3 className="mb-0 product-title mr-4">
                  {selectedProduct.title}
                </h3>
                <div className="product-header-meta d-flex align-items-center gap-4 mb-1 mr-4">
                  <span className="brand-name text-uppercase mr-4">
                    {selectedProduct.brand}
                  </span>

                  <div className="rating-inline d-flex align-items-center mr-4">
                    <Rating
                      name={`header-rating-${selectedProduct.id}`}
                      value={selectedProduct.rating}
                      readOnly
                      size="small"
                    />
                    <span className="rating-value ms-2">
                      {selectedProduct.rating}
                    </span>
                  </div>

                  <span className="order-no">
                    Order No: {selectedProduct.orderNo}
                  </span>
                </div>
              </div>
              <Button onClick={handleClose} sx={{ minWidth: 0, p: 1 }}>
                <IoClose />
              </Button>
            </div>

            <div className="product-detail-content d-flex flex-column flex-lg-row h-100 overflow-hidden">
              <div
                className="detail-image-section"
                style={{ flex: "0 0 60%", padding: 24 }}
              >
                <div
                  className="detail-main-image rounded-4 overflow-hidden position-relative"
                  style={{
                    height: "65vh",
                    width: "100%",
                    background: "#f3f4f7",
                  }}
                >
                  <div className="detail-badges">
                    <span className="primary-badge">
                      {selectedProduct.badge}
                    </span>
                    <span className="recommended-badge">Recommended</span>
                  </div>

                  <img
                    src={
                      selectedProduct.images[selectedImageIndex] ||
                      selectedProduct.src
                    }
                    alt={selectedProduct.title}
                    className="detail-main-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="detail-thumbs d-flex gap-2 mt-3">
                  {selectedProduct.images.slice(0, 3).map((img, index) => (
                    <div
                      key={index}
                      className={`detail-thumb rounded-3 mr-5 overflow-hidden ${index === selectedImageIndex ? "active" : ""}`}
                      style={{
                        width: 60,
                        height: 60,
                        cursor: "pointer",
                        background: "#fff",
                        border:
                          index === selectedImageIndex
                            ? "2px solid #233a95"
                            : "1px solid rgba(0,0,0,0.06)",
                      }}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={img}
                        alt={`${selectedProduct.title} view ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="detail-info-section flex-grow-1 overflow-auto"
                style={{ flex: "0 0 40%", padding: 24 }}
              >
                <div className="price-row d-flex align-items-start justify-content-between flex-wrap gap-3 mb-3">
                  <div>
                    <div
                      className="oldPrice"
                      style={{
                        textDecoration: "line-through",
                        color: "rgba(0,0,0,0.45)",
                      }}
                    >
                      {selectedProduct.oldPrice}
                    </div>
                    <div
                      className="netPrice"
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#d32f2f",
                      }}
                    >
                      {selectedProduct.netPrice}
                    </div>
                    <div className="sku-review text-muted mt-2">
                      SKU: {selectedProduct.orderNo} &nbsp; | &nbsp;{" "}
                      {selectedProduct.rating} reviews
                    </div>
                  </div>
                  <div className="stock-status">
                    <span
                      className={
                        selectedProduct.status === "In Stock"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {selectedProduct.status}
                    </span>
                  </div>
                </div>

                <p className="text-muted mb-3">{selectedProduct.description}</p>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="qty-controls d-flex align-items-center">
                    <button
                      className="qty-btn"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    >
                      -
                    </button>
                    <div className="qty-display">{quantity}</div>
                    <button
                      className="qty-btn"
                      onClick={() => setQuantity((q) => q + 1)}
                    >
                      +
                    </button>
                  </div>

                  <Button
                    className="add-to-cart-large"
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "40px", padding: "10px 30px" }}
                  >
                    Add to cart
                  </Button>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <Button
                    variant="outlined"
                    style={{ color: "#000" }}
                    startIcon={<IoMdHeartEmpty />}
                  >
                    Add to wishlist
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ color: "#000" }}
                    startIcon={<MdCompareArrows />}
                  >
                    Compare
                  </Button>
                </div>

                <div className="detail-specs mb-4">
                  <div className="spec-row d-flex align-items-center gap-2 mb-2">
                    <div className="spec-icon bg-success rounded-circle"></div>
                    <span>Type: {selectedProduct.type}</span>
                  </div>
                  <div className="spec-row d-flex align-items-center gap-2 mb-2">
                    <div className="spec-icon bg-success rounded-circle"></div>
                    <span>Mfg Date: {selectedProduct.mfgDate}</span>
                  </div>
                  <div className="spec-row d-flex align-items-center gap-2">
                    <div className="spec-icon bg-success rounded-circle"></div>
                    <span>Life of product: {selectedProduct.life}</span>
                  </div>
                </div>

                <div
                  className="detail-divider mb-4"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}
                />

                <div className="detail-category-tags">
                  <p className="mb-2">
                    <strong>Category:</strong> {selectedProduct.category}
                  </p>
                  <p className="mb-0">
                    <strong>Tags:</strong> {selectedProduct.tags.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
};

export default ProductItem;
