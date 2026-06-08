import React from "react";
import { FaShirt } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="top-info row">
            <div className="col d-flex align-items-center">
              <span className="ml-2">
                <FaShirt />
                &nbsp;Everyday Fresh Products
              </span>
            </div>

            <div className="col d-flex align-items-center">
              <span className="ml-2">
                <TbTruckDelivery />
                &nbsp;Fresh Delivery For Order Over $70
              </span>
            </div>

            <div className="col d-flex align-items-center">
              <span className="ml-2">
                <RiDiscountPercentLine />
                &nbsp;Daily Mega Discounts
              </span>
            </div>

            <div className="col d-flex align-items-center">
              <span className="ml-2">
                <LuBadgeDollarSign />
                &nbsp;Best Price in Market
              </span>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col footer-col">
              <h5>Men</h5>
              <ul>
                <li>
                  <Link to="#">T-Shirts</Link>
                </li>
                <li>
                  <Link to="#">Shirts</Link>
                </li>
                <li>
                  <Link to="#">Jeans</Link>
                </li>
                <li>
                  <Link to="#">Jackets</Link>
                </li>
                <li>
                  <Link to="#">Shoes</Link>
                </li>
                <li>
                  <Link to="#">Accessories</Link>
                </li>
                <li>
                  <Link to="#">New Arrivals</Link>
                </li>
              </ul>
            </div>

            <div className="col footer-col">
              <h5>Women</h5>
              <ul>
                <li>
                  <Link to="#">Dresses</Link>
                </li>
                <li>
                  <Link to="#">Tops</Link>
                </li>
                <li>
                  <Link to="#">Jeans</Link>
                </li>
                <li>
                  <Link to="#">Handbags</Link>
                </li>
                <li>
                  <Link to="#">Footwear</Link>
                </li>
                <li>
                  <Link to="#">Jewelry</Link>
                </li>
                <li>
                  <Link to="#">Sale</Link>
                </li>
              </ul>
            </div>

            <div className="col footer-col">
              <h5>Kids</h5>
              <ul>
                <li>
                  <Link to="#">Clothing</Link>
                </li>
                <li>
                  <Link to="#">Shoes</Link>
                </li>
                <li>
                  <Link to="#">Schoolwear</Link>
                </li>
                <li>
                  <Link to="#">Toys</Link>
                </li>
                <li>
                  <Link to="#">Accessories</Link>
                </li>
                <li>
                  <Link to="#">New In</Link>
                </li>
                <li>
                  <Link to="#">Birthday Gifts</Link>
                </li>
              </ul>
            </div>

            <div className="col footer-col">
              <h5>Watches</h5>
              <ul>
                <li>
                  <Link to="#">Men's Watches</Link>
                </li>
                <li>
                  <Link to="#">Women's Watches</Link>
                </li>
                <li>
                  <Link to="#">Smartwatches</Link>
                </li>
                <li>
                  <Link to="#">Casual Watches</Link>
                </li>
                <li>
                  <Link to="#">Luxury Picks</Link>
                </li>
                <li>
                  <Link to="#">Straps & Bands</Link>
                </li>
                <li>
                  <Link to="#">Gift Sets</Link>
                </li>
              </ul>
            </div>

            <div className="col footer-col">
              <h5>Mobiles</h5>
              <ul>
                <li>
                  <Link to="#">Latest Phones</Link>
                </li>
                <li>
                  <Link to="#">Mobile Accessories</Link>
                </li>
                <li>
                  <Link to="#">Headphones</Link>
                </li>
                <li>
                  <Link to="#">Chargers</Link>
                </li>
                <li>
                  <Link to="#">Phone Cases</Link>
                </li>
                <li>
                  <Link to="#">Smart Wearables</Link>
                </li>
                <li>
                  <Link to="#">Best Sellers</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-social mt-4 d-flex justify-content-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          <div className="copywright mt-4 pt-4 pb-4 d-flex">
            <p className="copyrightText text-center w-100 mb-0">
              © 2026. All rights reserved.{" "}
              <span className="owner">Rohit Mathur</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
