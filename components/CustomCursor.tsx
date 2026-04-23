"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Core mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for trailing effects
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  // Trailing orb lag (stronger dampening)
  const trailOptions = { damping: 40, stiffness: 200, mass: 1 };
  const trailX = useSpring(mouseX, trailOptions);
  const trailY = useSpring(mouseY, trailOptions);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverable = () => {
      // Find elements that should trigger hover state
      const hoverables = document.querySelectorAll(
        "a, button, input, textarea, select, .hoverable, [role='button']"
      );
      
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Give DOM time to mount for initial query
    setTimeout(checkHoverable, 500);

    // Setup mutation observer for dynamically added hoverables
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          checkHoverable();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Orb - Instant follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="bg-primary shadow-[0_0_20px_var(--color-primary)] rounded-full"
          animate={{
            width: isHovering ? 24 : 12,
            height: isHovering ? 24 : 12,
            opacity: isHovering ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </motion.div>

      {/* Trailing Orb - Slower follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99] rounded-full mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="border border-secondary/50 shadow-[0_0_30px_var(--color-secondary)] rounded-full bg-secondary/10"
          animate={{
            width: isHovering ? 60 : 36,
            height: isHovering ? 60 : 36,
            opacity: isHovering ? 0 : 0.6,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </motion.div>
    </>
  );
}
