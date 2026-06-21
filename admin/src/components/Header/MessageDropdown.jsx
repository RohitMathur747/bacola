import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import profileImg from "../../assests/user.jpg";
import { messagesPool } from "./DummyData";

function MessageRow({ isDark, from, text, avatarSrc = profileImg, onClick }) {
  return (
    <Box
      role="listitem"
      onClick={onClick}
      sx={{
        cursor: "pointer",
        display: "flex",
        gap: 1.25,
        alignItems: "center",
        px: 1.25,
        py: 1,
        borderRadius: 2,
        mb: 0.75,
        transition:
          "background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease",
        backgroundColor: isDark ? "transparent" : "transparent",
        "&:hover": {
          backgroundColor: isDark
            ? "rgba(255,255,255,0.06)"
            : "rgba(25,118,210,0.08)",
          transform: "translateY(-1px)",
          boxShadow: isDark
            ? "0 8px 22px rgba(0,0,0,0.25)"
            : "0 10px 26px rgba(2, 132, 199, 0.16)",
        },
      }}
    >
      <Avatar
        src={avatarSrc}
        alt={from}
        sx={{
          width: 36,
          height: 36,
          bgcolor: isDark ? "grey.700" : "grey.200",
          border: isDark
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(0,0,0,0.06)",
          flex: "0 0 auto",
        }}
      />

      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="body2"
            fontWeight={900}
            sx={{
              color: isDark ? "text.primary" : "text.primary",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              flex: 1,
            }}
          >
            {from}
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            mt: 0.25,
            color: isDark ? "text.secondary" : "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            lineHeight: 1.35,
            fontWeight: 650,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default function MessageDropdown({ open, anchorEl, onClose, isDark }) {
  // Requirement #1: data source must be existing messagesPool
  const unreadCount = 5;
  const visibleMessages = 4;

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          width: 320,
          mt: 1.25,
          borderRadius: 3,
          boxShadow: isDark ? 3 : 7,
          maxHeight: 420,
          overflow: "auto",
          bgcolor: isDark ? "grey.900" : "background.paper",
          color: isDark ? "text.primary" : "text.primary",
        },
      }}
    >
      {/* Header */}
      <Box sx={{ px: 2, pt: 1.8, pb: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="subtitle2" fontWeight={900}>
            <span aria-hidden>💬</span>
          </Typography>
          <Typography variant="subtitle2" fontWeight={900}>
            Messages
          </Typography>

          <Box sx={{ flex: 1 }} />
          <Typography variant="caption" color="text.secondary" fontWeight={900}>
            {unreadCount} unread
          </Typography>
        </Stack>
      </Box>
      <Divider />

      {/* Body */}
      <Box
        role="list"
        sx={{
          px: 1.25,
          py: 1.25,
          overflow: "hidden",
        }}
      >
        {Array.isArray(messagesPool) &&
          messagesPool
            .slice(0, visibleMessages)
            .map((m, idx) => (
              <MessageRow
                key={`${m.from}-${idx}`}
                isDark={isDark}
                from={m.from}
                text={m.text}
                onClick={onClose}
              />
            ))}
      </Box>

      {/* Footer */}
      <Divider />
      <Box sx={{ px: 1.25, py: 1.25 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 900,
            py: 1.05,
            boxShadow: isDark ? "none" : undefined,
            "&:hover": {
              boxShadow: isDark ? "none" : undefined,
            },
          }}
        >
          View All Messages
        </Button>
      </Box>
    </Menu>
  );
}
