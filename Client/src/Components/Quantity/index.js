import React, { useState } from "react";
import Button from "@mui/material/Button";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="d-flex align-items-center gap-3 mb-4">
        <div className="qty-controls d-flex align-items-center">
          <button
            className="qty-btn"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <div className="qty-display">{quantity}</div>
          <button className="qty-btn" onClick={() => setQuantity((q) => q + 1)}>
            +
          </button>
        </div>

        <Button
          className="add-to-cart-large"
          variant="contained"
          color="primary"
          sx={{ borderRadius: "40px", padding: "10px 30px" }}
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default Quantity;
