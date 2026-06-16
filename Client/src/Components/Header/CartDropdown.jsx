import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartDropdown({
  open,
  onClose,
  items,
  subtotal,
  onRemoveAll,
}) {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div
      className="position-absolute bg-white shadow"
      style={{
        right: 16,
        top: 64,
        width: 360,
        zIndex: 1050,
        borderRadius: 12,
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="p-3 d-flex align-items-center justify-content-between">
        <div style={{ fontWeight: 800 }}>Mini Cart</div>
        <button className="btn btn-sm" onClick={onClose}>
          ×
        </button>
      </div>

      <div style={{ maxHeight: 340, overflowY: "auto" }}>
        {items.length === 0 ? (
          <div className="p-3 text-muted">Your cart is empty.</div>
        ) : (
          items.map((it) => (
            <div key={it.productId} className="px-3 py-2 border-top">
              <div className="d-flex gap-3">
                <img
                  src={it.image}
                  alt={it.title}
                  style={{
                    width: 46,
                    height: 46,
                    objectFit: "cover",
                    borderRadius: 8,
                    flex: "0 0 auto",
                  }}
                />
                <div className="flex-grow-1">
                  <div
                    className="fw-semibold"
                    style={{ fontSize: 13, lineHeight: 1.2 }}
                  >
                    {it.title}
                  </div>
                  <div className="text-muted" style={{ fontSize: 12 }}>
                    ${it.unitPrice.toFixed(2)} × {it.quantity}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>
                    ${(it.unitPrice * it.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-3 border-top">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="text-muted">Subtotal</div>
          <div style={{ fontWeight: 900 }}>${subtotal.toFixed(2)}</div>
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-primary flex-grow-1"
            onClick={() => {
              onClose?.();
              navigate("/cart");
            }}
          >
            View Cart
          </button>
          <button
            type="button"
            className="btn btn-outline-primary flex-grow-1"
            onClick={() => {
              onClose?.();
              navigate("/checkout");
            }}
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>

        {items.length > 0 && (
          <button
            className="btn btn-link text-danger mt-3 p-0"
            type="button"
            onClick={() => onRemoveAll?.()}
          >
            <FaRegTrashAlt className="me-1" /> Remove All
          </button>
        )}
      </div>
    </div>
  );
}
