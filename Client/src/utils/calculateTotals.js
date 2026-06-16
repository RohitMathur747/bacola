function toMoneyNumber(value) {
  if (typeof value === "number") return value;
  if (value == null) return 0;
  const s = String(value).replace(/[^0-9.\-]/g, "");
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
}

export function calculateTotals({ cartItems, shippingCost = 0, coupon }) {
  const subtotal = (cartItems || []).reduce((acc, item) => {
    const unit = toMoneyNumber(item.unitPrice);
    return acc + unit * Number(item.quantity || 1);
  }, 0);

  const couponDiscount = (() => {
    if (!coupon?.applied) return 0;
    const discount = Number(coupon.discount || 0);
    if (!Number.isFinite(discount)) return 0;

    if (coupon.type === "percent") return (subtotal * discount) / 100;
    if (coupon.type === "flat") return discount;
    return 0;
  })();

  const discount = Math.min(subtotal, couponDiscount);
  const shipping = Number(shippingCost) || 0;
  const grandTotal = Math.max(0, subtotal - discount + shipping);

  return {
    subtotal,
    discount,
    shipping,
    grandTotal,
  };
}
