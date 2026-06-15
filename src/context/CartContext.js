import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  loadCartState,
  saveCartState,
  clearCartState,
} from "../utils/storageHelper";
import { SHIPPING_METHODS, COUPONS, FREE_SHIPPING } from "../utils/constants";
import { calculateTotals } from "../utils/calculateTotals";
import { validateCoupon } from "../utils/couponValidator";

export const CartContext = createContext(null);

const DEFAULT_STATE = {
  cartItems: [],
  coupon: { code: "", discount: 0, applied: false, type: null },
  shippingMethodId: SHIPPING_METHODS.STANDARD.id,
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(DEFAULT_STATE.cartItems);
  const [coupon, setCoupon] = useState(DEFAULT_STATE.coupon);
  const [shippingMethodId, setShippingMethodId] = useState(
    DEFAULT_STATE.shippingMethodId,
  );

  // hydrate
  useEffect(() => {
    const saved = loadCartState();
    if (!saved) return;

    setCartItems(Array.isArray(saved.cartItems) ? saved.cartItems : []);
    setCoupon(saved.coupon || DEFAULT_STATE.coupon);
    setShippingMethodId(
      saved.shippingMethodId || DEFAULT_STATE.shippingMethodId,
    );
  }, []);

  // persist
  useEffect(() => {
    saveCartState({ cartItems, coupon, shippingMethodId });
  }, [cartItems, coupon, shippingMethodId]);

  const shippingMethod =
    SHIPPING_METHODS[shippingMethodId] || SHIPPING_METHODS.STANDARD;

  const totals = useMemo(() => {
    return calculateTotals({
      cartItems,
      shippingCost: shippingMethod.cost,
      coupon,
    });
  }, [cartItems, shippingMethod.cost, coupon]);

  const freeShippingProgress = useMemo(() => {
    const pct = Math.min(
      100,
      Math.round((totals.subtotal / FREE_SHIPPING.threshold) * 100),
    );
    const remaining = Math.max(0, FREE_SHIPPING.threshold - totals.subtotal);
    return { pct, remaining };
  }, [totals.subtotal]);

  const addToCart = useCallback((product, quantity = 1) => {
    if (!product || !product.id) return;

    const qty = Math.max(1, Number(quantity) || 1);
    const unitPrice = Number(product.netPriceValue ?? product.netPrice ?? 0);

    setCartItems((prev) => {
      const idx = prev.findIndex((i) => i.productId === product.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + qty,
          unitPrice,
        };
        return next;
      }
      return [
        ...prev,
        {
          productId: product.id,
          title: product.title,
          brand: product.brand,
          image: product.src || product.image,
          unitPrice,
          quantity: qty,
        },
      ];
    });
  }, []);

  const updateQuantity = useCallback((productId, nextQty) => {
    const qty = Math.max(1, Number(nextQty) || 1);
    setCartItems((prev) =>
      prev.map((i) =>
        i.productId === productId ? { ...i, quantity: qty } : i,
      ),
    );
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const removeAll = useCallback(() => {
    setCartItems([]);
    setCoupon(DEFAULT_STATE.coupon);
    setShippingMethodId(DEFAULT_STATE.shippingMethodId);
    clearCartState();
  }, []);

  const applyCouponAction = useCallback((code) => {
    const result = validateCoupon(code, COUPONS);
    if (!result.valid) return { ok: false, message: result.message };

    setCoupon({
      code: result.code,
      applied: true,
      type: result.type,
      discount: result.discount,
    });
    return { ok: true, message: result.message };
  }, []);

  const setShippingMethodAction = useCallback((id) => {
    if (!SHIPPING_METHODS[id]) return;
    setShippingMethodId(id);
  }, []);

  const clearCartAction = useCallback(() => {
    removeAll();
  }, [removeAll]);

  const cartCount = useMemo(
    () => cartItems.reduce((acc, i) => acc + i.quantity, 0),
    [cartItems],
  );

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      totals,
      coupon,
      shippingMethodId,
      shippingMethod,
      freeShippingProgress,
      addToCart,
      updateQuantity,
      removeFromCart,
      removeAll,
      applyCouponAction,
      setShippingMethodAction,
      clearCartAction,
    }),
    [
      cartItems,
      cartCount,
      totals,
      coupon,
      shippingMethodId,
      shippingMethod,
      freeShippingProgress,
      addToCart,
      updateQuantity,
      removeFromCart,
      removeAll,
      applyCouponAction,
      setShippingMethodAction,
      clearCartAction,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
