import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SellingProducts = () => {
  const navigate = useNavigate();
  const products = [
    {
      uid: "SP-1001",
      name: "Premium Cotton Shirt",
      description: "Richman",
      category: "Men Clothing",
      brand: "Richman",
      image:"https://www.dilem-reunion.re/8104-home_default/premium-cotton-shirt.jpg",
      oldPrice: "₹2,499",
      newPrice: "₹1,999",
      stock: 30,
      rating: 4.9,
      ratingCount: 16,
      orders: 380,
      sales: "₹38 L",
    },
    {
      uid: "SP-1002",
      name: "Women Floral Dress",
      description: "Light & breathable",
      category: "Women Clothing",
      brand: "Zara",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.JmlV9U2dxPOc15EEqChL4AHaK-?pid=Api&h=220&P=0",
      oldPrice: "₹3,999",
      newPrice: "₹2,999",
      stock: 25,
      rating: 4.8,
      ratingCount: 22,
      orders: 250,
      sales: "₹25 L",
    },
    {
      uid: "SP-1003",
      name: "Denim Jacket",
      description: "Classic fit",
      category: "Men Clothing",
      brand: "Levis",
      image:
        "https://cdna.lystit.com/photos/nordstrom/beddc379/wrangler-Mid-Wash-Heritage-Pleated-Denim-Jacket.jpeg",
      oldPrice: "₹4,999",
      newPrice: "₹3,799",
      stock: 45,
      rating: 4.7,
      ratingCount: 18,
      orders: 420,
      sales: "₹42 L",
    },
    {
      uid: "SP-1004",
      name: "Winter Hoodie",
      description: "Warm fleece",
      category: "Men Clothing",
      brand: "H&M",
      image:
        "https://5.imimg.com/data5/PE/ZV/HA/SELLER-69029071/winter-hoodies-1000x1000.jpg",
      oldPrice: "₹2,899",
      newPrice: "₹2,199",
      stock: 70,
      rating: 4.6,
      ratingCount: 15,
      orders: 310,
      sales: "₹31 L",
    },
    {
      uid: "SP-1005",
      name: "Running Shoes",
      description: "Cushioned comfort",
      category: "Footwear",
      brand: "Nike",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.mG2NPBze06mUDWj4DhsmKAHaE7?pid=Api&h=220&P=0",
      oldPrice: "₹5,499",
      newPrice: "₹4,499",
      stock: 60,
      rating: 4.9,
      ratingCount: 30,
      orders: 520,
      sales: "₹52 L",
    },
    {
      uid: "SP-1006",
      name: "Leather Handbag",
      description: "Premium finish",
      category: "Accessories",
      brand: "Gucci",
      image:
        "https://cdn.notonthehighstreet.com/fs/5d/43/c60e-db02-45c8-9cbf-1977f277a696/original_classic-leather-satchel-bag.jpg",
      oldPrice: "₹8,999",
      newPrice: "₹7,499",
      stock: 20,
      rating: 5.0,
      ratingCount: 12,
      orders: 180,
      sales: "₹18 L",
    },
    {
      uid: "SP-1002",
      name: "Women Floral Dress",
      description: "Light & breathable",
      category: "Women Clothing",
      brand: "Zara",
      image:
        "https://i.pinimg.com/originals/b9/bd/4d/b9bd4dd630649b612815dd802c4c5743.jpg",
      oldPrice: "₹3,999",
      newPrice: "₹2,999",
      stock: 25,
      rating: 4.8,
      ratingCount: 22,
      orders: 250,
      sales: "₹25 L",
    },
    {
      uid: "SP-1003",
      name: "Denim Jacket",
      description: "Classic fit",
      category: "Men Clothing",
      brand: "Levis",
      image:
        "https://i5.walmartimages.com/asr/003f87e2-a045-4ce5-aba8-a6921c6c83b1_1.d992bec6238c34837d2ac09916991c74.jpeg",
      oldPrice: "₹4,999",
      newPrice: "₹3,799",
      stock: 45,
      rating: 4.7,
      ratingCount: 18,
      orders: 420,
      sales: "₹42 L",
    },
    {
      uid: "SP-1004",
      name: "Winter Hoodie",
      description: "Warm fleece",
      category: "Men Clothing",
      brand: "H&M",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81-rMStKXlL._AC_UL1500_.jpg",
      oldPrice: "₹2,899",
      newPrice: "₹2,199",
      stock: 70,
      rating: 4.6,
      ratingCount: 15,
      orders: 310,
      sales: "₹31 L",
    },
    {
      uid: "SP-1005",
      name: "Running Shoes",
      description: "Cushioned comfort",
      category: "Footwear",
      brand: "Nike",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.OrQNzps-E68petSYW2cdHwHaFH?pid=Api&h=220&P=0",
      oldPrice: "₹5,499",
      newPrice: "₹4,499",
      stock: 60,
      rating: 4.9,
      ratingCount: 30,
      orders: 520,
      sales: "₹52 L",
    },
    {
      uid: "SP-1006",
      name: "Leather Handbag",
      description: "Premium finish",
      category: "Accessories",
      brand: "Gucci",
      image:
        "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1715014022/792075_FADJA_1042_002_095_0000_Light-GG-Black-large-duffle-bag.jpg",
      oldPrice: "₹8,999",
      newPrice: "₹7,499",
      stock: 20,
      rating: 5.0,
      ratingCount: 12,
      orders: 180,
      sales: "₹18 L",
    },
  ];

  const getStockBadgeClass = (stock) => {
    if (stock > 50) return "stock-badge stock-badge--green";
    if (stock >= 20) return "stock-badge stock-badge--orange";
    return "stock-badge stock-badge--red";
  };

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return products.slice(startIndex, endIndex);
  }, [currentPage, products]);

  return (
    <div className="selling-products-main">
      <h3>Best Selling Products</h3>

      <div className="selling-product-part1">
        <div className="show-by">
          Show By
          <select>
            <option>None</option>
            <option>Ten</option>
            <option>Twenty</option>
            <option>Thirty</option>
          </select>
        </div>

        <div className="category-by">
          Category
          <select>
            <option>None</option>
            <option>Men Clothing</option>
            <option>Women Clothing</option>
            <option>Kids Clothing</option>
            <option>Winter Wear</option>
            <option>Summer Wear</option>
            <option>Footwear</option>
            <option>Accessories</option>
            <option>Formal Wear</option>
            <option>Casual Wear</option>
          </select>
        </div>
      </div>

      <div className="selling-product-part2">
        <div className="products-table-wrap">
          <table className="products-table">
            <thead>
              <tr>
                <th>UID</th>
                <th>PRODUCT</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>RATING</th>
                <th>ORDER</th>
                <th>SALES</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((p) => (
                <tr key={p.uid}>
                  <td>{p.uid}</td>

                  <td>
                    <div className="product-info">
                      <img
                        className="product-image"
                        src={p.image}
                        alt={p.name}
                      />
                      <div>
                        <div className="product-name">{p.name}</div>
                        <div className="product-description">
                          {p.description}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{p.category}</td>
                  <td>{p.brand}</td>

                  <td>
                    <div className="price-cell">
                      <div className="price-old">{p.oldPrice}</div>
                      <div className="price-new">{p.newPrice}</div>
                    </div>
                  </td>

                  <td>
                    <span className={getStockBadgeClass(p.stock)}>
                      Stock: {p.stock}
                    </span>
                  </td>

                  <td>
                    <div className="rating-cell">
                      <span className="rating-star">⭐</span>
                      <span>
                        {p.rating} ({p.ratingCount})
                      </span>
                    </div>
                  </td>

                  <td>{p.orders}</td>
                  <td>{p.sales}</td>

                  <td>
                    <div className="action-icons">
                      <button
                        className="action-btn action-btn--view"
                        type="button"
                        aria-label={`View ${p.name}`}
                        onClick={() => navigate(`/products/view/${p.uid}`)}
                      >
                        <span>👁</span>
                      </button>
                      <button
                        className="action-btn action-btn--edit"
                        type="button"
                        aria-label={`Edit ${p.name}`}
                      >
                        <span>✎</span>
                      </button>
                      <button
                        className="action-btn action-btn--delete"
                        type="button"
                        aria-label={`Delete ${p.name}`}
                      >
                        <span>🗑</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className="selling-products-pagination"
            role="navigation"
            aria-label="Pagination"
          >
            <div className="selling-products-pagination-pages">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    className={
                      pageNum === currentPage
                        ? "selling-products-page-btn selling-products-page-btn--active"
                        : "selling-products-page-btn"
                    }
                    onClick={() => setCurrentPage(pageNum)}
                    aria-current={pageNum === currentPage ? "page" : undefined}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProducts;
