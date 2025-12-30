"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  color?: string;      // ex: "#22c55e"
  fontSize?: number;   // ex: 16
  speed?: number;      // ex: 1
};

export default function MatrixRain({
  className,
  color = "#22c55e",
  fontSize = 16,
  speed = 1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect "reduced motion"
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArr = chars.split("");

    let w = 0;
    let h = 0;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.floor(w / fontSize);
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      // voile noir léger pour laisser une traînée
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // reset + vitesse
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += speed;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      // image statique si motion réduite
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [color, fontSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "fixed inset-0 -z-10"}
      aria-hidden="true"
    />
  );
}

