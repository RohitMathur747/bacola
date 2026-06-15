export const COUPONS = {
  SAVE10: {
    type: "percent",
    value: 10,
    label: "SAVE10 - 10% OFF",
  },
  FLAT50: {
    type: "flat",
    value: 50,
    label: "FLAT50 - $50 OFF",
  },
};

export const SHIPPING_METHODS = {
  STANDARD: {
    id: "STANDARD",
    label: "Standard Shipping",
    cost: 20,
  },
  EXPRESS: {
    id: "EXPRESS",
    label: "Express Shipping",
    cost: 50,
  },
  FREE: {
    id: "FREE",
    label: "Free Shipping",
    cost: 0,
  },
};

export const FREE_SHIPPING = {
  threshold: 500,
};
