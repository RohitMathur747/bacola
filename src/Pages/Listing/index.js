import React from "react";
import Sidebar from "../../Components/Sidebar";
import Banner from "../../assets/images/catbanner.jpg";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAnglesDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductDisplay from "../../Components/ProductDisplay";

const Listing = () => {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 1/2/3/4 products per row
  const [viewCount, setViewCount] = React.useState(3);

  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing">
            <Sidebar />
            <div className="content_right">
              <img src={Banner} width="100%" height="400px" />

              <div className="showBy mt-3 d-flex align-items-center">
                <div className="d-flex btnWrapper align-items-center">
                  <Button
                    className={viewCount === 1 ? "active" : ""}
                    onClick={() => setViewCount(1)}
                  >
                    <IoIosMenu />
                  </Button>
                  <Button
                    className={viewCount === 2 ? "active" : ""}
                    onClick={() => setViewCount(2)}
                  >
                    <TbLayoutGridFilled />
                  </Button>
                  <Button
                    className={viewCount === 3 ? "active" : ""}
                    onClick={() => setViewCount(3)}
                  >
                    <CgMenuGridO />
                  </Button>
                  <Button
                    className={viewCount === 4 ? "active" : ""}
                    onClick={() => setViewCount(4)}
                  >
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button
                    id={buttonId}
                    aria-controls={open ? menuId : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Show 9 <FaAnglesDown />
                  </Button>
                  <Menu
                    id={menuId}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": buttonId,
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                    <MenuItem onClick={handleClose}>60</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                <ProductDisplay viewCount={viewCount} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
