import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUpload, FaStar, FaTrash } from "react-icons/fa";
import "../../App.css";

const CategoryOptions = [
  "Electronics",
  "Fashion",
  "Grocery",
  "Home & Kitchen",
  "Beauty",
  "Sports",
];

const SubCategoryByCategory = {
  Electronics: ["Mobile", "Laptops", "Televisions", "Accessories"],
  Fashion: ["Men", "Women", "Footwear", "Bags"],
  Grocery: ["Fruits", "Vegetables", "Dairy", "Snacks"],
  "Home & Kitchen": ["Kitchen Appliances", "Home Decor", "Furniture"],
  Beauty: ["Skincare", "Haircare", "Makeup"],
  Sports: ["Fitness", "Cricket", "Football", "Cycling"],
};

const BrandByCategory = {
  Electronics: ["Apple", "Samsung", "Xiaomi", "OnePlus"],
  Fashion: ["Nike", "Adidas", "Puma", "Zara"],
  Grocery: ["Natureland", "Dabur", "Haldiram", "Amul"],
  "Home & Kitchen": ["Prestige", "Havells", "Philips", "Lifelong"],
  Beauty: ["Dove", "Nivea", "Lakme", "Mamaearth"],
  Sports: ["Wilson", "Babolat", "ASICS", "Decathlon"],
};

const BrandFallback = ["Other"];

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

const RAM_OPTIONS = ["4GB", "6GB", "8GB", "12GB", "16GB", "32GB", "64GB"];
const STORAGE_OPTIONS = ["64GB", "128GB", "256GB", "512GB", "1TB"];

const IMAGE_ACCEPT = ["image/jpeg", "image/png", "image/webp"];

