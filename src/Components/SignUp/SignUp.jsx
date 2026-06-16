import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import AuthInput from "../Common/AuthInput";
import { validateSignUp } from "../../validation/authValidation";
import "./SignUp.css";

import logo from "../../assets/images/logo.png";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const passwordAdornment = (
    <button
      type="button"
      className="auth-pw-toggle"
      onClick={() => setShowPassword((v) => !v)}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  );

  const canSubmit = useMemo(() => !loading, [loading]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const nextErrors = validateSignUp(form);
    const hasErrors = Object.keys(nextErrors).length > 0;

    if (hasErrors) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    try {
      // Production-ready: plug your API call here.
      // await api.signUp(...)
      await new Promise((r) => setTimeout(r, 900));
    } finally {
      setLoading(false);
    }
  };

  const onCancel = () => {
    setForm({ username: "", email: "", password: "", phone: "" });
    setErrors({});
  };

  const onSocial = async () => {
    if (socialLoading) return;
    setSocialLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
    } finally {
      setSocialLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo-wrap">
          <img src={logo} alt="bacola" className="auth-logo" />
        </div>

        <h2 className="auth-title">Create your account</h2>
        <p className="auth-subtitle">Sign up to continue</p>

        <form onSubmit={onSubmit} className="auth-form">
          <AuthInput
            label="Username"
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="Enter username"
            error={errors.username}
            autoComplete="username"
          />

          <div style={{ height: 10 }} />

          <AuthInput
            label="Email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter email"
            error={errors.email}
            autoComplete="email"
          />

          <div style={{ height: 10 }} />

          <AuthInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={onChange}
            placeholder="Enter password"
            error={errors.password}
            rightAdornment={passwordAdornment}
            autoComplete="new-password"
          />

          <div style={{ height: 10 }} />

          {/* Requested: phone field after Register button */}
          <AuthInput
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Enter phone number"
            error={errors.phone}
            inputMode="numeric"
            autoComplete="tel"
          />

          <button type="submit" className="primary-btn" disabled={!canSubmit}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div style={{ height: 14 }} />

          <div style={{ height: 12 }} />

          {/* Requested: cancel button after phone field */}
          <div className="auth-action-row">
            <button
              type="button"
              className="secondary-btn"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
            <Link to="/signin" className="secondary-link">
              Already have an account?
            </Link>
          </div>
        </form>

        <div className="auth-divider">Or continue with social account</div>

        <SocialLogin onSocial={onSocial} loading={socialLoading} />

        <div className="auth-footer-text">
          Already have an account? <Link to="/signin">Login</Link>
        </div>
      </div>
    </div>
  );
}
