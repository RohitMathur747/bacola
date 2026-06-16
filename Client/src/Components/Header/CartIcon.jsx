import React from "react";
import { IoBagOutline } from "react-icons/io5";

export default function CartIcon({ count, onClick }) {
  return (
    <div
      className="ml-auto cartTab d-flex align-items-center"
      style={{ cursor: "pointer" }}
    >
      <div
        className="position-relative ml-2"
        onClick={onClick}
        role="button"
        aria-label="Open cart"
      >
        <span className="sr-only">Cart</span>
        <div>
          <button className="btn circle" type="button" aria-label="Cart">
            <IoBagOutline />
          </button>
        </div>
        <span
          className="count d-flex align-items-center justify-center"
          aria-label="Cart item count"
        >
          {count}
        </span>
      </div>
    </div>
  );
}
