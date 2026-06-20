import React from "react";
import { Box, Divider, Menu, Stack, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DropdownItem from "./DropdownItem";
import { dummyNotifications } from "./DummyData";

export default function NotificationDropdown({
  open,
  anchorEl,
  onClose,
  isDark,
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
          maxHeight: 380,
          overflow: "auto",
          bgcolor: isDark ? "grey.900" : "background.paper",
        },
      }}
    >
      <Box sx={{ px: 2, pt: 1.8, pb: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <NotificationsNoneOutlinedIcon fontSize="small" color="action" />
          <Typography variant="subtitle2" fontWeight={800}>
            Notifications
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Typography variant="caption" color="text.secondary" fontWeight={800}>
            {dummyNotifications.unreadCount} new
          </Typography>
        </Stack>
      </Box>
      <Divider />

      <Box sx={{ px: 1.5, py: 1.25 }}>
        {dummyNotifications.items.map((it) => (
          <DropdownItem
            key={it.id}
            icon={
              <span aria-hidden>{it.tone === "success" ? "✅" : "🔔"}</span>
            }
            label={it.label}
            onClick={onClose}
            danger={it.tone === "danger"}
          />
        ))}
      </Box>
    </Menu>
  );
}
