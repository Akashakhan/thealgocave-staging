"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroLoadingProps {
  imageSrc?: string;
  duration?: number;
  onComplete?: () => void;
}

export default function HeroLoading({ 
  imageSrc = "/overlay.svg",
  duration = 3000,
  onComplete 
}: HeroLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [startCurtain, setStartCurtain] = useState(false);

  useEffect(() => {
    // Show full image for a moment, then start curtain animation
    const curtainTimer = setTimeout(() => {
      setStartCurtain(true);
    }, 800);

    // Complete loading after curtain animation
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999]  overflow-hidden pointer-events-none"
          style={{zoom:5}}
        >
          {/* Full Screen Image - Slides Down */}
          <motion.div
            initial={{ y: "-50%", scale: 2 }}
            animate={{ y: startCurtain ? "100%" : 0 }}
            transition={{
              duration: 2.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: startCurtain ? 0 : 0,
            }}
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
