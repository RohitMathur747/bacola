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

export const messagesPool = [
  {
    from: "Aarav Patel",
    text: "Hi Admin, could you please update my account security settings?",
  },
  {
    from: "Meera Sharma",
    text: "Hello Admin, I’d like to know the status of my recent support ticket.",
  },
  {
    from: "Rohan Verma",
    text: "Requesting access to the dashboard analytics. Thanks!",
  },
  {
    from: "Neha Singh",
    text: "I’m unable to reset my password—please help.",
  },
  {
    from: "Ishaan Khanna",
    text: "Could you confirm if my subscription is active?",
  },
  {
    from: "Priya Nair",
    text: "There’s an error when I try to export the report.",
  },
  {
    from: "Karan Joshi",
    text: "Can I get a receipt for my last payment?",
  },
  {
    from: "Ananya Roy",
    text: "Please add me to the billing contacts list.",
  },
];

const toEmail = (fromName) =>
  fromName
    .toLowerCase()
    .replace(/\s+/g, ".")
    .replace(/[^a-z0-9\.]/g, "")
    .concat("@example.com");

// Messages coming from normal users TO the admin.
// Used by Message dropdown (inbox) and Notifications dropdown.
// Shape matches MessageDropdown's expected items: { id, label, ... }
// NOTE: Keep unreadCount consistent with items length shown in the dropdown.
export const adminNotificationMessages = {
  unreadCount: 5,
  items: messagesPool.slice(0, 5).map((m, i) => ({
    id: `m${i + 1}`,
    label: m.text,
    from: m.from,
    fromEmail: toEmail(m.from),
    text: m.text,
  })),
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
