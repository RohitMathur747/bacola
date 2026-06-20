import React from "react";
import { Box, Divider, Menu, Stack, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import DropdownItem from "./DropdownItem";
import { dummyCart } from "./DummyData";

export default function CartDropdown({ open, anchorEl, onClose, isDark }) {
  const themeSx = {
    "& .MuiPaper-root": {
      bgcolor: isDark ? "grey.900" : "background.paper",
      color: isDark ? "text.primary" : "text.primary",
    },
  };

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
          ...themeSx,
        },
      }}
    >
      <Box sx={{ px: 2, pt: 1.8, pb: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocalMallOutlinedIcon fontSize="small" color="action" />
          <Typography variant="subtitle2" fontWeight={800}>
            Cart
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Typography variant="caption" color="text.secondary" fontWeight={800}>
            {dummyCart.itemCount} items
          </Typography>
        </Stack>
      </Box>
      <Divider />

      <Box sx={{ px: 1.5, py: 1 }}>
        {dummyCart.items.map((it) => (
          <Box
            key={it.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1,
              py: 0.75,
              borderRadius: 2,
              bgcolor: isDark ? "grey.800" : "grey.50",
              mb: 0.75,
            }}
          >
            <Box>
              <Typography variant="body2" fontWeight={800}>
                {it.label}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={700}
              >
                Qty: {it.qty}
              </Typography>
            </Box>
            <Typography variant="body2" fontWeight={900}>
              ${it.price.toFixed(2)}
            </Typography>
          </Box>
        ))}

        <Box sx={{ mt: 1.25, px: 1, py: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" fontWeight={800}>
              Subtotal
            </Typography>
            <Box sx={{ flex: 1 }} />
            <Typography variant="body2" fontWeight={900}>
              ${dummyCart.subtotal.toFixed(2)}
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Divider />
      <Box sx={{ px: 1.5, py: 1.25 }}>
        <DropdownItem
          icon={<span aria-hidden>🛒</span>}
          label="View cart"
          onClick={onClose}
        />
        <DropdownItem
          icon={<span aria-hidden>⚡</span>}
          label="Quick checkout"
          onClick={onClose}
        />
      </Box>
    </Menu>
  );
}
