import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const canSignIn = useMemo(() => {
    const e = email.trim();
    const p = password;
    return e.length > 0 && p.length > 0;
  }, [email, password]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Hook up to real auth later.
  };

  return (
    <section className="loginSection">
      <div className="loginContainer">
        <div className="loginCard" role="region" aria-label="Login">
          <div className="logoWrapper">
            <div className="logoCircle" aria-hidden="true">
              H
            </div>
          </div>

          <h2 className="loginTitle">Login to Hotash</h2>
          <p className="loginSubtitle">
            Welcome back! Please sign in to continue.
          </p>

          <form className="loginForm" onSubmit={onSubmit}>
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
                autoComplete="current-password"
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

            <button className="signInBtn" type="submit" disabled={!canSignIn}>
              Sign In
            </button>

            <a
              className="forgotPassword"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Forgot Password?
            </a>

            <div className="divider" aria-hidden="true">
              <span className="dividerLine" />
              <span className="dividerText">OR</span>
              <span className="dividerLine" />
            </div>

            <button className="googleBtn" type="button" onClick={() => {}}>
              <span className="inputIcon" aria-hidden="true">
                <FcGoogle />
              </span>
              <span className="googleBtnText">Sign in with Google</span>
            </button>

            <div className="loginSubtitle">
              Don't Have an Account ?
              <span
                className="forgotPassword"
                role="button"
                tabIndex={0}
                onClick={() => navigate("/register")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") navigate("/register");
                }}
              >
                Register
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
