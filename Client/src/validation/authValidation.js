// src/validation/authValidation.js

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hasUppercase(str) {
  return /[A-Z]/.test(str);
}

function hasLowercase(str) {
  return /[a-z]/.test(str);
}

function hasNumber(str) {
  return /\d/.test(str);
}

function hasSpecialChar(str) {
  // Require at least one non-alphanumeric character
  return /[^A-Za-z0-9]/.test(str);
}

export function validateSignUp({ username, email, phone, password }) {
  const errors = {};

  const u = (username ?? "").toString().trim();
  const e = (email ?? "").toString().trim();
  const p = (phone ?? "").toString().trim();
  const pw = (password ?? "").toString();

  if (!u) errors.username = "Username is required";
  else if (u.length < 3)
    errors.username = "Username must be at least 3 characters";

  if (!e) errors.email = "Email is required";
  else if (!emailRegex.test(e)) errors.email = "Please enter a valid email";

  if (!p) errors.phone = "Phone number is required";
  // Keep phone validation lightweight (no external libs)
  else if (!/^[0-9]{7,15}$/.test(p.replace(/\s+/g, ""))) {
    errors.phone = "Please enter a valid phone number (7-15 digits)";
  }

  if (!pw) errors.password = "Password is required";
  else {
    if (pw.length < 8)
      errors.password = "Password must be at least 8 characters";
    else if (
      !(
        hasUppercase(pw) &&
        hasLowercase(pw) &&
        hasNumber(pw) &&
        hasSpecialChar(pw)
      )
    ) {
      errors.password =
        "Password must contain uppercase, lowercase, number, and special character";
    }
  }

  return errors;
}

export function validateSignIn({ email, password }) {
  const errors = {};

  const e = (email ?? "").toString().trim();
  const pw = (password ?? "").toString();

  if (!e) errors.email = "Email is required";
  else if (!emailRegex.test(e)) errors.email = "Please enter a valid email";

  if (!pw) errors.password = "Password is required";

  return errors;
}
