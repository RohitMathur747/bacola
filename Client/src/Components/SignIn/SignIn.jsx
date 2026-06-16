import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import AuthInput from "../Common/AuthInput";
import { validateSignIn } from "../../validation/authValidation";
import "./SignIn.css";

import logo from "../../assets/images/logo.png";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

    const nextErrors = validateSignIn(form);
    const hasErrors = Object.keys(nextErrors).length > 0;

    if (hasErrors) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    try {
      // Production-ready: plug your API call here.
      await new Promise((r) => setTimeout(r, 900));
      if (!rememberMe) {
        // if you store tokens locally, clear them here
      }
    } finally {
      setLoading(false);
    }
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

        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to continue</p>

        <form onSubmit={onSubmit} className="auth-form">
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
            autoComplete="current-password"
          />

          <div className="auth-links-row">
            <Link to="#" className="auth-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="primary-btn" disabled={!canSubmit}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="remember-row">
            <label className="remember-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>

          <div className="auth-footer-text">
            Not Registered? <Link to="/signup">Sign Up</Link>
          </div>
        </form>

        <div className="auth-divider">Or continue with social account</div>

        <SocialLogin onSocial={onSocial} loading={socialLoading} />
      </div>
    </div>
  );
}
