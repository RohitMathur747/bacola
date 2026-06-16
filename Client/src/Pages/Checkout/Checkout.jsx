import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, totals, coupon, shippingMethod } = useCart();

  return (
    <section style={{ paddingTop: 16 }}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h3 style={{ fontWeight: 900 }}>Checkout</h3>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => navigate("/cart")}
          >
            Back to Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="alert alert-light shadow-sm">Cart is empty.</div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="bg-white shadow-sm rounded-3 p-4">
                <div className="fw-bold mb-2">Order Summary</div>
                <div className="text-muted" style={{ fontSize: 13 }}>
                  This is a demo checkout page (no payment integration).
                </div>

                <div className="mt-3">
                  {cartItems.map((it) => (
                    <div
                      key={it.productId}
                      className="d-flex gap-3 align-items-center border-top py-3"
                    >
                      <img
                        src={it.image}
                        alt={it.title}
                        style={{
                          width: 70,
                          height: 70,
                          objectFit: "cover",
                          borderRadius: 12,
                        }}
                      />
                      <div className="flex-grow-1">
                        <div style={{ fontWeight: 900 }}>{it.title}</div>
                        <div className="text-muted" style={{ fontSize: 13 }}>
                          ${it.unitPrice.toFixed(2)} × {it.quantity}
                        </div>
                      </div>
                      <div style={{ fontWeight: 900 }}>
                        ${(it.unitPrice * it.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="bg-white shadow-sm rounded-3 p-4 sticky-top"
                style={{ top: 16 }}
              >
                <div className="fw-bold mb-2">Totals</div>

                <div className="d-flex justify-content-between mt-2">
                  <span className="text-muted">Subtotal</span>
                  <span style={{ fontWeight: 900 }}>
                    ${totals.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="text-muted">Discount</span>
                  <span style={{ fontWeight: 900, color: "#198754" }}>
                    - ${totals.discount.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="text-muted">
                    Shipping ({shippingMethod.label})
                  </span>
                  <span style={{ fontWeight: 900 }}>
                    ${totals.shipping.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-3 border-top pt-3">
                  <span style={{ fontWeight: 900 }}>Grand Total</span>
                  <span style={{ fontWeight: 900, fontSize: 18 }}>
                    ${totals.grandTotal.toFixed(2)}
                  </span>
                </div>

                {coupon?.applied && (
                  <div
                    className="alert alert-success mt-3 mb-0"
                    style={{ padding: 10, fontSize: 13 }}
                  >
                    Coupon applied: <b>{coupon.code}</b>
                  </div>
                )}

                <button
                  type="button"
                  className="btn btn-primary w-100 mt-3"
                  onClick={() =>
                    alert("Checkout demo: implement payment/places order here.")
                  }
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
