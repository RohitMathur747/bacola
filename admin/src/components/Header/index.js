import React, { useMemo, useState, useEffect, useRef, useContext } from "react";

import logo from "../../assests/logo.jpg";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineMenu,
  MdOutlineMenuOpen,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineAccountCircle,
  MdOutlineSettings,
  MdOutlinePersonAddAlt1,
} from "react-icons/md";
import {
  FiGlobe,
  FiShoppingCart,
  FiBell,
  FiMessageSquare,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import profileImg from "../../assests/user.jpg";
import { adminNotificationMessages } from "./DummyData";
import MessageDropdown from "./MessageDropdown";
import SearchBox from "../SearchBox";
import { MyContext } from "../../App";

const Header = ({ sidebarExpanded, toggleSidebar }) => {
  const [isDark, setIsDark] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const context = useContext(MyContext);

  useEffect(() => {
    const onDown = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setOpenDropdown(null);
    };

    const onKey = (e) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const badges = useMemo(
    () => ({
      cart: 2,
      notification: 12,
      messages: adminNotificationMessages?.unreadCount ?? 0,
    }),
    [],
  );

  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <header className="dashboard-header">
      <div className="header-shell">
        {/* Part 1: Sidebar Toggle */}
        <div className="header-left">
          <img
            src={logo}
            width="120px"
            height="80px"
            className="logo"
            alt="logo"
          />
          <span className="logo-text">HOTASH</span>

          <button
            type="button"
            className="header-icon-btn"
            aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
            onClick={toggleSidebar}
          >
            {sidebarExpanded ? (
              <MdOutlineMenuOpen size={20} />
            ) : (
              <MdOutlineMenu size={20} />
            )}
          </button>

          {/* Part 2: Search */}
          <SearchBox />
        </div>

        {/* Part 3: Action Icons */}
        <div className="header-right">
          <div className="header-actions" ref={dropdownRef}>
            <button
              type="button"
              className="header-icon-btn"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={toggleTheme}
            >
              {isDark ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdOutlineDarkMode size={20} />
              )}
            </button>

            <button
              type="button"
              className="header-icon-btn"
              aria-label="Language"
            >
              <FiGlobe size={20} />
            </button>

            {/* Cart dropdown */}
            <div className="header-dropdown-wrap">
              <button
                type="button"
                className="header-icon-btn header-icon-btn--badge"
                aria-label="Cart"
                aria-expanded={openDropdown === "cart"}
                onClick={() =>
                  setOpenDropdown((v) => (v === "cart" ? null : "cart"))
                }
              >
                <FiShoppingCart size={20} />
                <span className="header-badge">{badges.cart}</span>
              </button>

              {openDropdown === "cart" && (
                <div className="header-dropdown" role="menu">
                  <div className="header-dropdown-head">
                    <FiShoppingCart size={16} />
                    <span>Cart</span>
                  </div>
                  <button className="header-dropdown-item" type="button">
                    <span className="header-dropdown-item-ic">🛒</span>
                    <span>View cart</span>
                  </button>
                  <button className="header-dropdown-item" type="button">
                    <span className="header-dropdown-item-ic">⚡</span>
                    <span>Quick checkout</span>
                  </button>
                  <button
                    className="btn btn-primary mt-4 btn-all"
                    type="button"
                  >
                    View All Orders
                  </button>
                </div>
              )}
            </div>

            {/* Messages dropdown */}
            <div className="header-dropdown-wrap">
              <button
                type="button"
                className="header-icon-btn header-icon-btn--badge"
                aria-label="Messages"
                aria-expanded={openDropdown === "messages"}
                onClick={() =>
                  setOpenDropdown((v) => (v === "messages" ? null : "messages"))
                }
              >
                <FiMessageSquare size={20} />
                <span className="header-badge">{badges.messages}</span>
              </button>

              {openDropdown === "messages" && (
                <MessageDropdown
                  open={true}
                  anchorEl={null}
                  onClose={() => setOpenDropdown(null)}
                  isDark={isDark}
                />
              )}
            </div>

            {/* Notifications dropdown */}
            <div className="header-dropdown-wrap">
              <button
                type="button"
                className="header-icon-btn header-icon-btn--badge"
                aria-label="Notifications"
                aria-expanded={openDropdown === "notifications"}
                onClick={() =>
                  setOpenDropdown((v) =>
                    v === "notifications" ? null : "notifications",
                  )
                }
              >
                <FiBell size={20} />
                <span className="header-badge">{badges.notification}</span>
              </button>

              {openDropdown === "notifications" && (
                <div className="header-dropdown" role="menu">
                  <div className="header-dropdown-head">
                    <FiBell size={16} />
                    <span>Notifications</span>
                  </div>

                  {[
                    {
                      id: "u1",
                      name: "Aarav Patel",
                      email: "aarav.patel@example.com",
                      message:
                        "Hi Admin, could you please update my account security settings?",
                    },
                    {
                      id: "u2",
                      name: "Meera Sharma",
                      email: "meera.sharma@example.com",
                      message:
                        "Hello Admin, I’d like to know the status of my recent support ticket.",
                    },
                    {
                      id: "u3",
                      name: "Rohan Verma",
                      email: "rohan.verma@example.com",
                      message:
                        "Requesting access to the dashboard analytics. Thanks!",
                    },
                  ].map((user) => (
                    <div key={user.id} className="header-notif-row">
                      <img
                        className="header-notif-avatar"
                        src={profileImg}
                        alt={user.name}
                      />
                      <div className="header-notif-content">
                        <div className="header-notif-top">
                          <div className="header-notif-name">{user.name}</div>
                          <div className="header-notif-email">{user.email}</div>
                        </div>
                        <div className="header-notif-message">
                          {user.message}
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    className="btn btn-primary mt-4 btn-all"
                    type="button"
                  >
                    View All Notification
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Part 4: Admin Profile */}
          <div
            className="header-profile header-dropdown-wrap"
            ref={dropdownRef}
            aria-label="Admin profile"
          >
            <div className="header-profile-main">
              <img
                className="header-profile-avatar"
                src={profileImg}
                alt="Admin"
              />
              <div className="header-profile-info">
                <div className="header-profile-name">Admin User</div>
                <div className="header-profile-email">admin@example.com</div>
              </div>
            </div>

            <button
              type="button"
              className="header-dropdown-toggle"
              aria-label="Admin menu"
              aria-expanded={openDropdown === "admin"}
              onClick={() =>
                setOpenDropdown((v) => (v === "admin" ? null : "admin"))
              }
            >
              <MdOutlineAccountCircle size={18} />
            </button>

            {openDropdown === "admin" && (
              <div
                className="header-dropdown header-dropdown--admin"
                role="menu"
              >
                <div className="header-dropdown-head">
                  <MdOutlineAccountCircle size={16} />
                  <span>Admin</span>
                </div>

                <button className="header-dropdown-item" type="button">
                  <span className="header-dropdown-item-ic">
                    <FiUser size={16} />
                  </span>
                  <span>My account</span>
                </button>

                {/* Placeholder - kept to match original project */}
                <button className="header-dropdown-item" type="button">
                  <span className="header-dropdown-item-ic">
                    <MdOutlineSettings size={16} />
                  </span>
                  <span>Settings</span>
                </button>

                <button
                  className="header-dropdown-item header-dropdown-item--danger"
                  type="button"
                  onClick={() => {
                    setOpenDropdown(null);
                    navigate("/");
                  }}
                >
                  <span className="header-dropdown-item-ic">
                    <FiLogOut size={16} />
                  </span>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
