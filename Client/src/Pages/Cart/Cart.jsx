import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    totals,
    coupon,
    shippingMethodId,
    shippingMethod,
    updateQuantity,
    removeFromCart,
    removeAll,
    applyCouponAction,
    setShippingMethodAction,
    freeShippingProgress,
  } = useCart();

  const [couponCode, setCouponCode] = useState(coupon?.code || "");

  const hasItems = cartItems.length > 0;

  const couponApplied = coupon?.applied;

  return (
    <section className="cart-page">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h3 style={{ fontWeight: 900 }}>Your Cart</h3>
          {hasItems && (
            <button
              className="btn btn-outline-danger"
              onClick={removeAll}
              type="button"
            >
              Remove All
            </button>
          )}
        </div>

        {!hasItems ? (
          <div className="alert alert-light shadow-sm">Cart is empty.</div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="bg-white shadow-sm rounded-3 p-3">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 84 }}>Item</th>
                      <th>Product</th>
                      <th style={{ width: 160 }}>Quantity</th>
                      <th style={{ width: 160 }}>Price</th>
                      <th style={{ width: 110 }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((it) => (
                      <tr key={it.productId}>
                        <td>
                          <img
                            src={it.image}
                            alt={it.title}
                            style={{
                              width: 68,
                              height: 68,
                              objectFit: "cover",
                              borderRadius: 10,
                            }}
                          />
                        </td>
                        <td>
                          <div style={{ fontWeight: 800 }}>{it.title}</div>
                          <div className="text-muted" style={{ fontSize: 13 }}>
                            ${it.unitPrice.toFixed(2)} each
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                updateQuantity(
                                  it.productId,
                                  Math.max(1, it.quantity - 1),
                                )
                              }
                            >
                              -
                            </button>
                            <div
                              style={{
                                minWidth: 28,
                                textAlign: "center",
                                fontWeight: 800,
                              }}
                            >
                              {it.quantity}
                            </div>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                updateQuantity(it.productId, it.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td style={{ fontWeight: 900 }}>
                          ${(it.unitPrice * it.quantity).toFixed(2)}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-link text-danger"
                            onClick={() => removeFromCart(it.productId)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="bg-white shadow-sm rounded-3 p-3 sticky-top"
                style={{ top: 16 }}
              >
                <div className="mb-3">
                  <div style={{ fontWeight: 900 }}>Free Shipping</div>
                  <div className="text-muted" style={{ fontSize: 13 }}>
                    ${freeShippingProgress.remaining.toFixed(2)} away from free
                    shipping
                  </div>
                  <div className="progress mt-2" style={{ height: 10 }}>
                    <div
                      className="progress-bar"
                      style={{ width: `${freeShippingProgress.pct}%` }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div style={{ fontWeight: 900 }}>Coupon</div>
                  <div className="input-group mt-2">
                    <input
                      className="form-control"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={() => applyCouponAction(couponCode)}
                      disabled={!couponCode.trim()}
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <div
                      className="text-success mt-2"
                      style={{ fontWeight: 800 }}
                    >
                      Coupon applied: {coupon.code}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <div style={{ fontWeight: 900 }}>Shipping</div>
                  <div className="mt-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        checked={shippingMethodId === "STANDARD"}
                        onChange={() => setShippingMethodAction("STANDARD")}
                      />
                      <label className="form-check-label">
                        Standard (${20})
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        checked={shippingMethodId === "EXPRESS"}
                        onChange={() => setShippingMethodAction("EXPRESS")}
                      />
                      <label className="form-check-label">
                        Express (${50})
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        checked={shippingMethodId === "FREE"}
                        onChange={() => setShippingMethodAction("FREE")}
                      />
                      <label className="form-check-label">Free (${0})</label>
                    </div>
                  </div>
                </div>

                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between">
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
                    <span className="text-muted">Shipping</span>
                    <span style={{ fontWeight: 900 }}>
                      ${totals.shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <span style={{ fontWeight: 900 }}>Grand Total</span>
                    <span style={{ fontWeight: 900, fontSize: 18 }}>
                      ${totals.grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  className="btn btn-primary w-100 mt-3"
                  type="button"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
