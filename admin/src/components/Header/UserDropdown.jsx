import React from "react";
import { Box, Divider, Menu, Stack, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DropdownItem from "./DropdownItem";
import { dummyUser } from "./DummyData";

const iconMap = {
  account: <PersonOutlinedIcon fontSize="small" />,
  add: <PersonAddAltOutlinedIcon fontSize="small" />,
  settings: <SettingsOutlinedIcon fontSize="small" />,
  key: <KeyOutlinedIcon fontSize="small" />,
  logout: <LogoutOutlinedIcon fontSize="small" />,
};

export default function UserDropdown({
  open,
  anchorEl,
  onClose,
  isDark,
  profileImg,
  onLogout,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          width: 280,
          mt: 1.25,
          borderRadius: 3,
          boxShadow: isDark ? 3 : 7,
          maxHeight: 420,
          overflow: "auto",
          bgcolor: isDark ? "grey.900" : "background.paper",
        },
      }}
    >
      <Box sx={{ px: 2, pt: 2, pb: 1.25 }}>
        <Stack direction="row" alignItems="center" spacing={1.25}>
          <Box
            component="img"
            src={profileImg}
            alt="Admin"
            sx={{
              width: 44,
              height: 44,
              borderRadius: "999px",
              objectFit: "cover",
              border: "1px solid rgba(17,24,39,0.08)",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" fontWeight={900}>
              {dummyUser.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={700}
            >
              {dummyUser.email}
            </Typography>
          </Box>
          <AccountCircleOutlinedIcon fontSize="small" color="action" />
        </Stack>
      </Box>

      <Divider />

      <Box sx={{ px: 1.5, py: 1.25 }}>
        {dummyUser.items.map((it) => (
          <DropdownItem
            key={it.id}
            icon={iconMap[it.icon]}
            label={it.label}
            danger={!!it.danger}
            onClick={() => {
              if (it.label === "Logout") onLogout?.();
              else onClose();
            }}
          />
        ))}
      </Box>
    </Menu>
  );
}
