import React from "react";
import { Box, MenuItem, Typography } from "@mui/material";

export default function DropdownItem({
  icon,
  label,
  onClick,
  danger,
  endAdornment,
}) {
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        borderRadius: 1.5,
        mb: 0.5,
        mx: 0.25,
        color: danger ? "error.main" : "text.primary",
        "&:hover": {
          bgcolor: danger ? "error.light" : "action.hover",
        },
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}
      >
        {icon ? (
          <Box
            sx={{
              width: 28,
              height: 28,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: danger ? "error.main" : "text.secondary",
            }}
          >
            {icon}
          </Box>
        ) : null}
        <Typography variant="body2" fontWeight={700} sx={{ flex: 1 }}>
          {label}
        </Typography>
        {endAdornment ?? null}
      </Box>
    </MenuItem>
  );
}
