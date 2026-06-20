import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Shared dropdown state + behavior.
 * - Only one dropdown can be open at a time (openKey)
 * - Outside click closes
 * - Escape closes
 * - Supports MUI Menu via anchorEl
 */
export default function useDropdown() {
  const [openKey, setOpenKey] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const lastTriggerRef = useRef(null);

  const close = useCallback(() => {
    setOpenKey(null);
    setAnchorEl(null);
  }, []);

  const open = useCallback((key, eventOrAnchor) => {
    // If called from a click, use event.currentTarget as anchor.
    const anchor = eventOrAnchor?.currentTarget ?? eventOrAnchor ?? null;
    lastTriggerRef.current = anchor;
    setOpenKey(key);
    setAnchorEl(anchor);
  }, []);

  useEffect(() => {
    const onPointerDown = (e) => {
      // If click happened on the trigger button itself, let MUI/menu logic handle it.
      // Otherwise close.
      const target = e.target;
      const trigger = lastTriggerRef.current;
      if (trigger && target && trigger.contains?.(target)) return;
      close();
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close]);

  return {
    openKey,
    anchorEl,
    open,
    close,
    setOpenKey,
    setAnchorEl,
  };
}
