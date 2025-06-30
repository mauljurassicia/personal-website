"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type Variant = "hidden" | "default" | "hover";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState<Variant>("hidden");
  const idleRef = useRef<NodeJS.Timeout>(undefined);

  /* ————— pointer-follow + idle timer ————— */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // show cursor (or keep current hover scale)
      setVariant((v) => (v === "hover" ? "hover" : "default"));

      // restart idle timer
      clearTimeout(idleRef.current);
      idleRef.current = setTimeout(() => setVariant("hidden"), 1500);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", () => setVariant("hidden")); // hides when pointer leaves window
    return () => {
      window.removeEventListener("mousemove", handleMove);
      clearTimeout(idleRef.current);
    };
  }, []);

  /* ————— grow on [data-cursor="hover"] ————— */
  useEffect(() => {
    const enter = () => setVariant("hover");
    const leave = () => setVariant("default");

    const els = document.querySelectorAll<HTMLElement>("[data-cursor='hover']");
    els.forEach((el) => {
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointerleave", leave);
      });
  }, []);

  /* ————— Motion variants ————— */
  const cursorVariants = {
    hidden:  { opacity: 0, scale: 0,        x: pos.x, y: pos.y },
    default: { opacity: 1, scale: 1,        x: pos.x, y: pos.y },
    hover:   { opacity: 1, scale: 1.5,      x: pos.x, y: pos.y },
  };

  return (
    <motion.img
      src="/cursor.svg"
      alt=""
      className="cursor"
      variants={cursorVariants}
      animate={variant}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        rotate: "-50deg",
        left: 0,
        width: 40,
        height: 40,
        transform: "translate(-50%, -50%)", // centers SVG on pointer
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}