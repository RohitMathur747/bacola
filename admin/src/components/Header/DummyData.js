export const dummyCart = {
  itemCount: 2,
  subtotal: 129.99,
  items: [
    { id: "c1", label: "Wireless Mouse", price: 49.99, qty: 1 },
    { id: "c2", label: "Mechanical Keyboard", price: 80.0, qty: 1 },
  ],
};

const names = [
  "Aarav Patel",
  "Meera Sharma",
  "Rohan Verma",
  "Neha Singh",
  "Ishaan Khanna",
  "Priya Nair",
  "Karan Joshi",
  "Ananya Roy",
];

const messagesPool = [
  "Hi Admin, could you please update my account security settings?",
  "Hello Admin, I’d like to know the status of my recent support ticket.",
  "Requesting access to the dashboard analytics. Thanks!",
  "I’m unable to reset my password—please help.",
  "Could you confirm if my subscription is active?",
  "There’s an error when I try to export the report.",
  "Can I get a receipt for my last payment?",
  "Please add me to the billing contacts list.",
];

const randomFromSeed = (seed) => {
  const idx = Math.abs(seed) % names.length;
  return names[idx];
};

// Messages coming from normal users to the admin.
// Used by both: Message dropdown (inbox) and Notifications dropdown.
export const adminNotificationMessages = {
  unreadCount: 5,
  items: Array.from({ length: 6 }).map((_, i) => {
    const id = `m${i + 1}`;
    const fromName = randomFromSeed(Date.now() + i * 13);
    const fromEmail = fromName
      .toLowerCase()
      .replace(/\s+/g, ".")
      .replace(/[^a-z0-9\.]/g, "")
      .concat("@example.com");

    const text = messagesPool[(i * 3 + Date.now()) % messagesPool.length];

    return {
      id,
      from: fromName,
      fromEmail,
      text,
    };
  }),
};

// Backward compatibility (if other components still import dummyMessages)
export const dummyMessages = adminNotificationMessages;

export const dummyNotifications = {
  unreadCount: 12,
  items: [
    { id: "n1", label: "New alert", tone: "info" },
    { id: "n2", label: "Mark all read", tone: "success" },
  ],
};

export const dummyUser = {
  name: "Admin User",
  email: "admin@example.com",
  items: [
    { id: "u1", label: "My account", icon: "account" },
    { id: "u2", label: "Add another account", icon: "add" },
    { id: "u3", label: "Settings", icon: "settings" },
    { id: "u4", label: "Reset Password", icon: "key" },
    { id: "u5", label: "Logout", icon: "logout", danger: true },
  ],
};
