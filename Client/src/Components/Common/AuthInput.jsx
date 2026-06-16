import React from "react";

export default function AuthInput({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  onBlur,
  name,
  error,
  rightAdornment,
  autoComplete,
  inputMode,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label ? (
        <label
          style={{
            fontWeight: 800,
            color: "rgba(0,0,0,0.55)",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </label>
      ) : null}

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className="auth-input"
          style={{
            width: "100%",
            border: error ? "1px solid #ea2b0f" : "1px solid rgba(0,0,0,0.1)",
            borderRadius: 12,
            padding: rightAdornment ? "12px 44px 12px 12px" : "12px 12px",
            outline: "none",
            transition: "border-color 0.15s ease, box-shadow 0.15s ease",
            background: "#fff",
            fontSize: 14,
          }}
        />
        {rightAdornment ? (
          <div
            style={{
              position: "absolute",
              right: 10,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {rightAdornment}
          </div>
        ) : null}
      </div>

      {error ? (
        <div
          style={{
            color: "rgba(160,0,0,0.92)",
            fontWeight: 800,
            fontSize: 13,
            marginTop: 2,
          }}
        >
          {error}
        </div>
      ) : null}
    </div>
  );
}
