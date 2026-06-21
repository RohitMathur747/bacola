import React, { useMemo, useState } from "react";
import { Drawer, Badge } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import {
  Dashboard as DashboardIcon,
  Security as SecurityIcon,
  Group as GroupIcon,
  Inventory2 as InventoryIcon,
  ReceiptLong as InvoiceIcon,
  ShoppingCart as OrdersIcon,
  Message as MessagesIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Description as BlankIcon,
} from "@mui/icons-material";

const drawerWidthDesktop = "30vw";
const drawerWidthTablet = 280;

const SidebarRoot = styled("div")(({ theme }) => ({
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const MenuButton = styled("button")(({ theme }) => ({
  width: "100%",
  border: "none",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  padding: `${theme.spacing(1.15)} ${theme.spacing(1.25)}`,
  borderRadius: 14,
  cursor: "pointer",
  color: theme.palette.text.secondary,
  transition: "background-color 140ms ease, transform 140ms ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "translateY(-1px)",
  },
}));

const MenuButtonActive = styled(MenuButton)(({ theme }) => ({
  background: theme.palette.action.selected,
  color: theme.palette.text.primary,
  boxShadow: `0 12px 30px ${theme.palette.action.selected}`,
}));

const IconWrap = styled("div")(({ theme }) => ({
  width: 38,
  height: 38,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.primary,
}));

const RightArrow = ({ color }) => (
  <span style={{ display: "flex", alignItems: "center", color }} aria-hidden>
    ›
  </span>
);

const badgeSx = {
  "& .MuiBadge-badge": {
    height: 20,
    minWidth: 20,
    padding: "0 6px",
    fontWeight: 800,
    fontSize: 12,
    borderRadius: 999,
  },
};

export default function SideBar({ sidebarExpanded, toggleSidebar }) {
  const muiTheme = useTheme();
  const [activeKey, setActiveKey] = useState("dashboard");

  const menuItems = useMemo(
    () => [
      {
        key: "dashboard",
        label: "Dashboard",
        Icon: DashboardIcon,
        arrow: true,
      },
      { key: "auth", label: "Authentication", Icon: SecurityIcon, arrow: true },
      {
        key: "users",
        label: "Users",
        Icon: GroupIcon,
        arrow: false,
        badge: { type: "hot" },
      },
      {
        key: "products",
        label: "Products",
        Icon: InventoryIcon,
        arrow: false,
        badge: { type: "new" },
      },
      {
        key: "invoices",
        label: "Invoices",
        Icon: InvoiceIcon,
        arrow: true,
        badge: null,
      },
      {
        key: "orders",
        label: "Orders",
        Icon: OrdersIcon,
        arrow: false,
        badge: { type: "count", value: 5 },
      },
      {
        key: "messages",
        label: "Messages",
        Icon: MessagesIcon,
        arrow: false,
        badge: { type: "count", value: 3 },
      },
      {
        key: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        arrow: false,
        badge: { type: "count", value: 2 },
      },
      { key: "settings", label: "Settings", Icon: SettingsIcon, arrow: false },
      { key: "blank", label: "Blank Page", Icon: BlankIcon, arrow: false },
    ],
    [],
  );

  const renderBadge = (item) => {
    if (!item.badge) return null;

    if (item.badge.type === "hot") {
      return (
        <Badge
          {...badgeSx}
          badgeContent={"HOT"}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#ef4444",
              color: "#fff",
            },
          }}
        />
      );
    }

    if (item.badge.type === "new") {
      return (
        <Badge
          {...badgeSx}
          badgeContent={"NEW"}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#ec4899",
              color: "#fff",
            },
          }}
        />
      );
    }

    if (item.badge.type === "count") {
      const n = item.badge.value;
      return (
        <Badge
          {...badgeSx}
          badgeContent={String(n)}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#3b82f6",
              color: "#fff",
            },
          }}
        />
      );
    }

    return null;
  };

  const drawerContent = (
    <SidebarRoot
      className="admin-sidebar"
      style={{
        width: sidebarExpanded ? drawerWidthDesktop : 0,
        transition: "width 260ms ease",
        background:
          muiTheme.palette.mode === "dark"
            ? "rgba(15,23,42,0.72)"
            : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="admin-sidebar-inner">
        <div className="admin-sidebar-section-title">MAIN PAGES</div>

        <div className="admin-sidebar-menu">
          {menuItems.map((item) => {
            const isActive = activeKey === item.key;
            const ArrowShown = item.arrow;

            const badge = renderBadge(item);
            const badgeNode = item.badge ? (
              <span className={"admin-sidebar-badgeWrap " + item.key}>
                {badge}
              </span>
            ) : null;

            return (
              <div key={item.key} className="admin-sidebar-row">
                {(() => {
                  const ButtonComponent = isActive
                    ? MenuButtonActive
                    : MenuButton;

                  return (
                    <ButtonComponent
                      type="button"
                      onClick={() => {
                        setActiveKey(item.key);
                        if (toggleSidebar) toggleSidebar();
                      }}
                      className={
                        isActive
                          ? "admin-sidebar-item admin-sidebar-item--active"
                          : "admin-sidebar-item"
                      }
                    >
                      <IconWrap>
                        <item.Icon style={{ fontSize: 20 }} />
                      </IconWrap>

                      <span className="admin-sidebar-label">{item.label}</span>

                      <div className="admin-sidebar-spacer" />

                      {/* Badge placement rules */}
                      {item.arrow ? (
                        <div className="admin-sidebar-rightGroup">
                          {item.badge ? (
                            <span className="admin-sidebar-badge">
                              {item.badge.type === "count"
                                ? item.badge.value
                                : item.badge.type === "hot"
                                  ? "HOT"
                                  : "NEW"}
                            </span>
                          ) : null}
                          <span className="admin-sidebar-arrow">›</span>
                        </div>
                      ) : (
                        <div className="admin-sidebar-rightGroup">
                          {item.badge ? (
                            <span className="admin-sidebar-badge admin-sidebar-badge--farRight">
                              {item.badge.type === "count"
                                ? item.badge.value
                                : item.badge.type === "hot"
                                  ? "HOT"
                                  : "NEW"}
                            </span>
                          ) : null}
                        </div>
                      )}
                    </ButtonComponent>
                  );
                })()}
              </div>
            );
          })}
        </div>
      </div>
    </SidebarRoot>
  );

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 600 : false;

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={sidebarExpanded}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            background:
              muiTheme.palette.mode === "dark"
                ? "rgba(15,23,42,0.95)"
                : "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <div
      className="admin-sidebar-host"
      style={{
        position: "relative",
        height: "100vh",
        width: sidebarExpanded ? drawerWidthDesktop : 0,
        transition: "width 260ms ease",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
        }}
      >
        {drawerContent}
      </div>
    </div>
  );
}
