import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdHome,
  MdPerson,
} from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim()) return false;
    if (!password) return false;
    if (!confirmPassword) return false;
    if (password !== confirmPassword) return false;
    if (!agreed) return false;
    return true;
  }, [name, email, password, confirmPassword, agreed]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Hook up to real auth later.
  };

  return (
    <div className="main-Register">
      <div className="register-part1">
        <div className="register-content">
          <h1 className="register-title">
            BEST UX/UI FASHION ECOMMERCE DASHBOARD & ADMIN PANEL
          </h1>

          <p className="register-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <button
            className="homeBtn"
            type="button"
            onClick={() => navigate("/")}
          >
            <MdHome />
            Go To Home
          </button>
        </div>
      </div>

      <div className="register-part2">
        <div className="registerCard" role="region" aria-label="Register">
          <div className="logoWrapper">
            <div className="logoCircle" aria-hidden="true">
              H
            </div>
          </div>

          <h2 className="loginTitle">Register a New Account</h2>

          <form className="loginForm" onSubmit={onSubmit}>
            <div className="inputGroup">
              <span className="inputIcon" aria-hidden="true">
                <MdPerson />
              </span>
              <input
                className="inputField"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </div>

            <div className="inputGroup">
              <span className="inputIcon" aria-hidden="true">
                <MdEmail />
              </span>
              <input
                className="inputField"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="inputGroup">
              <span className="inputIcon" aria-hidden="true">
                <MdLock />
              </span>
              <input
                className="inputField"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
              <button
                className="passwordToggle"
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>

            <div className="inputGroup">
              <span className="inputIcon" aria-hidden="true">
                <MdLock />
              </span>
              <input
                className="inputField"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
              <button
                className="passwordToggle"
                type="button"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                onClick={() => setShowConfirmPassword((v) => !v)}
              >
                {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>

            <label className="checkboxWrapper">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>I agree to all Terms & Conditions</span>
            </label>

            <button className="signInBtn" type="submit" disabled={!isValid}>
              Sign Up
            </button>

            <div className="divider" aria-hidden="true">
              <span className="dividerLine" />
              <span className="dividerText">---------- OR ----------</span>
              <span className="dividerLine" />
            </div>

            <button className="googleBtn" type="button" onClick={() => {}}>
              <span className="inputIcon" aria-hidden="true">
                <FcGoogle />
              </span>
              <span className="googleBtnText">Sign up with Google</span>
            </button>

            <div className="loginSubtitle">
              Already Have an Account ?
              <span
                className="forgotPassword"
                role="button"
                tabIndex={0}
                onClick={() => navigate("/login")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") navigate("/login");
                }}
                style={{ cursor: "pointer", paddingLeft: "10px" }}
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
