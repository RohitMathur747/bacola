import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Sidebar = () => {
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

          <div className="priceFilter">
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

          <div className="stockStatusFilter">
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
