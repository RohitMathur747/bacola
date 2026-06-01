import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown/index";

import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox/index";
import Navigation from "./Navigation/index";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip">
          <div className="container">
            <p className="text-white text-center mb-0 mt-0">
              Due to the <b>COVID 19</b>
              epidemic,orders may be processed with a slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/* Search Bar starts */}
                <SearchBox />
                {/* Search Bar ends */}

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FaRegUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
