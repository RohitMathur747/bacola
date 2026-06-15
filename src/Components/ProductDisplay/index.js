import React, { useMemo, useState } from "react";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";

import Pagination from "../ProductPagination";
import Products from "../Products";
import useCart from "../../hooks/useCart";

const ProductDisplayNoSlider = ({
  viewCount = 3,
  page = 1,
  itemsPerPage = 6,
  onPageChange,
}) => {
  const { addToCart } = useCart();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(Products.length / Math.max(1, itemsPerPage)),
  );

  const currentPage = Math.min(Math.max(1, page), totalPages);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return Products.slice(start, end);
  }, [currentPage, itemsPerPage]);

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
      <div
        className={`product-display-grid viewCount-${viewCount}`}
        style={{ gridTemplateColumns: `repeat(${viewCount}, minmax(0, 1fr))` }}
      >
        <div
          className="product-row w-100"
          style={{
            gridTemplateColumns: `repeat(${viewCount}, minmax(0, 1fr))`,
          }}
        >
          {currentProducts.map((product) => (
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
                  <div className="product-header-meta d-flex align-items-center gap-3">
                    <span className="brand-name text-uppercase">
                      {product.brand}
                    </span>
                    <div className="rating-inline d-flex align-items-center">
                      <Rating
                        name={`size-medium-${product.id}`}
                        className="mt-0"
                        defaultValue={product.rating}
                        readOnly
                        size="small"
                      />
                      <span className="rating-value ms-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h4>{product.title}</h4>
                  <span
                    className={
                      product.status === "In Stock"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {product.status}
                  </span>

                  <div className="d-flex">
                    <span className="oldPrice mt-2">{product.oldPrice}</span>
                    <span className="netPrice text-danger mt-2">
                      &nbsp; {product.netPrice}
                    </span>
                  </div>
                </div>

                <div className="addToCartWrap">
                  <Button
                    className="addToCartBtn"
                    variant="contained"
                    color="primary"
                    onClick={() => addToCart(product, 1)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={(p) => onPageChange?.(p)}
          />
        </div>
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
                      selectedProduct.images?.[selectedImageIndex] ||
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
                  {(selectedProduct.images || [])
                    .slice(0, 3)
                    .map((img, index) => (
                      <div
                        key={index}
                        className={`detail-thumb rounded-3 mr-5 overflow-hidden ${
                          index === selectedImageIndex ? "active" : ""
                        }`}
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
                      style={{
                        textDecoration: "line-through",
                        color: "rgba(0,0,0,0.45)",
                      }}
                      className="oldPrice"
                    >
                      {selectedProduct.oldPrice}
                    </div>
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#d32f2f",
                      }}
                      className="netPrice"
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
                    onClick={() => addToCart(selectedProduct, quantity)}
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
                    <div className="spec-icon bg-success rounded-circle" />
                    <span>Type: {selectedProduct.type}</span>
                  </div>
                  <div className="spec-row d-flex align-items-center gap-2 mb-2">
                    <div className="spec-icon bg-success rounded-circle" />
                    <span>Mfg Date: {selectedProduct.mfgDate}</span>
                  </div>
                  <div className="spec-row d-flex align-items-center gap-2">
                    <div className="spec-icon bg-success rounded-circle" />
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
                    <strong>Tags:</strong>{" "}
                    {(selectedProduct.tags || []).join(", ")}
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

export default ProductDisplayNoSlider;
