import React from "react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const { id, type = "info", message } = toast;

  const bg =
    type === "success"
      ? "#198754"
      : type === "error"
        ? "#dc3545"
        : type === "warning"
          ? "#ffc107"
          : "#0d6efd";

  return (
    <div
      className="cart-toast alert text-white shadow"
      role="alert"
      style={{ background: bg }}
      aria-live="polite"
    >
      <div className="d-flex align-items-start justify-content-between gap-3">
        <div style={{ fontWeight: 600 }}>{message}</div>
        <button
          type="button"
          className="btn btn-sm btn-close btn-close-white"
          onClick={() => onClose?.(id)}
          aria-label="Close toast"
          style={{ lineHeight: 1 }}
        />
      </div>
    </div>
  );
}
