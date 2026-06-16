import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./SocialLogin.css";

export default function SocialLogin({ onSocial, loading = false }) {
  return (
    <div className="social-login">
      <button
        type="button"
        className="social-btn social-btn-google"
        onClick={() => onSocial?.("google")}
        disabled={loading}
      >
        <span className="social-icon">
          <FaGoogle />
        </span>
        {loading ? "Continuing..." : "Continue with Google"}
      </button>

      <button
        type="button"
        className="social-btn social-btn-facebook"
        onClick={() => onSocial?.("facebook")}
        disabled={loading}
      >
        <span className="social-icon">
          <FaFacebookF />
        </span>
        {loading ? "Continuing..." : "Continue with Facebook"}
      </button>
    </div>
  );
}