export default function ProductsUpload() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",

    category: "",
    subCategory: "",
    brand: "",

    regularPrice: "",
    salePrice: "",
    discountPercent: "",

    ram: [],
    storage: [],
    stock: "",

    ratings: 0,
    isFeatured: "No",
    productStatus: "Draft",

    images: [],

    isPublishing: false,
    isPreviewing: false,
    isSavingDraft: false,
  });

  const selectedCategory = form.category;

  const subCategories = selectedCategory
    ? (SubCategoryByCategory[selectedCategory] ?? [])
    : [];

  const brands = selectedCategory
    ? (BrandByCategory[selectedCategory] ?? BrandFallback)
    : BrandFallback;

  const onChange = (key) => (e) => {
    const v = e?.target?.value;
    setForm((prev) => ({ ...prev, [key]: v }));
  };

  const recalcDiscount = (next) => {
    const rp = Number(next.regularPrice);
    const sp = Number(next.salePrice);

    if (!Number.isFinite(rp) || rp <= 0) {
      return { ...next, discountPercent: "" };
    }
    if (!Number.isFinite(sp)) {
      return { ...next, discountPercent: "" };
    }

    const raw = ((rp - sp) / rp) * 100;
    const rounded = Math.round(raw * 100) / 100;
    return { ...next, discountPercent: String(rounded) };
  };

  const onCategoryChange = (e) => {
    const category = e?.target?.value ?? "";
    setForm((prev) => {
      const next = {
        ...prev,
        category,
        subCategory: "",
        brand: "",
      };
      return next;
    });
  };

  const onRegularPriceChange = (e) => {
    const regularPrice = e?.target?.value ?? "";
    setForm((prev) => recalcDiscount({ ...prev, regularPrice }));
  };

  const onSalePriceChange = (e) => {
    const salePrice = e?.target?.value ?? "";
    setForm((prev) => recalcDiscount({ ...prev, salePrice }));
  };

  const toggleMulti = (key, value) => {
    setForm((prev) => {
      const list = prev[key] ?? [];
      const exists = list.includes(value);
      const nextList = exists
        ? list.filter((x) => x !== value)
        : [...list, value];
      return { ...prev, [key]: nextList };
    });
  };

  const removeImageAt = (idx) => {
    setForm((prev) => {
      const next = [...prev.images];
      const item = next[idx];
      if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
      next.splice(idx, 1);
      return { ...prev, images: next };
    });
  };

  const addFiles = (fileList) => {
    const files = Array.from(fileList ?? []);
    if (!files.length) return;

    const accepted = files.filter((f) => IMAGE_ACCEPT.includes(f.type));
    const mapped = accepted.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
      name: file.name,
    }));

    setForm((prev) => ({ ...prev, images: [...prev.images, ...mapped] }));
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addFiles(e.dataTransfer?.files);
  };

  const publishAPI = async ({ mode }) => {
    // Simulated loading; ready for integration.
    if (mode === "publish") {
      setForm((prev) => ({ ...prev, isPublishing: true }));
      await new Promise((r) => setTimeout(r, 1200));
      setForm((prev) => ({ ...prev, isPublishing: false }));
      navigate("/products/view");
      return;
    }

    if (mode === "draft") {
      setForm((prev) => ({ ...prev, isSavingDraft: true }));
      await new Promise((r) => setTimeout(r, 900));
      setForm((prev) => ({ ...prev, isSavingDraft: false }));
      return;
    }

    if (mode === "preview") {
      setForm((prev) => ({ ...prev, isPreviewing: true }));
      await new Promise((r) => setTimeout(r, 900));
      setForm((prev) => ({ ...prev, isPreviewing: false }));
      return;
    }
  };

  const onSubmit = async (e) => {
    // Default behavior: publish.
    if (e) e.preventDefault();
    if (form.isPublishing) return;
    await publishAPI({ mode: "publish" });
  };

  // Compatibility with older JSX that referenced publishAndView (kept harmless)
  const publishAndView = onSubmit;

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
                  Product Name
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
                  rows={9}
                  value={form.description}
                  onChange={onChange("description")}
                />
              </div>

              {/* Row 3: Category / Sub Category / Brand */}
              <div className="row ProductUpload-GridRow">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="category">
                      Category
                    </label>
                    <select
                      id="category"
                      className="ProductUpload-Select"
                      value={form.category}
                      onChange={onCategoryChange}
                    >
                      <option value="">Select Category</option>
                      {CategoryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label
                      className="ProductUpload-Label"
                      htmlFor="subCategory"
                    >
                      Sub Category
                    </label>
                    <select
                      id="subCategory"
                      className="ProductUpload-Select"
                      value={form.subCategory}
                      onChange={onChange("subCategory")}
                      disabled={!form.category}
                    >
                      <option value="">Select Sub Category</option>
                      {subCategories.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="brand">
                      Brand
                    </label>
                    <select
                      id="brand"
                      className="ProductUpload-Select"
                      value={form.brand}
                      onChange={onChange("brand")}
                      disabled={!form.category}
                    >
                      <option value="">Select Brand</option>
                      {brands.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Regular Price / Sale Price / Discount (%) */}
              <div className="row ProductUpload-GridRow">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label
                      className="ProductUpload-Label"
                      htmlFor="regularPrice"
                    >
                      PRICE
                    </label>
                    <input
                      id="regularPrice"
                      className="ProductUpload-Input"
                      type="number"
                      placeholder="Enter Regular Price"
                      value={form.regularPrice}
                      onChange={onRegularPriceChange}
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="salePrice">
                      OLD PRICE
                    </label>
                    <input
                      id="salePrice"
                      className="ProductUpload-Input"
                      type="number"
                      placeholder="Enter Sale Price"
                      value={form.salePrice}
                      onChange={onSalePriceChange}
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label
                      className="ProductUpload-Label"
                      htmlFor="discountPercent"
                    >
                      Discount (%)
                    </label>
                    <input
                      id="discountPercent"
                      className="ProductUpload-Input"
                      type="number"
                      placeholder="0"
                      value={form.discountPercent}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Row 5: RAM / Storage / Stock */}
              <div className="row ProductUpload-GridRow">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="ram">
                      Product RAM
                    </label>
                    <select
                      id="ram"
                      className="ProductUpload-Select"
                      multiple
                      value={form.ram}
                      onChange={(e) => {
                        const selected = Array.from(
                          e.target.selectedOptions,
                        ).map((o) => o.value);
                        setForm((prev) => ({ ...prev, ram: selected }));
                      }}
                    >
                      {RAM_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="ProductUpload-ChipsWrap">
                      {form.ram.map((chip) => (
                        <span key={chip} className="ProductUpload-Chip">
                          {chip}
                          <button
                            type="button"
                            className="ProductUpload-ChipRemove"
                            aria-label={`Remove ${chip}`}
                            onClick={() => toggleMulti("ram", chip)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="storage">
                      Product Storage
                    </label>
                    <select
                      id="storage"
                      className="ProductUpload-Select"
                      multiple
                      value={form.storage}
                      onChange={(e) => {
                        const selected = Array.from(
                          e.target.selectedOptions,
                        ).map((o) => o.value);
                        setForm((prev) => ({ ...prev, storage: selected }));
                      }}
                    >
                      {STORAGE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="ProductUpload-ChipsWrap">
                      {form.storage.map((chip) => (
                        <span key={chip} className="ProductUpload-Chip">
                          {chip}
                          <button
                            type="button"
                            className="ProductUpload-ChipRemove"
                            aria-label={`Remove ${chip}`}
                            onClick={() => toggleMulti("storage", chip)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div> */}

                <div className="col-lg-4 col-md-4 col-sm-12">
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

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label" htmlFor="isFeatured">
                      Is Featured
                    </label>
                    <select
                      id="isFeatured"
                      className="ProductUpload-Select"
                      value={form.isFeatured}
                      onChange={onChange("isFeatured")}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 6: Ratings / Is Featured / Product Status */}
              <div className="row ProductUpload-GridRow">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label className="ProductUpload-Label">
                      Product Ratings
                    </label>
                    <StarsRating
                      value={form.ratings}
                      onChange={(v) => setForm((p) => ({ ...p, ratings: v }))}
                    />
                  </div>
                </div>

                {/* <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="ProductUpload-FormGroup">
                    <label
                      className="ProductUpload-Label"
                      htmlFor="productStatus"
                    >
                      Product Status
                    </label>
                    <select
                      id="productStatus"
                      className="ProductUpload-Select"
                      value={form.productStatus}
                      onChange={onChange("productStatus")}
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                      <option value="Out Of Stock">Out Of Stock</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
                </div> */}
              </div>

              {/* Row 7: Media Upload */}
              <div className="ProductUpload-FormGroup">
                <label className="ProductUpload-Label">
                  Media And Published
                </label>
                <div
                  className="ProductUpload-UploaderDropzone"
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDrop={onDrop}
                >
                  <div className="ProductUpload-UploaderInner">
                    <div className="ProductUpload-UploaderIcon">
                      <FaUpload />
                    </div>
                    <div className="ProductUpload-UploaderText">
                      Drag & Drop images here
                      <div className="ProductUpload-UploaderSubText">
                        Supported: JPG, JPEG, PNG, WEBP
                      </div>
                    </div>
                    <label className="ProductUpload-BrowseBtn">
                      Browse Files
                      <input
                        type="file"
                        width="100px"
                        height="100px"
                        multiple
                        accept=".jpg,.jpeg,.png,.webp"
                        style={{ display: "none" }}
                        onChange={(e) => addFiles(e.target.files)}
                      />
                    </label>
                  </div>
                </div>

                {/* <div className="ProductUpload-UploaderMetaRow">
                  <div className="ProductUpload-UploaderCount">
                    Upload Count: <b>{form.images.length}</b>
                  </div>
                </div> */}

                {form.images.length > 0 && (
                  <div className="ProductUpload-PreviewGrid">
                    {form.images.map((img, idx) => (
                      <div
                        key={`${img.name}-${idx}`}
                        className="ProductUpload-PreviewCard"
                      >
                        <div className="ProductUpload-PreviewThumbWrap">
                          <img
                            className="ProductUpload-PreviewThumb"
                            src={img.previewUrl}
                            width="250px"
                            height="200px"
                            alt={img.name}
                          />
                        </div>
                        <div className="ProductUpload-PreviewFooter">
                          <div
                            className="ProductUpload-PreviewFilename"
                            title={img.name}
                          >
                            {img.name}
                          </div>
                          <button
                            type="button"
                            className="ProductUpload-PreviewRemoveBtn"
                            onClick={() => removeImageAt(idx)}
                            aria-label="Remove image"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 8: Publish Section */}
              <div className="ProductUpload-PublishActionsRow">
                <div className="ProductUpload-PublishActionsRow__inner">
                  {/* <button
                    type="button"
                    className="ProductUpload-Button ProductUpload-Button--secondary"
                    disabled={form.isSavingDraft || form.isPublishing}
                    onClick={() => publishAPI({ mode: "draft" })}
                  >
                    {form.isSavingDraft ? "Saving..." : "Save Draft"}
                  </button> */}

                  {/* <button
                    type="button"
                    className="ProductUpload-Button ProductUpload-Button--outlinePrimary"
                    disabled={form.isPreviewing || form.isPublishing}
                    onClick={() => publishAPI({ mode: "preview" })}
                  >
                    {form.isPreviewing
                      ? "Generating Preview..."
                      : "Preview Product"}
                  </button> */}

                  <button
                    type="submit"
                    className="ProductUpload-PublishButton"
                    disabled={form.isPublishing}
                    style={{ marginLeft: "250px" }}
                  >
                    <span className="ProductUpload-PublishButtonIcon">
                      <FaUpload />
                    </span>
                    {form.isPublishing ? "Publishing..." : "PUBLISH AND VIEW"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
