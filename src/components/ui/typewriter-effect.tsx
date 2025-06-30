"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/* allow string OR object with per-item className */
export type TypewriterItem =
  | string
  | { text: string; className?: string };

type TypewriterProps = {
  texts: TypewriterItem[];
  className?: string;      // base class applied to <span>
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export default function TypewriterEffect({
  texts,
  className = "",
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1800,
}: TypewriterProps) {
  const [line, setLine]       = useState(0);
  const [slice, setSlice]     = useState(0);
  const [isDel, setDel]       = useState(false);

  /* helpers */
  const item      = texts[line];
  const rawText   = typeof item === "string" ? item : item.text;
  const lineClass = typeof item === "string" ? "" : item.className ?? "";

  /* typing / deleting loop */
  useEffect(() => {
    let id: NodeJS.Timeout;

    if (!isDel && slice < rawText.length) {
      id = setTimeout(() => setSlice(slice + 1), typeSpeed);
    } else if (!isDel && slice === rawText.length) {
      id = setTimeout(() => setDel(true), pause);
    } else if (isDel && slice > 0) {
      id = setTimeout(() => setSlice(slice - 1), deleteSpeed);
    } else if (isDel && slice === 0) {
      setDel(false);
      setLine((line + 1) % texts.length);
    }

    return () => clearTimeout(id);
  }, [slice, isDel, line, rawText, texts.length, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={`${className} ${lineClass}`}>
      {rawText.slice(0, slice)}
      <motion.span
        role="presentation"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        style={{ display: "inline-block" }}
      >
        |
      </motion.span>
    </span>
  );
}
