"use client";

import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 });

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: 100,
            opacity: 0,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            y: -900,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="fixed text-pink-300 text-xl pointer-events-none"
        >
          💖
        </motion.div>
      ))}
    </>
  );
}