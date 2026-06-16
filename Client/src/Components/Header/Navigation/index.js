import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [allCatOpen, setAllCatOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const navRef = useRef(null);

  const categories = allCatOpen
    ? [
        {
          title: "MEN",
          items: [
            { label: "Clothing", to: "/men/clothing" },
            { label: "Footwear", to: "/men/footwear" },
            { label: "Watches", to: "/men/watches" },
          ],
        },
        {
          title: "WOMEN",
          items: [
            { label: "Clothing", to: "/women/clothing" },
            { label: "Footwear", to: "/women/footwear" },
            { label: "Watches", to: "/women/watches" },
          ],
        },
        {
          title: "BEAUTY",
          items: [
            { label: "Makeup", to: "/beauty/makeup" },
            { label: "Skincare", to: "/beauty/skincare" },
            { label: "Fragrances", to: "/beauty/fragrances" },
          ],
        },
        {
          title: "WATCHES",
          items: [
            { label: "Men's Watches", to: "/watches/men" },
            { label: "Women's Watches", to: "/watches/women" },
            { label: "Smart Watches", to: "/watches/smart" },
          ],
        },
        {
          title: "KIDS",
          items: [
            { label: "Clothing", to: "/kids/clothing" },
            { label: "Footwear", to: "/kids/footwear" },
            { label: "Accessories", to: "/kids/accessories" },
          ],
        },
      ]
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null);
        setAllCatOpen(false);
        setActiveCategoryIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggle = (i, e) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const toggleAllCat = (e) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    setAllCatOpen((prev) => {
      const next = !prev;
      if (!next) {
        setActiveCategoryIndex(null);
      }
      return next;
    });
  };

  const toggleCategory = (index, e) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    setActiveCategoryIndex((prev) => (prev === index ? null : index));
  };

  const showCategorySubmenu = (index) => {
    setActiveCategoryIndex(index);
  };

  const hideCategorySubmenu = () => {
    setActiveCategoryIndex(null);
  };

  return (
    <nav ref={navRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1 d-flex align-items-center">
            <div className="allCatWrapper">
              <Button
                className="allCatTab d-flex align-items-center"
                onClick={toggleAllCat}
              >
                <span className="icon1">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`categories-dropdown ${allCatOpen ? "open" : ""}`}
              >
                <ul>
                  {categories.map((category, index) => (
                    <li
                      key={category.title}
                      className={activeCategoryIndex === index ? "active" : ""}
                      onMouseEnter={() => showCategorySubmenu(index)}
                      onMouseLeave={hideCategorySubmenu}
                    >
                      <Button
                        className="category-toggle"
                        onClick={(e) => toggleCategory(index, e)}
                      >
                        {category.title} <FaAngleRight className="ml-auto" />
                      </Button>
                      <div className="category-submenu">
                        {category.items.map((sub) => (
                          <Link key={sub.label} to={sub.to}>
                            <Button>
                              {sub.label} <FaAngleRight className="ml-auto" />
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto mb-0">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaHome />
                    &nbsp; HOME
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Button>MEN</Button>
                <div className="submenu">
                  <Link to="/men/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/men/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/men/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>WOMEN</Button>
                <div className="submenu">
                  <Link to="/women/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/women/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/women/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>BEAUTY</Button>
                <div className="submenu">
                  <Link to="/beauty/makeup">
                    <Button>Makeup</Button>
                  </Link>
                  <Link to="/beauty/skincare">
                    <Button>Skincare</Button>
                  </Link>
                  <Link to="/beauty/fragrances">
                    <Button>Fragrances</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>WATCHES</Button>
                <div className="submenu">
                  <Link to="/watches/men">
                    <Button>Men's Watches</Button>
                  </Link>
                  <Link to="/watches/women">
                    <Button>Women's Watches</Button>
                  </Link>
                  <Link to="/watches/smart">
                    <Button>Smart Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>KIDS</Button>
                <div className="submenu">
                  <Link to="/kids/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/kids/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/kids/accessories">
                    <Button>Accessories</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>GIFT</Button>
                <div className="submenu">
                  <Link to="/gift/gift-cards">
                    <Button>Gift Cards</Button>
                  </Link>
                  <Link to="/gift/gift-sets">
                    <Button>Gift Sets</Button>
                  </Link>
                  <Link to="/gift/seasonal">
                    <Button>Seasonal Gifts</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>BLOG</Button>
                <div className="submenu">
                  <Link to="/blog/latest">
                    <Button>Latest Posts</Button>
                  </Link>
                  <Link to="/blog/trends">
                    <Button>Trends</Button>
                  </Link>
                  <Link to="/blog/inspiration">
                    <Button>Inspiration</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Button>CONTACT US</Button>
                <div className="submenu">
                  <Link to="/contact/customer-care">
                    <Button>Customer Care</Button>
                  </Link>
                  <Link to="/contact/stores">
                    <Button>Store Locator</Button>
                  </Link>
                  <Link to="/contact/support">
                    <Button>Partner Support</Button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
