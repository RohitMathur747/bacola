import { validateCoupon } from "../utils/couponValidator";
import { COUPONS } from "../utils/constants";

export function parseAddToCartProduct(product) {
  if (!product) return null;
  const netPriceValue =
    product.netPriceValue ??
    (typeof product.netPrice === "string" ? product.netPrice : undefined);

  return {
    id: product.id,
    product,
    netPriceValue,
  };
}

export function validateCouponCode(code) {
  return validateCoupon(code, COUPONS);
}
