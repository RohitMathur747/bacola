export function validateCoupon(inputCode, coupons) {
  const code = String(inputCode || "")
    .trim()
    .toUpperCase();
  if (!code) {
    return {
      valid: false,
      message: "Enter a coupon code.",
      code: "",
      type: null,
      discount: 0,
    };
  }

  const def = coupons?.[code];
  if (!def) {
    return {
      valid: false,
      message: "Invalid coupon code.",
      code: "",
      type: null,
      discount: 0,
    };
  }

  return {
    valid: true,
    message: def.label || `${code} applied.`,
    code,
    type: def.type,
    discount: def.value,
  };
}
