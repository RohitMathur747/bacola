import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUpload, FaStar } from "react-icons/fa";
import "../../App.css";

const CategoryOptions = [
  "Select Category",
  "Clothing",
  "Footwear",
  "Electronics",
  "Watches",
  "Bags",
  "Accessories",
  "Beauty",
  "Sports",
];

const BrandOptions = [
  "Select Brand",
  "Nike",
  "Adidas",
  "Puma",
  "Levi's",
  "Zara",
  "H&M",
  "Louis Philippe",
  "Allen Solly",
  "Other",
];

function StarsRating({ value, onChange }) {
  const [hover, setHover] = useState(null);
  const effectiveValue = hover ?? value ?? 0;

  const stars = useMemo(() => {
    return [1, 2, 3, 4, 5].map((n) => {
      const isSelected = n <= effectiveValue;
      return (
        <button
          key={n}
          type="button"
          className={`ProductUpload-Star ${
            isSelected ? "ProductUpload-Star--selected" : ""
          }`}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(null)}
          onClick={() => onChange(n)}
        >
          <FaStar size={20} />
        </button>
      );
    });
  }, [effectiveValue, onChange]);

  return <div className="ProductUpload-RatingStars">{stars}</div>;
}

export default function ProductsUpload() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Select Category",
    brand: "Select Brand",
    regularPrice: "",
    discount: "",
    ratings: 0,
    stock: "",
    isPublishing: false,
  });

  const onChange = (key) => (e) => {
    const v = e?.target?.value;
    setForm((prev) => ({ ...prev, [key]: v }));
  };

  const publishAndView = async (e) => {
    if (e) e.preventDefault();
    if (form.isPublishing) return;

    setForm((prev) => ({ ...prev, isPublishing: true }));

    // Ready for API integration (simulated loading state)
    await new Promise((r) => setTimeout(r, 1200));

    setForm((prev) => ({ ...prev, isPublishing: false }));
    navigate("/products/view");
  };

  return (
    <div className="ProductUpload-DashboardContentArea">
      {/* Section 1: Header */}
      <div className="row ProductUpload-HeaderRow">
        <div className="col-sm-12 ml-4" style={{ width: "1000px" }}>
          <div className="ProductUpload-HeaderTop">
            <h3 className="ProductUpload-Page-title">Product Upload</h3>

            <nav className="ProductUpload-Breadcrumb" aria-label="Breadcrumb">
              <span className="ProductUpload-BreadcrumbItem">
                <FaHome className="ProductUpload-BreadcrumbIcon" />
              </span>
              <span className="ProductUpload-BreadcrumbSep">/</span>
              <span className="ProductUpload-BreadcrumbItem">Dashboard</span>
              <span className="ProductUpload-BreadcrumbSep">/</span>
              <span className="ProductUpload-BreadcrumbItem">Products</span>
              <span className="ProductUpload-BreadcrumbSep">/</span>
              <span className="ProductUpload-BreadcrumbItem ProductUpload-BreadcrumbItem--active">
                Product Upload
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* Section 2: Form Card */}
      <div className="row mt-3">
        <div className="col-sm-12 ml-4">
          <div className="ProductUpload-Basic-Form ProductUpload-Card">
            <div className="ProductUpload-CardHeader">
              <h3 className="ProductUpload-CardTitle">Basic Information</h3>
            </div>

            <form className="ProductUpload-Form" onSubmit={publishAndView}>
              {/* Row 1: Title (full width) */}
              <div className="ProductUpload-FormGroup">
                <label className="ProductUpload-Label" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  className="ProductUpload-Input"
                  type="text"
                  placeholder="Enter Product Title"
                  value={form.title}
                  onChange={onChange("title")}
                />
              </div>

              {/* Row 2: Description (full width) */}
              <div className="ProductUpload-FormGroup">
                <label className="ProductUpload-Label" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  className="ProductUpload-Textarea"
                  placeholder="Enter Product Description"
                  rows={6}
                  value={form.description}
                  onChange={onChange("description")}
                />
              </div>

              {/* Row 3: Category + Brand */}
              <div className="row ProductUpload-GridRow">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="category">
                      Category
                    </label>
                    <select
                      id="category"
                      className="ProductUpload-Select"
                      value={form.category}
                      onChange={onChange("category")}
                    >
                      {CategoryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="brand">
                      Brand
                    </label>
                    <select
                      id="brand"
                      className="ProductUpload-Select"
                      value={form.brand}
                      onChange={onChange("brand")}
                    >
                      {BrandOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Regular Price + Discount */}
              <div className="row ProductUpload-GridRow">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label
                      className="ProductUpload-Label"
                      htmlFor="regularPrice"
                    >
                      Regular Price
                    </label>
                    <input
                      id="regularPrice"
                      className="ProductUpload-Input"
                      type="number"
                      placeholder="Enter Regular Price"
                      value={form.regularPrice}
                      onChange={onChange("regularPrice")}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="discount">
                      Discount (%)
                    </label>
                    <input
                      id="discount"
                      className="ProductUpload-Input"
                      type="number"
                      placeholder="Enter Discount Percentage"
                      value={form.discount}
                      onChange={onChange("discount")}
                    />
                  </div>
                </div>
              </div>

              {/* Row 5: Ratings + Stock */}
              <div className="row ProductUpload-GridRow">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="ratings">
                      Ratings
                    </label>
                    <input
                      id="ratings"
                      type="hidden"
                      value={form.ratings}
                      readOnly
                    />
                    <StarsRating
                      value={form.ratings}
                      onChange={(v) => setForm((p) => ({ ...p, ratings: v }))}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="stock">
                      Product Stock
                    </label>
                    <input
                      id="stock"
                      className="ProductUpload-Input"
                      type="number"
                      placeholder="Enter Available Stock"
                      value={form.stock}
                      onChange={onChange("stock")}
                    />
                  </div>
                </div>
              </div>

              {/* Row 6: Publish */}
              <div className="ProductUpload-FormGroup ProductUpload-SubmitWrap">
                <button
                  type="submit"
                  className="ProductUpload-PublishButton"
                  disabled={form.isPublishing}
                >
                  <span className="ProductUpload-PublishButtonIcon">
                    <FaUpload />
                  </span>
                  {form.isPublishing ? "Publishing..." : "Publish and View"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
