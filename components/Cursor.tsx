"use client";

import { useEffect, useRef } from "react";

/** Custom cursor: only for mouse devices, and respects reduced motion. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const d = dot.current;
    const r = ring.current;
    if (!fine || reduce || !d || !r) return;

    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0;
    let raf = 0;

    const loop = () => {
      dx += (mx - dx) * 0.2;
      dy += (my - dy) * 0.2;
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      d.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      r.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1 ? 0 : requestAnimationFrame(loop);
    };
    let started = false;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!started) {
        started = true;
        dx = rx = mx;
        dy = ry = my;
        d.hidden = false;
        r.hidden = false;
      }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const SEL = "a, button, .interactive-el";
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(SEL)) {
        r.style.width = r.style.height = "60px";
        r.style.borderColor = "#B5A27A";
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(SEL)) {
        r.style.width = r.style.height = "40px";
        r.style.borderColor = "rgba(63,73,50,0.4)";
      }
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  const base = "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full";
  return (
    <>
      <div ref={dot} hidden aria-hidden="true" className={`${base} h-3 w-3 bg-primary mix-blend-difference`} />
      <div
        ref={ring}
        hidden
        aria-hidden="true"
        className={`${base} h-10 w-10 border border-primary/40 transition-[width,height,border-color] duration-200`}
      />
    </>
  );
}
