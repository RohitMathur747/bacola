import React from "react";
import Button from "@mui/material/Button";

const Pagination = ({
  page = 1,
  totalPages = 1,
  onPageChange,
  className = "",
}) => {
  if (!totalPages || totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`paginationWrap ${className}`.trim()}>
      {pages.map((p) => (
        <Button
          key={p}
          className={p === page ? "active" : ""}
          onClick={() => onPageChange?.(p)}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
