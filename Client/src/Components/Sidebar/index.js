import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import clothingCatImg from "../../assets/images/banner1.jpg";

const Sidebar = () => {
  const brandNames = [
    "Nike",
    "Adidas",
    "Puma",
    "Levi's",
    "Van Heusen",
    "Allen Solly",
  ];

  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>

          <div className="categoriesScroll">
            <FormGroup>
              {["men", "women", "beauty", "kids", "watches", "mobile"].map(
                (cat) => (
                  <FormControlLabel
                    key={cat}
                    control={<Checkbox />}
                    label={cat}
                  />
                ),
              )}
            </FormGroup>
          </div>

          <div className="priceFilter mt-4">
            <h6>PRICE</h6>
            <div className="priceInputs">
              <input
                type="number"
                placeholder="Min"
                className="priceInput"
                defaultValue={100}
              />
              <span className="dash">-</span>
              <input
                type="number"
                placeholder="Max"
                className="priceInput"
                defaultValue={51000}
              />
              <span className="priceCurrency">Rs</span>
            </div>
            <button className="applyPriceBtn" type="button">
              Apply
            </button>
          </div>

          <div className="stockStatusFilter mt-4">
            <h6>PRODUCT STATUS</h6>
            <div className="stockStatusOptions">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label="In Stock"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label="Out of Stock"
                />
              </FormGroup>
            </div>
          </div>

          <div className="brandFilter mt-4">
            <h6>BRANDS</h6>
            <div className="brandOptions">
              <FormGroup>
                {brandNames.map((brand) => (
                  <FormControlLabel
                    key={brand}
                    control={<Checkbox defaultChecked={false} />}
                    label={brand}
                  />
                ))}
              </FormGroup>
            </div>
          </div>

          <div className="brandImage mt-4">
            <img
              src={clothingCatImg}
              alt="Clothing"
              style={{ height: 300, width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
