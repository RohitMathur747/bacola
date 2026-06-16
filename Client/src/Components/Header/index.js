import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import CountryDropdown from "../CountryDropdown/index";
import { useContext, useMemo, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import SearchBox from "./SearchBox/index";
import Navigation from "./Navigation/index";
import { MyContext } from "../../App";
import useCart from "../../hooks/useCart";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const Header = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const { cartItems, cartCount, totals, removeAll } = useCart();

  const [open, setOpen] = useState(false);

  const dropdownItems = useMemo(() => cartItems || [], [cartItems]);

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
                {context.countryList.length !== 0 && <CountryDropdown />}

                {/* Search Bar starts */}
                <SearchBox />
                {/* Search Bar ends */}

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FaRegUser />
                  </Button>

                  <div className="ml-auto cartTab d-flex align-items-center position-relative">
                    <CartIcon
                      count={cartCount}
                      onClick={() => setOpen((v) => !v)}
                    />

                    <CartDropdown
                      open={open}
                      onClose={() => setOpen(false)}
                      items={dropdownItems}
                      subtotal={totals.subtotal}
                      onRemoveAll={() => {
                        removeAll();
                        setOpen(false);
                      }}
                    />
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
