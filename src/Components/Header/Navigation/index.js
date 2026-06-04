import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navigation = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [allCatOpen, setAllCatOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const navRef = useRef(null);

  const categories = [
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
  ];

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
                    >
                      <Button
                        className="category-toggle"
                        onClick={(e) => toggleCategory(index, e)}
                      >
                        {category.title}
                      </Button>
                      <div className="category-submenu">
                        {category.items.map((sub) => (
                          <Link key={sub.label} to={sub.to}>
                            <Button>{sub.label}</Button>
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
              <li
                className={`list-inline-item ${openIndex === 0 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(0, e)}>MEN</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li
                className={`list-inline-item ${openIndex === 1 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(1, e)}>WOMEN</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li
                className={`list-inline-item ${openIndex === 2 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(2, e)}>BEAUTY</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li
                className={`list-inline-item ${openIndex === 3 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(3, e)}>WATCHES</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li
                className={`list-inline-item ${openIndex === 4 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(4, e)}>KIDS</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li
                className={`list-inline-item ${openIndex === 5 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(5, e)}>GIFT</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li
                className={`list-inline-item ${openIndex === 6 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(6, e)}>BLOG</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li
                className={`list-inline-item ${openIndex === 7 ? "open" : ""}`}
              >
                <Button onClick={(e) => toggle(7, e)}>CONTACT US</Button>
                <div className="submenu">
                  <Link to="/clothing">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/footwear">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/watches">
                    <Button>Watches</Button>
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
